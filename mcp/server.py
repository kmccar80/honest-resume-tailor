"""Check evidence excerpts without fetching or storing source documents."""

import os
import re

from mcp.server.fastmcp import FastMCP
from pydantic import BaseModel, Field

server = FastMCP(
    "Honest Resume Tailor",
    host="0.0.0.0",
    port=int(os.environ.get("PORT", "8000")),
    stateless_http=True,
    json_response=True,
)
NUMBER = re.compile(r"(?<![\w.])(?:[0-9]{1,3}(?:,[0-9]{3})+|[0-9]+)(?:\.[0-9]+)?%?(?!\w)")


class Evidence(BaseModel):
    source: str = Field(min_length=1, max_length=200)
    location: str = Field(min_length=1, max_length=200)
    excerpt: str = Field(min_length=1, max_length=4_000)


class SourceCheck(BaseModel):
    source: str
    location: str
    quote_found: bool | None
    matching_number_tokens: list[str]


class ClaimCheck(BaseModel):
    evidence_provided: bool
    sources: list[SourceCheck]
    unmatched_number_tokens: list[str]
    human_review_required: bool = True


def numbers(text: str) -> set[str]:
    return {match.replace(",", "") for match in NUMBER.findall(text)}


@server.tool(annotations={"readOnlyHint": True, "destructiveHint": False, "openWorldHint": False})
def check_claim_evidence(
    claim: str = Field(min_length=1, max_length=1_000),
    evidence: list[Evidence] = Field(max_length=8),
    quote: str | None = Field(default=None, min_length=1, max_length=1_000),
) -> ClaimCheck:
    """Check quote and number matches in user-approved redacted excerpts.

    Sources may be files, links, or pasted text. Provide the excerpt and its
    source location. Results require human review of context and authorship.
    """
    if not claim.strip():
        raise ValueError("Provide a nonblank claim.")
    if quote is not None and not quote.strip():
        raise ValueError("Provide a nonblank quote or omit it.")

    usable = [item for item in evidence if all(
        field.strip() for field in (item.source, item.location, item.excerpt)
    )]
    claim_numbers = numbers(claim)
    matched_numbers: set[str] = set()
    checks = []
    for item in usable:
        matches = claim_numbers & numbers(item.excerpt)
        matched_numbers.update(matches)
        checks.append(SourceCheck(
            source=item.source,
            location=item.location,
            quote_found=None if quote is None else quote in item.excerpt,
            matching_number_tokens=sorted(matches),
        ))
    return ClaimCheck(
        evidence_provided=bool(checks),
        sources=checks,
        unmatched_number_tokens=sorted(claim_numbers - matched_numbers),
    )


if __name__ == "__main__":
    server.run(transport="streamable-http")

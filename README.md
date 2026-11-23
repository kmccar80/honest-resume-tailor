# Honest Resume Tailor

Privacy-first static Next.js site linking to a shared Custom GPT. The site never receives resumes, has no upload endpoint, no database, no AWS infrastructure and no OpenAI API key. Visitors use their own ChatGPT accounts and allowances.

## Finish setup

1. Create your GPT at https://chatgpt.com/gpts/editor using the complete instructions in [GPT_INSTRUCTIONS.md](GPT_INSTRUCTIONS.md). Publishing requires an eligible ChatGPT account.
2. Publish for "Anyone with the link" if available, and copy the resulting https://chatgpt.com/g/... URL.
3. In GitHub go to **Settings → Secrets and variables → Actions → Variables → New repository variable**. Name it `NEXT_PUBLIC_GPT_URL`, value the published GPT link (not a secret).
4. Merge the website PR into `master`.
5. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
6. Run **Actions → Deploy static website** if needed.
7. Test https://kmccar80.github.io/honest-resume-tailor/ in an incognito browser and with a free ChatGPT account if possible.
8. Add the website URL to Handshake.

Until the GPT link is set, the site shows a clear "coming soon" message.

## Portfolio planning and evidence review

The [assistant instructions](GPT_INSTRUCTIONS.md) turn a skill gap into a free learning plan with a project and observable completion criteria. Learners can bring evidence from reports, spreadsheets, slides, designs, recordings, certificates, redacted work samples, or code. The assistant traces claims to specific sources and asks for confirmation of individual contributions before adding new resume claims.

Apply the updated instructions in GPT Builder to activate this workflow for the linked Custom GPT. The website remains a static entry point.

### Evidence checker MCP service

The separate service checks exact quote matches and numeric tokens against redacted excerpts and returns source names and locations. It works with excerpts from any role or artifact format. A matching quote or number needs human review for meaning, units, dates, and individual ownership. The service does not fetch links or persist evidence. Share only excerpts you authorize sending to the service, and keep request bodies out of hosting logs.

Run it with Python 3.10+:

```sh
python -m venv .venv
. .venv/bin/activate
python -m pip install -r mcp/requirements.txt
python mcp/server.py
```

The local Streamable HTTP endpoint is `http://localhost:8000/mcp`. For public submission, deploy the service separately behind HTTPS and verify that endpoint in ChatGPT. GitHub Pages serves the static site.

## Development

```sh
npm ci
npm run dev
npm run build
```

Static build output is `out/`; GitHub Pages serves the repository subpath.

## Privacy and limits

No resume uploads or processing occur on this site. Visitors share their files with ChatGPT under OpenAI's applicable policies. ChatGPT may retain data according to its settings and policies. Users must review final claims. A Custom GPT's instructions cannot guarantee error-free output.

No OpenAI API charges are incurred by this site. Visitors use their own ChatGPT plan allowances.
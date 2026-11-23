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
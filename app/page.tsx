const gptUrl = process.env.NEXT_PUBLIC_GPT_URL || "";
const ready = /^https:\/\/chatgpt\.com\/g\/[^\s/]+/.test(gptUrl);

export default function Home() {
  return (
    <main className="site">
      <header className="nav"><a className="brand" href="#top">Honest<span>Resume</span>Tailor</a><a href="#how" className="navlink">How it works</a></header>
      <section id="top" className="hero">
        <div className="eyebrow">AI-assisted career preparation · Human-verified claims</div>
        <h1>Make your experience stand out.<br/><em>Never make it up.</em></h1>
        <p className="lead">Match your real experience to a job posting, uncover skill gaps, and prepare for interviews—with a confirmation step before any new claim goes into your resume.</p>
        {ready ? <a className="primary" href={gptUrl} target="_blank" rel="noopener noreferrer">Launch resume assistant ↗</a> : <div className="notready" role="status">Assistant link coming soon. The site is ready; the owner still needs to publish and connect the Custom GPT.</div>}
        <p className="fine">Opens ChatGPT in a new tab. A ChatGPT account is required; plan and file-upload limits may apply.</p>
      </section>
      <section id="how" className="section">
        <h2>How it works</h2>
        <div className="cards">
          <article><div className="number">01</div><h3>Bring your evidence</h3><p>In ChatGPT, upload your PDF or Word resume and paste a real job posting. Do not include information you do not want to share with ChatGPT.</p></article>
          <article><div className="number">02</div><h3>Review the match</h3><p>See role requirements mapped to your actual resume evidence, along with skill gaps and proposed edits.</p></article>
          <article><div className="number">03</div><h3>Confirm every claim</h3><p>Approve, correct, or reject proposed claims before asking for a final tailored resume and Interview Readiness Pack.</p></article>
        </div>
      </section>
      <section className="section two"><div><h2>Built for honest applications.</h2><p>The assistant is instructed not to invent skills, credentials, employment, metrics, or accomplishments. You remain responsible for checking the final wording and accuracy.</p></div><div className="panel"><h3>What you'll get</h3><ul><li>Job requirement and evidence mapping</li><li>Resume bullet suggestions</li><li>Skill-gap analysis</li><li>Interview questions and preparation</li><li>Explicit approval checkpoints</li></ul></div></section>
      <section className="section privacy"><h2>Privacy by design</h2><p>This website does not accept, transmit, or store your resume. The assistant opens separately in ChatGPT, where you choose what to upload. OpenAI's account settings, file limits, and data-handling policies apply. Review <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">OpenAI's Privacy Policy ↗</a> before submitting sensitive information.</p><p>Do not upload Social Security numbers, financial account details, passwords, or other unnecessary sensitive data. This tool is guidance, not a guarantee of hiring or error-free output.</p></section>
      <footer><span>Honest Resume Tailor</span><span>Independent project · Not affiliated with OpenAI or Handshake</span></footer>
    </main>
  );
}

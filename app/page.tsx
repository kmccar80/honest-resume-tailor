export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">
          Honest Resume Tailor
        </h1>

        <p className="text-gray-600 mb-8">
          Upload your resume, paste a job description, and receive
          tailored recommendations without inventing skills or experience.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Upload Resume
          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Job Description
          </label>

          <textarea
            className="w-full h-64 border rounded-md p-3"
            placeholder="Paste the job description here..."
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Analyze Resume
        </button>

        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Results
          </h2>

          <p className="text-gray-500">
            Analysis results will appear here.
          </p>
        </div>
      </div>
    </main>
  );
}
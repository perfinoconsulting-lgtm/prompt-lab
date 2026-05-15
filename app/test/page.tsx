"use client";

import { useState } from "react";

export default function TestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setResult(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image file");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          `Error (${response.status}): ${data.error || "Unknown error"}`
        );
        return;
      }

      setResult(data.prompt);
    } catch (err) {
      setError(`Request failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Image Prompt Analyzer</h1>
        <p className="text-slate-300 mb-8">Upload an image to generate an AI art prompt</p>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-white font-medium mb-3">Select Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={loading}
              className="block w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 disabled:opacity-50"
            />
            {file && (
              <p className="text-sm text-slate-400 mt-2">
                Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!file || loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing..." : "Analyze Image"}
          </button>
        </form>

        {error && (
          <div className="mt-6 bg-red-900 border border-red-700 text-red-100 px-6 py-4 rounded-lg">
            <p className="font-semibold">Error</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-6 bg-green-900 border border-green-700 text-green-100 px-6 py-4 rounded-lg">
            <p className="font-semibold">Generated Prompt</p>
            <p className="text-sm mt-3 leading-relaxed">{result}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert("Prompt copied to clipboard!");
              }}
              className="mt-4 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded text-sm font-medium transition"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

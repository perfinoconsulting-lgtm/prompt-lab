"use client";

import { useState } from "react";
import DropZone from "@/app/components/DropZone";
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";
import Toast from "@/app/components/ui/Toast";

export default function Lab() {
  const [file, setFile] = useState<File | null>(null);
  const [style, setStyle] = useState("auto");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success",
  });

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      if (style !== "auto") formData.append("style", style);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data.prompt);
      setToast({ show: true, message: "Prompt generated successfully!", type: "success" });
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Failed to analyze image";
      setToast({ show: true, message: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Image to Prompt Generator</h1>
        <p className="text-slate-400">Upload an image and let AI generate a detailed prompt for you</p>
      </div>

      {/* Upload Section */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
        <DropZone onFileSelect={handleFileSelect} />

        {file && (
          <div className="mt-6 p-4 bg-slate-700 rounded-lg">
            <p className="text-sm text-slate-300">
              Selected: <span className="font-semibold text-white">{file.name}</span>
            </p>
          </div>
        )}
      </div>

      {/* Style Selector */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
        <Select
          label="Art Style Preference (Optional)"
          options={[
            { value: "auto", label: "Auto-detect" },
            { value: "midjourney", label: "Midjourney" },
            { value: "stable", label: "Stable Diffusion" },
            { value: "dalle", label: "DALL-E" },
            { value: "photorealism", label: "Photorealism" },
            { value: "painting", label: "Painting" },
            { value: "anime", label: "Anime" },
          ]}
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
      </div>

      {/* Analyze Button */}
      <Button
        onClick={handleAnalyze}
        isLoading={loading}
        disabled={!file || loading}
        className="w-full mb-8"
        size="lg"
      >
        {loading ? "Analyzing..." : "Generate Prompt"}
      </Button>

      {/* Result Section */}
      {result && (
        <div className="bg-green-900 border border-green-700 rounded-lg p-8">
          <h2 className="text-xl font-bold text-green-100 mb-4">Generated Prompt</h2>
          <p className="text-green-50 leading-relaxed mb-6">{result}</p>
          <div className="flex gap-3">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(result);
                setToast({ show: true, message: "Prompt copied to clipboard!", type: "success" });
              }}
              variant="primary"
            >
              Copy Prompt
            </Button>
            <Button variant="secondary">Save to Gallery</Button>
          </div>
        </div>
      )}

      <Toast
        isVisible={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}

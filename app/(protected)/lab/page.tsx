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
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-1">Image to Prompt Generator</h1>
        <p className="text-steel text-base">Upload an image and let AI generate a detailed prompt for you</p>
      </div>

      {/* Upload */}
      <div className="bg-canvas border border-hairline rounded-[12px] p-6 mb-5">
        <DropZone onFileSelect={handleFileSelect} />
        {file && (
          <div className="mt-4 px-4 py-3 bg-surface rounded-[8px] flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brand-green shrink-0">
              <path d="M2.5 7l2.5 2.5 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-charcoal">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          </div>
        )}
      </div>

      {/* Style Selector */}
      <div className="bg-canvas border border-hairline rounded-[12px] p-6 mb-5">
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

      {/* Generate Button */}
      <Button
        onClick={handleAnalyze}
        isLoading={loading}
        disabled={!file || loading}
        className="w-full mb-6"
        size="lg"
      >
        {loading ? "Analyzing…" : "Generate Prompt"}
      </Button>

      {/* Result */}
      {result && (
        <div className="bg-tint-mint border border-brand-green/20 rounded-[12px] p-6">
          <div className="flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brand-green">
              <path d="M2.5 7l2.5 2.5 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-sm font-semibold text-brand-green">Generated Prompt</h2>
          </div>
          <p className="text-charcoal leading-relaxed mb-5 text-base">{result}</p>
          <div className="flex gap-3">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(result);
                setToast({ show: true, message: "Prompt copied to clipboard!", type: "success" });
              }}
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

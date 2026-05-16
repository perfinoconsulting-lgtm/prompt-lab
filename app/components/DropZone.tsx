"use client";

import { useRef, useState } from "react";

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

export default function DropZone({ onFileSelect }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const validateFile = (file: File): boolean => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Only JPG, PNG, and WebP files are supported");
      return false;
    }
    if (file.size > MAX_SIZE) {
      setError("File size must be less than 5MB");
      return false;
    }
    setError(null);
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      onFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => fileInputRef.current?.click()}
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition ${
        isDragging
          ? "border-blue-500 bg-blue-500/10"
          : "border-slate-600 hover:border-slate-500"
      }`}
      role="button"
      tabIndex={0}
      aria-label="Drop an image or click to upload"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="hidden"
      />

      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl">📸</div>
        <div>
          <p className="text-white font-medium">Drop your art image here or click to upload</p>
          <p className="text-slate-400 text-sm mt-1">JPG, PNG, WebP – max 5 MB</p>
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
    </div>
  );
}

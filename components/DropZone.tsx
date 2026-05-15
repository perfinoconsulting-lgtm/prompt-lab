"use client";

import { useRef, useState } from "react";

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024;

export default function DropZone({ onFileSelect }: DropZoneProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function validate(file: File): string | null {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Only JPG, PNG, and WebP images are accepted.";
    }
    if (file.size > MAX_SIZE) {
      return "File must be under 5 MB.";
    }
    return null;
  }

  function handleFile(file: File) {
    const err = validate(file);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    onFileSelect(file);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDraggingOver(true);
  }

  function onDragLeave(e: React.DragEvent) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDraggingOver(false);
    }
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        role="button"
        tabIndex={0}
        aria-label="Drop your art image here or click to upload"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={[
          "flex flex-col items-center justify-center gap-3",
          "w-full min-h-48 rounded-xl border-2 border-dashed",
          "cursor-pointer select-none transition-colors duration-150",
          "bg-zinc-900 text-zinc-400",
          isDraggingOver
            ? "border-indigo-400 bg-zinc-800 text-zinc-200"
            : "border-zinc-600 hover:border-zinc-400",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <p className="text-sm font-medium text-center px-4">
          Drop your art image here or click to upload
        </p>
        <p className="text-xs text-zinc-500">JPG, PNG, WebP — max 5 MB</p>
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={onInputChange}
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockHistory = [
    {
      id: "1",
      date: "2026-05-15",
      prompt:
        "A serene landscape painting of mountains at sunset, oil painting style, golden hour lighting, detailed brushstrokes, high quality…",
      tint: "bg-tint-sky",
      label: "Landscape",
    },
    {
      id: "2",
      date: "2026-05-14",
      prompt:
        "Abstract digital art with vibrant neon colors, geometric shapes, futuristic aesthetic, glitch art style…",
      tint: "bg-tint-lavender",
      label: "Abstract",
    },
    {
      id: "3",
      date: "2026-05-13",
      prompt:
        "Portrait of a woman with long flowing hair, Renaissance style, soft lighting, detailed face, classical painting…",
      tint: "bg-tint-peach",
      label: "Portrait",
    },
  ];

  const filtered = mockHistory.filter((item) =>
    item.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-1">Generation History</h1>
        <p className="text-steel text-base">View and manage your past image analyses</p>
      </div>

      <div className="mb-6">
        <Input
          placeholder="Search prompts…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-canvas border border-hairline rounded-[12px] p-16 text-center">
          <p className="text-charcoal font-medium mb-1">No generations found</p>
          <p className="text-steel text-sm">Start by uploading an image in the Generator</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <div key={item.id} className="bg-canvas border border-hairline rounded-[12px] p-5 flex gap-5 items-start">
              <div className={`${item.tint} rounded-[8px] w-10 h-10 shrink-0 flex items-center justify-center text-sm font-semibold text-charcoal`}>
                {item.label[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-steel">{item.date}</span>
                  <span className="px-2 py-0.5 text-xs font-medium bg-surface text-steel rounded-full">{item.label}</span>
                </div>
                <p className="text-sm text-charcoal leading-relaxed line-clamp-2">{item.prompt}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button size="sm" variant="secondary">View</Button>
                <Button size="sm" variant="danger">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

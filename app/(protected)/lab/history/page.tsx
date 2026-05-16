"use client";

import { useState } from "react";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - in production, this would come from a database
  const mockHistory = [
    {
      id: "1",
      date: "2026-05-15",
      prompt:
        "A serene landscape painting of mountains at sunset, oil painting style, golden hour lighting, detailed brushstrokes, high quality...",
      image: "🏔️",
    },
    {
      id: "2",
      date: "2026-05-14",
      prompt:
        "Abstract digital art with vibrant neon colors, geometric shapes, futuristic aesthetic, glitch art style...",
      image: "🎨",
    },
    {
      id: "3",
      date: "2026-05-13",
      prompt:
        "Portrait of a woman with long flowing hair, Renaissance style, soft lighting, detailed face, classical painting...",
      image: "👤",
    },
  ];

  const filteredHistory = mockHistory.filter((item) =>
    item.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Generation History</h1>
        <p className="text-slate-400">View and manage your past image analyses</p>
      </div>

      {/* Search */}
      <Input
        label="Search prompts"
        placeholder="Search by keyword..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8"
      />

      {/* History List */}
      {filteredHistory.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-slate-400 text-lg">No generations found</p>
          <p className="text-slate-500 text-sm mt-2">Start by uploading an image in the Generator</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredHistory.map((item) => (
            <Card key={item.id} className="flex gap-6">
              <div className="text-5xl">{item.image}</div>
              <div className="flex-1">
                <p className="text-sm text-slate-400 mb-2">{item.date}</p>
                <p className="text-slate-200 line-clamp-2">{item.prompt}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">
                  View
                </Button>
                <Button size="sm" variant="danger">
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

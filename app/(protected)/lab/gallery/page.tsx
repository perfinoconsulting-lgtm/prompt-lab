"use client";

import { useState } from "react";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Mock gallery data
  const mockGallery = [
    {
      id: "1",
      image: "🏔️",
      title: "Mountain Sunset",
      prompt:
        "A serene landscape painting of mountains at sunset, oil painting style, golden hour lighting, detailed brushstrokes...",
    },
    {
      id: "2",
      image: "🎨",
      title: "Neon Abstract",
      prompt:
        "Abstract digital art with vibrant neon colors, geometric shapes, futuristic aesthetic, glitch art style...",
    },
    {
      id: "3",
      image: "👤",
      title: "Renaissance Portrait",
      prompt:
        "Portrait of a woman with long flowing hair, Renaissance style, soft lighting, detailed face, classical painting...",
    },
    {
      id: "4",
      image: "🌌",
      title: "Cosmic Nebula",
      prompt: "A vibrant nebula in deep space, colorful cosmic dust, stars, galaxy background...",
    },
    {
      id: "5",
      image: "🏙️",
      title: "Cyberpunk City",
      prompt:
        "Cyberpunk futuristic city, neon lights, rain, flying vehicles, blade runner aesthetic...",
    },
    {
      id: "6",
      image: "🦋",
      title: "Butterfly Close-up",
      prompt: "Macro photography of a beautiful butterfly, detailed wings, colorful, nature...",
    },
  ];

  const selectedItem = mockGallery.find((item) => item.id === selectedId);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Your Gallery</h1>
        <p className="text-slate-400">Browse and share your saved prompts</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="cursor-pointer group"
          >
            <Card className="hover:border-blue-500 transition">
              <div className="text-6xl text-center mb-4 group-hover:scale-110 transition">
                {item.image}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm line-clamp-2 mb-4">{item.prompt}</p>
              <Button size="sm" className="w-full">
                View Details
              </Button>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedId(null)}
          title={selectedItem.title}
          footer={
            <>
              <Button onClick={() => setSelectedId(null)} variant="secondary" className="flex-1">
                Close
              </Button>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(selectedItem.prompt);
                  setSelectedId(null);
                }}
                className="flex-1"
              >
                Copy Prompt
              </Button>
            </>
          }
        >
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">{selectedItem.image}</div>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 mb-2">Generated Prompt</h3>
            <p className="text-slate-200 leading-relaxed">{selectedItem.prompt}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

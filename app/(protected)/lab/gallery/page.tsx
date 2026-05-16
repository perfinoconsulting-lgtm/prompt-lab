"use client";

import { useState } from "react";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const mockGallery = [
    {
      id: "1",
      tint: "bg-tint-sky",
      title: "Mountain Sunset",
      prompt: "A serene landscape painting of mountains at sunset, oil painting style, golden hour lighting, detailed brushstrokes…",
    },
    {
      id: "2",
      tint: "bg-tint-lavender",
      title: "Neon Abstract",
      prompt: "Abstract digital art with vibrant neon colors, geometric shapes, futuristic aesthetic, glitch art style…",
    },
    {
      id: "3",
      tint: "bg-tint-peach",
      title: "Renaissance Portrait",
      prompt: "Portrait of a woman with long flowing hair, Renaissance style, soft lighting, detailed face, classical painting…",
    },
    {
      id: "4",
      tint: "bg-tint-mint",
      title: "Cosmic Nebula",
      prompt: "A vibrant nebula in deep space, colorful cosmic dust, stars, galaxy background…",
    },
    {
      id: "5",
      tint: "bg-tint-yellow",
      title: "Cyberpunk City",
      prompt: "Cyberpunk futuristic city, neon lights, rain, flying vehicles, blade runner aesthetic…",
    },
    {
      id: "6",
      tint: "bg-tint-rose",
      title: "Butterfly Close-up",
      prompt: "Macro photography of a beautiful butterfly, detailed wings, colorful, nature…",
    },
  ];

  const selectedItem = mockGallery.find((item) => item.id === selectedId);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-1">Your Gallery</h1>
        <p className="text-steel text-base">Browse and share your saved prompts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="bg-canvas border border-hairline rounded-[12px] p-5 cursor-pointer hover:border-primary/40 hover:shadow-[rgba(15,15,15,0.06)_0px_4px_16px_0px] transition-all"
          >
            <div className={`${item.tint} rounded-[8px] h-28 flex items-center justify-center mb-4`}>
              <span className="text-2xl font-semibold text-charcoal/40">{item.title[0]}</span>
            </div>
            <h3 className="font-semibold text-ink mb-1.5">{item.title}</h3>
            <p className="text-steel text-sm line-clamp-2 mb-4 leading-relaxed">{item.prompt}</p>
            <Button size="sm" variant="secondary" className="w-full">
              View Details
            </Button>
          </div>
        ))}
      </div>

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
          <div className={`${selectedItem.tint} rounded-[8px] h-32 flex items-center justify-center mb-5`}>
            <span className="text-3xl font-semibold text-charcoal/40">{selectedItem.title[0]}</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-steel uppercase tracking-wide mb-2">Generated Prompt</p>
            <p className="text-charcoal text-sm leading-relaxed">{selectedItem.prompt}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

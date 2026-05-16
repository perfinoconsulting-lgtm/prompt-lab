"use client";

import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="border border-slate-700 rounded-lg">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition text-left font-medium text-white"
          >
            {item.title}
            <span className={`transition-transform ${openId === item.id ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          {openId === item.id && (
            <div className="px-6 py-4 border-t border-slate-700 text-slate-300 bg-slate-800/50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

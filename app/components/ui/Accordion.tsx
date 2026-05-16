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
    <div className={`divide-y divide-hairline border border-hairline rounded-[8px] overflow-hidden ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="bg-canvas">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-5 flex items-center justify-between text-left"
          >
            <span className="text-[18px] font-semibold text-ink leading-snug pr-4">{item.title}</span>
            <span
              className={`shrink-0 text-steel transition-transform duration-200 ${
                openId === item.id ? "rotate-180" : ""
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          {openId === item.id && (
            <div className="px-6 pb-5 text-base text-charcoal leading-relaxed border-t border-hairline-soft pt-4">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

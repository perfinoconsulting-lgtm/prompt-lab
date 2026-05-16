"use client";

import { useState } from "react";

interface TabsItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabsItem[];
  defaultTab?: string;
}

export default function Tabs({ items, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  return (
    <div>
      <div className="flex border-b border-hairline px-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === item.id
                ? "border-ink text-ink"
                : "border-transparent text-steel hover:text-charcoal"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-6">
        {items.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
}

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
      <div className="flex gap-2 border-b border-slate-700">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-3 font-medium text-sm transition border-b-2 ${
              activeTab === item.id
                ? "border-blue-500 text-blue-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {items.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
}

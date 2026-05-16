"use client";

import { useState } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { href: "/lab", label: "Generator", icon: "✦" },
    { href: "/lab/history", label: "History", icon: "◷" },
    { href: "/lab/gallery", label: "Gallery", icon: "⊞" },
    { href: "/dashboard", label: "Dashboard", icon: "▦" },
    { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
  ];

  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-56" : "w-16"
        } bg-canvas border-r border-hairline transition-all duration-300 hidden md:flex flex-col shrink-0`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="m-3 p-2 rounded-[6px] text-steel hover:bg-surface hover:text-ink transition-colors self-end"
          aria-label="Toggle sidebar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4h10M2 7h10M2 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <nav className="px-3 pb-4 space-y-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[6px] text-steel hover:bg-surface hover:text-ink transition-colors"
            >
              <span className="text-base w-4 text-center shrink-0">{item.icon}</span>
              {sidebarOpen && (
                <span className="text-sm font-medium truncate">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 bg-surface-soft">
        <div className="max-w-5xl mx-auto px-6 py-8">{children}</div>
      </div>
    </div>
  );
}

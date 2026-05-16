"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { href: "/lab", label: "Generator", icon: "✨" },
    { href: "/lab/history", label: "History", icon: "📜" },
    { href: "/lab/gallery", label: "Gallery", icon: "🎨" },
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } bg-slate-800 border-r border-slate-700 transition-all duration-300 hidden md:block`}
        >
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition"
              >
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

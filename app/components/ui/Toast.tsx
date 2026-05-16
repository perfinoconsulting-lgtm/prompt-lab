"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = "info", isVisible, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const styles = {
    success: "bg-tint-mint border-brand-green/30 text-brand-green",
    error: "bg-tint-rose border-semantic-error/30 text-semantic-error",
    info: "bg-tint-sky border-link-blue/30 text-link-blue",
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={`${styles[type]} border px-5 py-3.5 rounded-[8px] shadow-[rgba(15,15,15,0.08)_0px_4px_12px_0px] text-sm font-medium max-w-sm`}
        role="alert"
      >
        {message}
      </div>
    </div>
  );
}

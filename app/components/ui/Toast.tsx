"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type = "info",
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const bgStyles = {
    success: "bg-green-900 border-green-700",
    error: "bg-red-900 border-red-700",
    info: "bg-blue-900 border-blue-700",
  };

  const textStyles = {
    success: "text-green-100",
    error: "text-red-100",
    info: "text-blue-100",
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`${bgStyles[type]} ${textStyles[type]} border px-6 py-4 rounded-lg shadow-lg`}
        role="alert"
      >
        {message}
      </div>
    </div>
  );
}

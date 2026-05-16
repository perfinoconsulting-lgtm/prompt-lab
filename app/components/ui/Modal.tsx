"use client";

import { useEffect } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative bg-slate-800 border border-slate-700 rounded-lg shadow-lg max-w-md w-full mx-4">
        {title && (
          <div className="border-b border-slate-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
        )}
        <div className="px-6 py-4">{children}</div>
        {footer && <div className="border-t border-slate-700 px-6 py-4 flex gap-3">{footer}</div>}
        {!footer && (
          <div className="border-t border-slate-700 px-6 py-4">
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

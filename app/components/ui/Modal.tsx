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
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div
        className="relative bg-canvas border border-hairline rounded-[12px] shadow-[rgba(15,15,15,0.16)_0px_16px_48px_-8px] max-w-md w-full mx-4"
        style={{ boxShadow: "rgba(15,15,15,0.16) 0px 16px 48px -8px" }}
      >
        {title && (
          <div className="border-b border-hairline px-6 py-4">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
          </div>
        )}
        <div className="px-6 py-5">{children}</div>
        {footer ? (
          <div className="border-t border-hairline px-6 py-4 flex gap-3">{footer}</div>
        ) : (
          <div className="border-t border-hairline px-6 py-4">
            <Button onClick={onClose} className="w-full">Close</Button>
          </div>
        )}
      </div>
    </div>
  );
}

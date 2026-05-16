"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Toast from "@/app/components/ui/Toast";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setToast({ show: true, message: "Passwords don't match" });
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setToast({ show: true, message: "Account created! Redirecting..." });
    } catch (error) {
      setToast({ show: true, message: "Error creating account" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-ink mb-1">Create account</h1>
        <p className="text-sm text-steel">Join Prompt Lab and start creating</p>
      </div>

      {/* Social buttons */}
      <div className="space-y-3 mb-6">
        <button className="w-full flex items-center justify-center gap-2.5 px-[18px] py-[10px] border border-hairline-strong rounded-[8px] text-sm font-medium text-charcoal hover:bg-surface transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15.68 8.18c0-.57-.05-1.11-.14-1.64H8v3.1h4.31a3.68 3.68 0 01-1.6 2.42v2h2.59c1.52-1.4 2.39-3.46 2.39-5.88z" fill="#4285F4"/>
            <path d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2c-.71.48-1.63.76-2.71.76-2.08 0-3.84-1.4-4.47-3.29H.86v2.07A8 8 0 008 16z" fill="#34A853"/>
            <path d="M3.53 9.53A4.8 4.8 0 013.28 8c0-.53.09-1.04.25-1.53V4.4H.86A8 8 0 000 8c0 1.29.31 2.51.86 3.6l2.67-2.07z" fill="#FBBC05"/>
            <path d="M8 3.18c1.17 0 2.23.4 3.06 1.2l2.29-2.3A8 8 0 00.86 4.4l2.67 2.07C4.16 4.58 5.92 3.18 8 3.18z" fill="#EA4335"/>
          </svg>
          Sign up with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2.5 px-[18px] py-[10px] border border-hairline-strong rounded-[8px] text-sm font-medium text-charcoal hover:bg-surface transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          Sign up with GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-hairline" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-canvas text-steel">or sign up with email</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <div className="flex items-start gap-2.5">
          <input
            type="checkbox"
            id="terms"
            className="mt-0.5 w-4 h-4 rounded border-hairline-strong accent-primary"
            required
          />
          <label htmlFor="terms" className="text-sm text-charcoal leading-snug">
            I agree to the{" "}
            <Link href="/terms" className="text-link-blue hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-link-blue hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button type="submit" isLoading={isLoading} className="w-full">
          Create Account
        </Button>
      </form>

      <p className="text-center text-sm text-steel mt-6">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-link-blue font-medium hover:underline">
          Sign in
        </Link>
      </p>

      <Toast
        isVisible={toast.show}
        message={toast.message}
        type="success"
        onClose={() => setToast({ show: false, message: "" })}
      />
    </div>
  );
}

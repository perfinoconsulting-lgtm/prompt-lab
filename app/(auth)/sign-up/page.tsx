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
        <h1 className="text-3xl font-bold text-white mb-2">Create account</h1>
        <p className="text-slate-400">Join Prompt Lab and start creating</p>
      </div>

      <div className="space-y-4 mb-6">
        <Button className="w-full bg-slate-700 hover:bg-slate-600">
          <span className="mr-2">🔵</span> Sign up with Google
        </Button>
        <Button className="w-full bg-slate-700 hover:bg-slate-600">
          <span className="mr-2">⚫</span> Sign up with GitHub
        </Button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-800 text-slate-400">or sign up with email</span>
        </div>
      </div>

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

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 w-4 h-4 rounded border-slate-600 text-blue-600"
            required
          />
          <label htmlFor="terms" className="text-sm text-slate-300">
            I agree to the{" "}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button type="submit" isLoading={isLoading} className="w-full">
          Create Account
        </Button>
      </form>

      <p className="text-center text-slate-400 mt-6">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-blue-400 hover:text-blue-300 font-medium">
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

"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Toast from "@/app/components/ui/Toast";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setToast({ show: true, message: "Sign in successful! Redirecting..." });
    } catch (error) {
      setToast({ show: true, message: "Invalid credentials" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-slate-400">Sign in to your Prompt Lab account</p>
      </div>

      <div className="space-y-4 mb-6">
        <Button className="w-full bg-slate-700 hover:bg-slate-600">
          <span className="mr-2">🔵</span> Continue with Google
        </Button>
        <Button className="w-full bg-slate-700 hover:bg-slate-600">
          <span className="mr-2">⚫</span> Continue with GitHub
        </Button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-800 text-slate-400">or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-slate-300">Password</label>
            <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button type="submit" isLoading={isLoading} className="w-full">
          Sign in
        </Button>
      </form>

      <p className="text-center text-slate-400 mt-6">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-400 hover:text-blue-300 font-medium">
          Sign up free
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

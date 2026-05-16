"use client";

import { useState } from "react";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Button from "@/app/components/ui/Button";
import Toast from "@/app/components/ui/Toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulated form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setToast({ show: true, message: "Message sent successfully! We'll be in touch soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setToast({ show: true, message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-300">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <a href="mailto:support@promptlab.com" className="text-blue-400 hover:text-blue-300">
              support@promptlab.com
            </a>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-slate-400 text-sm">Available 9AM-6PM EST</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🐦</div>
            <h3 className="font-semibold text-white mb-2">Social</h3>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              @promptlab
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 border border-slate-700 rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mb-6"
          />

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="mb-6"
          />

          <Button type="submit" isLoading={isSubmitting} className="w-full">
            Send Message
          </Button>
        </form>
      </div>

      <Toast
        isVisible={toast.show}
        message={toast.message}
        type={toast.message.includes("successfully") ? "success" : "error"}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </div>
  );
}

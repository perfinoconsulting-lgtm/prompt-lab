"use client";

import { useState } from "react";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Button from "@/app/components/ui/Button";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";

export default function Settings() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Digital artist and AI enthusiast",
    timezone: "UTC",
    theme: "dark",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sectionClass = "bg-canvas border border-hairline rounded-[12px] p-6";

  const tabsItems = [
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className={sectionClass}>
          <h3 className="text-base font-semibold text-ink mb-5">Profile Information</h3>
          <div className="space-y-4">
            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email" type="email" disabled value={formData.email} />
            <Textarea label="Bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} />
            <Button className="w-full">Save Changes</Button>
          </div>
        </div>
      ),
    },
    {
      id: "preferences",
      label: "Preferences",
      content: (
        <div className={sectionClass}>
          <h3 className="text-base font-semibold text-ink mb-5">Preferences</h3>
          <div className="space-y-4">
            <Select
              label="Theme"
              name="theme"
              options={[
                { value: "light", label: "Light" },
                { value: "dark", label: "Dark" },
                { value: "auto", label: "Auto" },
              ]}
              value={formData.theme}
              onChange={handleChange}
            />
            <Select
              label="Timezone"
              name="timezone"
              options={[
                { value: "UTC", label: "UTC" },
                { value: "EST", label: "Eastern" },
                { value: "CST", label: "Central" },
                { value: "MST", label: "Mountain" },
                { value: "PST", label: "Pacific" },
              ]}
              value={formData.timezone}
              onChange={handleChange}
            />
            <Button className="w-full">Save Preferences</Button>
          </div>
        </div>
      ),
    },
    {
      id: "billing",
      label: "Billing",
      content: (
        <div className="space-y-4">
          <div className={sectionClass}>
            <h3 className="text-base font-semibold text-ink mb-4">Subscription</h3>
            <p className="text-sm text-charcoal mb-1">Pro Plan — $9.99/month</p>
            <p className="text-xs text-steel mb-5">Renews on June 15, 2026</p>
            <Button variant="danger" className="w-full">Cancel Subscription</Button>
          </div>
          <div className={sectionClass}>
            <h3 className="text-base font-semibold text-ink mb-4">Billing History</h3>
            <div className="divide-y divide-hairline text-sm">
              {[
                { date: "May 15, 2026", amount: "$9.99" },
                { date: "April 15, 2026", amount: "$9.99" },
                { date: "March 15, 2026", amount: "$9.99" },
              ].map((row) => (
                <div key={row.date} className="flex justify-between py-3">
                  <span className="text-charcoal">{row.date}</span>
                  <span className="text-charcoal font-medium">{row.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "api",
      label: "API Keys",
      content: (
        <div className="space-y-4">
          <div className={sectionClass}>
            <h3 className="text-base font-semibold text-ink mb-4">API Keys</h3>
            <div className="bg-surface border border-hairline rounded-[8px] px-4 py-3 mb-4">
              <p className="text-xs text-steel mb-1">Key</p>
              <p className="text-sm text-charcoal font-mono break-all">pk_live_••••••••••••••••</p>
            </div>
            <Button size="sm" variant="secondary">Revoke Key</Button>
          </div>
          <div className={sectionClass}>
            <Button className="w-full">Generate New API Key</Button>
          </div>
        </div>
      ),
    },
    {
      id: "account",
      label: "Account",
      content: (
        <div className="space-y-4">
          <div className={sectionClass}>
            <h3 className="text-base font-semibold text-ink mb-2">Danger Zone</h3>
            <p className="text-sm text-steel mb-5">Irreversible and destructive actions</p>
            <Button variant="danger" className="w-full">Delete Account</Button>
          </div>
          <div className={sectionClass}>
            <h3 className="text-base font-semibold text-ink mb-4">Session</h3>
            <Button variant="secondary" className="w-full">Logout All Sessions</Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-1">Settings</h1>
        <p className="text-steel text-base">Manage your account and preferences</p>
      </div>

      <div className="bg-canvas border border-hairline rounded-[12px] overflow-hidden">
        <Tabs items={tabsItems} defaultTab="profile" />
      </div>
    </div>
  );
}

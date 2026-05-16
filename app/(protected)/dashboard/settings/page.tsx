"use client";

import { useState } from "react";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import Button from "@/app/components/ui/Button";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";
import Card from "@/app/components/ui/Card";

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

  const tabsItems = [
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Profile Information</h3>
            <div className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input label="Email" type="email" disabled value={formData.email} />
              <Textarea
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
              />
              <Button className="w-full">Save Changes</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "preferences",
      label: "Preferences",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Preferences</h3>
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
        </div>
      ),
    },
    {
      id: "billing",
      label: "Billing",
      content: (
        <div className="space-y-4">
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Subscription</h3>
            <div className="mb-6">
              <p className="text-slate-300 mb-2">Pro Plan - $9.99/month</p>
              <p className="text-sm text-slate-400 mb-4">
                Renews on June 15, 2026
              </p>
            </div>
            <Button variant="danger" className="w-full">
              Cancel Subscription
            </Button>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Billing History</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between pb-3 border-b border-slate-700">
                <span>May 15, 2026</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-700">
                <span>April 15, 2026</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>March 15, 2026</span>
                <span>$9.99</span>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      id: "api",
      label: "API Keys",
      content: (
        <div className="space-y-4">
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">API Keys</h3>
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 mb-4">
              <p className="text-xs text-slate-400 mb-2">Key</p>
              <p className="text-slate-200 font-mono text-sm break-all">
                pk_live_••••••••••••••••
              </p>
            </div>
            <Button size="sm">Revoke Key</Button>
          </Card>

          <Card>
            <Button className="w-full">Generate New API Key</Button>
          </Card>
        </div>
      ),
    },
    {
      id: "account",
      label: "Account",
      content: (
        <div className="space-y-4">
          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Danger Zone</h3>
            <p className="text-slate-300 text-sm mb-4">
              Irreversible and destructive actions
            </p>
            <Button variant="danger" className="w-full">
              Delete Account
            </Button>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-white mb-4">Session</h3>
            <Button variant="secondary" className="w-full">
              Logout All Sessions
            </Button>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        <Tabs items={tabsItems} defaultTab="profile" />
      </div>
    </div>
  );
}

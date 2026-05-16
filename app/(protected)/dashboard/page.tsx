import Link from "next/link";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's your account overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">This Month</p>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-3xl font-bold text-white">24</p>
          <p className="text-slate-400 text-sm">Generations</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">Total Generated</p>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-white">156</p>
          <p className="text-slate-400 text-sm">All time</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">Current Plan</p>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-3xl font-bold text-white">Pro</p>
          <Badge variant="success" className="mt-2">
            Active
          </Badge>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="flex items-center gap-4">
                <span className="text-3xl">🎨</span>
                <div className="flex-1">
                  <p className="text-white font-medium">Generation #{156 - i}</p>
                  <p className="text-sm text-slate-400">2 days ago</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscription Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Subscription</h2>
          <Card className="mb-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
              <p className="text-slate-400 mb-4">$9.99 per month</p>
              <div className="space-y-2 text-sm text-slate-300">
                <p>✓ Unlimited generations</p>
                <p>✓ Priority support</p>
                <p>✓ Custom presets</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Renews on <strong>June 15, 2026</strong>
            </p>
            <Link
              href="/dashboard/settings"
              className="inline-block px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
            >
              Manage Subscription
            </Link>
          </Card>

          {/* Quick Actions */}
          <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/lab"
              className="block px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition"
            >
              New Generation
            </Link>
            <Link
              href="/lab/gallery"
              className="block px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-center font-medium transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

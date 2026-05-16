import Link from "next/link";
import Badge from "@/app/components/ui/Badge";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-ink tracking-tight mb-1">Dashboard</h1>
        <p className="text-steel text-base">Welcome back! Here&apos;s your account overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-tint-sky rounded-[12px] p-6">
          <p className="text-sm text-steel mb-2">This Month</p>
          <p className="text-4xl font-semibold text-ink mb-1">24</p>
          <p className="text-sm text-charcoal">Generations</p>
        </div>
        <div className="bg-tint-lavender rounded-[12px] p-6">
          <p className="text-sm text-steel mb-2">Total Generated</p>
          <p className="text-4xl font-semibold text-ink mb-1">156</p>
          <p className="text-sm text-charcoal">All time</p>
        </div>
        <div className="bg-tint-mint rounded-[12px] p-6">
          <p className="text-sm text-steel mb-2">Current Plan</p>
          <p className="text-4xl font-semibold text-ink mb-1">Pro</p>
          <Badge variant="success">Active</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold text-ink mb-4">Recent Activity</h2>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-canvas border border-hairline rounded-[12px] p-4 flex items-center gap-4">
                <div className="w-9 h-9 rounded-[8px] bg-tint-lavender shrink-0 flex items-center justify-center">
                  <span className="text-xs font-semibold text-brand-purple">✦</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-charcoal">Generation #{156 - i}</p>
                  <p className="text-xs text-steel">2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-ink mb-4">Subscription</h2>
            <div className="bg-canvas border border-hairline rounded-[12px] p-6">
              <h3 className="text-lg font-semibold text-ink mb-1">Pro Plan</h3>
              <p className="text-sm text-steel mb-4">$9.99 per month</p>
              <ul className="space-y-2 text-sm text-charcoal mb-5">
                {["Unlimited generations", "Priority support", "Custom presets"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-brand-green shrink-0">
                      <path d="M2 6.5l2.5 2.5 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-steel mb-4">Renews on <span className="font-medium text-charcoal">June 15, 2026</span></p>
              <Link
                href="/dashboard/settings"
                className="inline-block px-[18px] py-[10px] text-sm font-medium border border-hairline-strong text-charcoal rounded-[8px] hover:bg-surface transition-colors"
              >
                Manage Subscription
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold text-ink mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link
                href="/lab"
                className="block px-[18px] py-[10px] bg-primary hover:bg-primary-pressed text-white rounded-[8px] text-center text-sm font-medium transition-colors"
              >
                New Generation
              </Link>
              <Link
                href="/lab/gallery"
                className="block px-[18px] py-[10px] border border-hairline-strong text-charcoal rounded-[8px] text-center text-sm font-medium hover:bg-surface transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

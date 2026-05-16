import Link from "next/link";
import Badge from "@/app/components/ui/Badge";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Prompt Lab",
      features: [
        "5 generations per month",
        "Basic prompt quality",
        "Save up to 10 prompts",
        "Download as text",
      ],
      cta: "Get Started",
      href: "/sign-up",
      featured: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      description: "For serious creators",
      features: [
        "Unlimited generations",
        "Advanced prompt optimization",
        "Save unlimited prompts",
        "Export as JSON/CSV",
        "Priority support",
        "Custom style presets",
      ],
      cta: "Start Free Trial",
      href: "/sign-up?plan=pro",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "Usage analytics",
      ],
      cta: "Contact Sales",
      href: "/contact",
      featured: false,
    },
  ];

  return (
    <div className="bg-canvas">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-steel max-w-xl mx-auto leading-relaxed">
          Choose the perfect plan for your creative needs. Always flexible, no lock-in contracts.
        </p>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[12px] p-8 ${
                plan.featured
                  ? "bg-surface border-2 border-primary"
                  : "bg-canvas border border-hairline"
              }`}
            >
              {plan.featured && (
                <Badge className="mb-4">Most Popular</Badge>
              )}
              <h3 className="text-2xl font-semibold text-ink mb-1">{plan.name}</h3>
              <p className="text-steel text-sm mb-5">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-semibold text-ink">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-steel text-sm ml-1">/month</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-charcoal">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-brand-green shrink-0">
                      <path d="M2.5 7l2.5 2.5 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center px-[18px] py-[10px] rounded-[8px] text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-primary hover:bg-primary-pressed text-white"
                    : "bg-transparent border border-hairline-strong text-charcoal hover:bg-surface"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <p className="text-steel text-sm mb-2">Have questions about pricing?</p>
        <Link href="/contact" className="text-link-blue text-sm font-medium hover:underline">
          Contact our sales team →
        </Link>
      </div>
    </div>
  );
}

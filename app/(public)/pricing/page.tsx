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
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your creative needs. Always flexible, no lock-in contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-8 transition ${
                plan.featured
                  ? "bg-slate-700 border-blue-500 transform md:scale-105"
                  : "bg-slate-800 border-slate-700 hover:border-slate-600"
              }`}
            >
              {plan.featured && (
                <Badge variant="primary" className="mb-4">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-400">/month</span>}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-slate-300">
                    <span className="text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-4">Have questions about pricing?</p>
          <Link
            href="/contact"
            className="text-blue-400 hover:text-blue-300 transition font-medium"
          >
            Contact our sales team →
          </Link>
        </div>
      </div>
    </div>
  );
}

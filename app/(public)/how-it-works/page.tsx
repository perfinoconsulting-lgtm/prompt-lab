import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Upload Your Image",
      desc: "Select any image (JPG, PNG, WebP) up to 5 MB from your device or drag and drop it directly.",
      tint: "bg-tint-sky",
      textColor: "text-link-blue",
    },
    {
      num: 2,
      title: "AI Analyzes",
      desc: "Our advanced AI model (Cloudflare LLaVA) analyzes the image instantly on the edge — no waiting.",
      tint: "bg-tint-lavender",
      textColor: "text-brand-purple",
    },
    {
      num: 3,
      title: "Get Your Prompt",
      desc: "Receive a detailed prompt optimized for Midjourney, Stable Diffusion, or DALL‑E in under 2 seconds.",
      tint: "bg-tint-peach",
      textColor: "text-brand-orange",
    },
    {
      num: 4,
      title: "Create & Share",
      desc: "Use the prompt to generate art, save your favorites to the gallery, and share with your community.",
      tint: "bg-tint-mint",
      textColor: "text-brand-green",
    },
  ];

  return (
    <div className="bg-canvas">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
          How Prompt Lab Works
        </h1>
        <p className="text-xl text-steel max-w-xl mx-auto leading-relaxed">
          Transform your images into professional AI art prompts in four simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.num} className={`${step.tint} rounded-[12px] p-8`}>
              <div className={`w-9 h-9 rounded-[8px] bg-white/60 flex items-center justify-center mb-5`}>
                <span className={`text-sm font-bold ${step.textColor}`}>{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-charcoal text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-tint-yellow-bold rounded-[12px] p-8">
          <h2 className="text-2xl font-semibold text-ink mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Lightning-fast analysis (under 2 seconds)",
              "Works with any art style or medium",
              "Professional-grade prompt quality",
              "Unlimited generations (depending on plan)",
              "Save and organize your prompts",
              "Copy with one click",
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-charcoal text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brand-green shrink-0">
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <Link
          href="/lab"
          className="inline-block px-[18px] py-[10px] bg-primary hover:bg-primary-pressed text-white text-sm font-medium rounded-[8px] transition-colors"
        >
          Try It Now
        </Link>
      </div>
    </div>
  );
}

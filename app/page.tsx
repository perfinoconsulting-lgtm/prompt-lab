import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-canvas">
      {/* Hero — navy band */}
      <section className="bg-brand-navy px-4 py-24 sm:py-32 text-center relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-brand-yellow opacity-70" />
        <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-brand-pink opacity-60" />
        <div className="absolute top-12 right-16 w-3 h-3 rounded-full bg-brand-teal opacity-70" />
        <div className="absolute top-28 right-1/4 w-2 h-2 rounded-full bg-brand-purple-300 opacity-60" />
        <div className="absolute bottom-16 left-1/3 w-2 h-2 rounded-full bg-brand-teal opacity-50" />
        <div className="absolute bottom-10 right-1/3 w-3 h-3 rounded-full bg-brand-orange opacity-60" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-block mb-6 px-[10px] py-1 bg-brand-navy-mid text-brand-purple-300 text-xs font-semibold rounded-full border border-brand-navy-mid tracking-wide uppercase">
            Powered by Cloudflare AI
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-semibold text-on-dark leading-[1.05] tracking-tight mb-6">
            Turn Images into<br className="hidden sm:block" /> AI Art Prompts
          </h1>
          <p className="text-lg sm:text-xl text-on-dark-muted mb-10 max-w-xl mx-auto leading-relaxed">
            Upload any image and get a detailed, creative prompt perfect for Midjourney, Stable Diffusion, or DALL‑E in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="px-[18px] py-[10px] bg-primary hover:bg-primary-pressed text-white text-sm font-medium rounded-[8px] transition-colors"
            >
              Get Started free
            </Link>
            <Link
              href="/how-it-works"
              className="px-[18px] py-[10px] bg-transparent border border-on-dark-muted text-on-dark text-sm font-medium rounded-[8px] hover:bg-brand-navy-mid transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Workspace mockup card */}
        <div className="max-w-3xl mx-auto mt-16 bg-canvas border border-hairline rounded-[12px] p-6 text-left shadow-[rgba(15,15,15,0.20)_0px_24px_48px_-8px]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-semantic-error/70" />
            <div className="w-3 h-3 rounded-full bg-brand-yellow/70" />
            <div className="w-3 h-3 rounded-full bg-brand-green/70" />
            <span className="ml-3 text-sm text-steel font-medium">Prompt Lab — Generator</span>
          </div>
          <div className="border-2 border-dashed border-hairline rounded-[8px] py-8 flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-[8px] bg-tint-lavender flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-sm text-charcoal font-medium">Drop an image to generate your prompt</p>
            <p className="text-xs text-stone-notion">JPG, PNG, WebP — max 5 MB</p>
          </div>
          <div className="mt-4 p-4 bg-tint-mint rounded-[8px]">
            <p className="text-xs font-semibold text-brand-green mb-1">Generated prompt</p>
            <p className="text-sm text-charcoal leading-relaxed">A serene mountain landscape at golden hour, oil painting style, dramatic lighting, rich textures, masterpiece quality, 4k resolution…</p>
          </div>
        </div>
      </section>

      {/* Features — pastel cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4">
            Everything you need to create stunning prompts
          </h2>
          <p className="text-lg text-steel max-w-xl mx-auto">
            Professional-grade AI analysis built for creators of every skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-tint-sky rounded-[12px] p-8">
            <div className="w-10 h-10 rounded-[8px] bg-link-blue/15 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-link-blue">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-2">Lightning Fast</h3>
            <p className="text-charcoal text-base leading-relaxed">
              Get detailed AI prompts in under 2 seconds. Instant analysis powered by Cloudflare's edge network.
            </p>
          </div>

          <div className="bg-tint-lavender rounded-[12px] p-8">
            <div className="w-10 h-10 rounded-[8px] bg-brand-purple/15 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-purple">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-2">Professional Quality</h3>
            <p className="text-charcoal text-base leading-relaxed">
              Prompts crafted for maximum creative detail — optimized for Midjourney, Stable Diffusion, and DALL‑E.
            </p>
          </div>

          <div className="bg-tint-mint rounded-[12px] p-8">
            <div className="w-10 h-10 rounded-[8px] bg-brand-green/15 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-green">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="17 21 17 13 7 13 7 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 3 7 8 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-2">Save &amp; Organize</h3>
            <p className="text-charcoal text-base leading-relaxed">
              Build your personal library of prompts, track generation history, and organize by style.
            </p>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-surface rounded-[16px] px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4">
            Ready to start creating?
          </h2>
          <p className="text-lg text-steel mb-8 max-w-md mx-auto">
            Join thousands of creators using Prompt Lab to unlock their AI art potential.
          </p>
          <Link
            href="/sign-up"
            className="inline-block px-[18px] py-[10px] bg-primary hover:bg-primary-pressed text-white text-sm font-medium rounded-[8px] transition-colors"
          >
            Start free today
          </Link>
        </div>
      </section>
    </div>
  );
}

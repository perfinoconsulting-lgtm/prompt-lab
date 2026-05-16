export default function About() {
  return (
    <div className="bg-canvas">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
          About Prompt Lab
        </h1>
        <p className="text-xl text-steel leading-relaxed">
          Democratizing AI art creation, one prompt at a time.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-ink mb-3">Our Mission</h2>
          <p className="text-base text-charcoal leading-relaxed">
            Prompt Lab exists to democratize AI art creation. We believe that everyone should be able
            to generate stunning AI art, regardless of their prompt writing skills. By analyzing real
            images, we help creators unlock the creative potential of AI art generators.
          </p>
        </section>

        <div className="border-t border-hairline" />

        <section>
          <h2 className="text-2xl font-semibold text-ink mb-3">Our Story</h2>
          <p className="text-base text-charcoal leading-relaxed">
            Prompt Lab was founded in 2024 by a team of AI enthusiasts and digital artists who were
            frustrated with the trial-and-error process of writing effective AI art prompts. We
            realized that analyzing real images could generate much better prompts, so we built
            Prompt Lab to make this accessible to everyone.
          </p>
        </section>

        <div className="border-t border-hairline" />

        <section>
          <h2 className="text-2xl font-semibold text-ink mb-5">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tint: "bg-tint-lavender", label: "Quality First", desc: "We prioritize prompt quality and user experience above all." },
              { tint: "bg-tint-sky", label: "Privacy Focused", desc: "Your images are never stored or shared — ever." },
              { tint: "bg-tint-mint", label: "Fast & Efficient", desc: "We use cutting-edge AI for instant, accurate results." },
              { tint: "bg-tint-yellow", label: "Fair Pricing", desc: "Flexible plans for creators at every budget level." },
            ].map((v) => (
              <div key={v.label} className={`${v.tint} rounded-[12px] p-6`}>
                <h3 className="font-semibold text-ink mb-1">{v.label}</h3>
                <p className="text-sm text-charcoal leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-hairline" />

        <section>
          <h2 className="text-2xl font-semibold text-ink mb-3">Powered By</h2>
          <p className="text-base text-charcoal leading-relaxed">
            Prompt Lab uses Cloudflare&apos;s AI API with the LLaVA 1.5 model for fast, accurate image
            analysis. This gives us the ability to provide enterprise-grade performance at affordable
            prices.
          </p>
        </section>
      </div>
    </div>
  );
}

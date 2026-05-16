export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">About Prompt Lab</h1>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p>
              Prompt Lab exists to democratize AI art creation. We believe that everyone should be
              able to generate stunning AI art, regardless of their prompt writing skills. By
              analyzing real images, we help creators unlock the creative potential of AI art
              generators.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p>
              Prompt Lab was founded in 2024 by a team of AI enthusiasts and digital artists who
              were frustrated with the trial-and-error process of writing effective AI art prompts.
              We realized that analyzing real images could generate much better prompts, so we built
              Prompt Lab to make this accessible to everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <ul className="space-y-2">
              <li>🎯 <strong>Quality First</strong> - We prioritize prompt quality and user experience</li>
              <li>🔒 <strong>Privacy Focused</strong> - Your images are never stored or shared</li>
              <li>⚡ <strong>Fast & Efficient</strong> - We use cutting-edge AI for instant results</li>
              <li>💰 <strong>Fair Pricing</strong> - Flexible plans for creators of all budgets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Powered By</h2>
            <p>
              Prompt Lab uses Cloudflare's AI API with the LLaVA 1.5 model for fast, accurate
              image analysis. This gives us the ability to provide enterprise-grade performance at
              affordable prices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

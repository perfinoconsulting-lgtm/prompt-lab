import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turn Images into AI Art Prompts
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Upload any image and get a detailed, creative prompt perfect for Midjourney, Stable Diffusion, or DALL-E. Powered by advanced AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Get Started Free
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-slate-400">
              Get detailed AI prompts in seconds, not minutes. Instant analysis powered by Cloudflare.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2">Professional Quality</h3>
            <p className="text-slate-400">
              Prompts written by experts, analyzed by advanced AI for maximum creative detail.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <div className="text-4xl mb-4">💾</div>
            <h3 className="text-xl font-bold text-white mb-2">Save & Organize</h3>
            <p className="text-slate-400">
              Build your library of prompts, track history, and organize by style and preference.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8">
            Join thousands of creators using Prompt Lab to enhance their AI art generation.
          </p>
          <Link
            href="/sign-up"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition"
          >
            Start Free Today
          </Link>
        </div>
      </section>
    </div>
  );
}

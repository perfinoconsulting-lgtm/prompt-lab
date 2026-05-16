import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Upload Your Image",
      desc: "Select any image (JPG, PNG, WebP) up to 5MB from your device.",
    },
    {
      num: 2,
      title: "AI Analyzes",
      desc: "Our advanced AI model (Cloudflare LLaVA) analyzes the image instantly.",
    },
    {
      num: 3,
      title: "Get Your Prompt",
      desc: "Receive a detailed prompt optimized for Midjourney, Stable Diffusion, or DALL-E.",
    },
    {
      num: 4,
      title: "Create & Share",
      desc: "Use the prompt to generate art, save your favorites, and share with others.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How Prompt Lab Works
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transform your images into professional AI art prompts in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
            <li>✓ Lightning-fast analysis (under 2 seconds)</li>
            <li>✓ Works with any art style or medium</li>
            <li>✓ Professional-grade prompt quality</li>
            <li>✓ Unlimited generations (depending on plan)</li>
            <li>✓ Save and organize your prompts</li>
            <li>✓ Copy with one click</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/lab"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Try It Now
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary rounded-[6px] flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold leading-none">P</span>
              </div>
              <span className="font-semibold text-ink">Prompt Lab</span>
            </div>
            <p className="text-sm text-steel leading-relaxed">
              Transform images into AI art prompts instantly.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/lab" className="text-sm text-steel hover:text-ink transition-colors">
                  Generator
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-steel hover:text-ink transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-steel hover:text-ink transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-steel hover:text-ink transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-steel hover:text-ink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-steel hover:text-ink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-steel hover:text-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-steel hover:text-ink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-hairline pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-steel">&copy; 2026 Prompt Lab. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-sm text-steel hover:text-ink transition-colors">Twitter</a>
            <a href="#" className="text-sm text-steel hover:text-ink transition-colors">GitHub</a>
            <a href="#" className="text-sm text-steel hover:text-ink transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

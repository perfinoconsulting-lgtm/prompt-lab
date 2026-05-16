export default function Privacy() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300 leading-relaxed">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              subscribe to a plan, or contact us for support. This includes your name, email address,
              and usage data. Images uploaded are processed but never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve Prompt Lab, process
              transactions, send transactional and promotional emails, and analyze usage patterns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We use Cloudflare for AI processing and other service providers for payment processing.
              These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. Contact us
              at privacy@promptlab.com to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. We'll notify you of significant changes via email
              or by posting the updated policy on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have privacy concerns, please contact us at{" "}
              <a href="mailto:privacy@promptlab.com" className="text-blue-400 hover:text-blue-300">
                privacy@promptlab.com
              </a>
            </p>
          </section>
        </div>

        <p className="text-sm text-slate-400 mt-12">Last updated: May 15, 2026</p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SMK Web Design. Learn how we collect, use, and protect your personal data in line with South Africa's POPIA.",
};

export default function PrivacyPage() {
  return (
    <main className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 max-w-3xl mx-auto">
      <div className="section-light" aria-hidden="true" />

      <h1 className="heading-lg mb-4" style={{ color: "var(--color-text-primary)" }}>
        Privacy Policy
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--color-text-dim)" }}>
        Last updated: July 2026
      </p>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>1. Who We Are</h2>
          <p>SMK Web Design (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a web design and development service operated by Stopher Malik. We are based in Johannesburg, South Africa.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>2. What Personal Data We Collect</h2>
          <p>When you fill out the contact form on our website, we collect:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Name</strong> — to address you personally in our communication.</li>
            <li><strong>Email address</strong> — to respond to your enquiry.</li>
            <li><strong>Phone number</strong> — to contact you if email communication is not suitable (optional).</li>
            <li><strong>Message</strong> — the details of your project or enquiry so we can understand your needs.</li>
          </ul>
          <p className="mt-2">We do not collect any sensitive personal data through our website.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>3. Why We Collect Your Data</h2>
          <p>By submitting the contact form, you consent to us processing your personal data for the purpose of responding to your enquiry. We may also process your data to follow up on a business enquiry or to provide information about our services that you have requested.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>4. How Long We Keep Your Data</h2>
          <p>We retain your personal data for 12 months after your last communication. After this period, your data is securely deleted or anonymised. If you become a client, we retain your data for the duration of our relationship plus 5 years for legal purposes.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>5. Who We Share Your Data With</h2>
          <p>We use Web3Forms to process contact form submissions. Your data is transmitted to Web3Forms and forwarded to us via email. We do not sell, trade, or rent your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>6. Your Rights Under POPIA</h2>
          <p>Under South Africa&rsquo;s POPIA, you have the right to access, correct, or delete your personal data. You may also object to processing for direct marketing. To exercise these rights, email <a href="mailto:info@stopher-malik.co.za" className="text-[var(--color-accent)] hover:underline">info@stopher-malik.co.za</a>. We will respond within 30 days.</p>
          <p className="mt-2">You also have the right to lodge a complaint with the Information Regulator of South Africa.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3" style={{ color: "var(--color-text-primary)" }}>7. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.</p>
        </section>
      </div>
    </main>
  );
}

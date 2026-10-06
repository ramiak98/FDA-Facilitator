import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalPage } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalPage
        title="Privacy Policy"
        updated="October 6, 2026"
        intro={`This policy explains what personal information ${site.name} collects through this website, how we use it, and the choices you have.`}
      >
        <section>
          <h2>Who we are</h2>
          <p>
            {site.name} (&quot;we&quot;, &quot;us&quot;) provides FDA compliance, customs, trademark
            and logistics services to companies bringing products into the United States. Questions
            about this policy can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Information you give us.</strong> When you use our contact form or email us, we
              receive your name, company, email address, phone number, country, the products and
              services you ask about, and anything else you include in your message.
            </li>
            <li>
              <strong>Usage information.</strong> Our hosting provider records basic technical data
              (such as IP address, browser type and pages requested) to operate and secure the site. We
              use privacy-friendly analytics that count page views in aggregate and do not use cookies
              to track you across websites.
            </li>
          </ul>
          <p>We do not knowingly collect sensitive personal information through this website.</p>
        </section>

        <section>
          <h2>How we use information</h2>
          <ul>
            <li>To reply to your inquiry and prepare a proposal.</li>
            <li>To provide the services you engage us for.</li>
            <li>To operate, secure and improve this website.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
          <p>We do not sell your personal information and do not share it for cross-context behavioral advertising.</p>
        </section>

        <section>
          <h2>When we share information</h2>
          <p>We share personal information only as needed to run our business and deliver services:</p>
          <ul>
            <li>
              <strong>Service providers</strong> that host this website, deliver email and store data
              for us, under obligations to protect it.
            </li>
            <li>
              <strong>Partners involved in your project</strong>, such as licensed customs brokers,
              US-licensed trademark attorneys and freight carriers, when you ask us to work with them
              for you.
            </li>
            <li>
              <strong>Government agencies</strong>, such as FDA, CBP or USPTO, when a filing you
              engaged us to make requires your information.
            </li>
            <li>
              <strong>Legal reasons</strong>, when required by law or to protect our rights, or as part
              of a merger or sale of our business.
            </li>
          </ul>
        </section>

        <section>
          <h2>How long we keep information</h2>
          <p>
            We keep inquiry information for as long as needed to respond and follow up, and client
            records for as long as needed to provide services and meet legal, tax and recordkeeping
            requirements. We then delete or anonymize it.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical and physical safeguards to protect personal
            information. No method of transmission or storage is completely secure, so please do not
            send confidential formulas or trade secrets through the contact form.
          </p>
        </section>

        <section>
          <h2>Your choices and rights</h2>
          <p>
            You can ask us to access, correct or delete the personal information we hold about you by
            emailing <a href={`mailto:${site.email}`}>{site.email}</a>. Depending on where you live,
            you may have additional rights under the law of your state or country, and we will honor
            them as required. We will not discriminate against you for exercising your rights.
          </p>
          <p>
            If you receive marketing emails from us, you can unsubscribe at any time using the link in
            the email.
          </p>
        </section>

        <section>
          <h2>Do Not Track</h2>
          <p>
            This website does not track visitors across third-party websites, so it does not respond
            differently to browser &quot;Do Not Track&quot; signals.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            This website is intended for businesses and is not directed to children under 13. We do
            not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2>International visitors</h2>
          <p>
            This website is hosted in the United States. If you contact us from another country, your
            information will be transferred to and processed in the United States.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;Last updated&quot; date above shows
            when it last changed. See also our <Link href="/terms">Terms of Use</Link>.
          </p>
        </section>
      </LegalPage>
      <Footer />
    </>
  );
}

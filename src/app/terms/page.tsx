import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LegalPage } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms that apply to your use of the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalPage
        title="Terms of Use"
        updated="October 6, 2026"
        intro={`These terms apply to your use of the ${site.name} website. By using the site, you agree to them.`}
      >
        <section>
          <h2>Information only, not legal advice</h2>
          <p>
            Content on this website is general information about US regulatory requirements. It is
            not legal advice, may not reflect the latest changes in law, and may not apply to your
            situation. Using this website or contacting us does not create an attorney-client
            relationship. Trademark legal services are provided only by US-licensed attorneys.
          </p>
        </section>

        <section>
          <h2>No government affiliation</h2>
          <p>
            {site.name} is a private company. It is not affiliated with, endorsed by, or acting on
            behalf of the U.S. Food and Drug Administration (FDA), U.S. Customs and Border Protection
            (CBP), the U.S. Patent and Trademark Office (USPTO) or any other government agency. FDA
            registration does not mean FDA approval.
          </p>
        </section>

        <section>
          <h2>No guaranteed outcomes</h2>
          <p>
            Decisions by FDA, CBP, USPTO and other authorities, including admissibility of shipments,
            detentions, refusals and trademark registration, are outside our control. We do not
            guarantee any regulatory, customs or trademark outcome.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <p>
            Our services are provided under a separate written agreement or proposal. If that
            agreement conflicts with these terms, the agreement controls for the services it covers.
          </p>
        </section>

        <section>
          <h2>Using this website</h2>
          <ul>
            <li>Use the site only for lawful purposes.</li>
            <li>Do not try to disrupt the site, access it without authorization or send spam through the contact form.</li>
            <li>Information you send us must be accurate and yours to share.</li>
          </ul>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            The text, design and logo on this website belong to {site.name} or its licensors. You may
            view and print pages for your own business use, but may not copy or republish them
            without permission. Photos are used under their respective licenses.
          </p>
        </section>

        <section>
          <h2>Links to other websites</h2>
          <p>
            Links to government and third-party websites are provided for convenience. We are not
            responsible for their content or availability.
          </p>
        </section>

        <section>
          <h2>Disclaimer of warranties</h2>
          <p>
            This website is provided &quot;as is&quot; and &quot;as available&quot;, without
            warranties of any kind, express or implied, including warranties of accuracy, fitness for
            a particular purpose and non-infringement, to the fullest extent permitted by law.
          </p>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.name} will not be liable for any indirect,
            incidental, special or consequential damages, or any loss of profits or data, arising
            from your use of, or reliance on, this website.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. The &quot;Last updated&quot; date above
            shows when they last changed. Please also read our{" "}
            <Link href="/privacy">Privacy Policy</Link>. Questions can be sent to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </section>
      </LegalPage>
      <Footer />
    </>
  );
}

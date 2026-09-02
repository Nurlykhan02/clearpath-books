import Link from "next/link";
import Reveal from "@/components/Reveal";
import Blob, { BLOB_PATHS } from "@/components/Blob";
import CTA from "@/components/CTA";

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <Blob
          variant="sage"
          path={BLOB_PATHS.sageAlt}
          style={{ top: -60, left: -80, width: 340, height: 340, opacity: 0.35 }}
        />
        <div className="wrap">
          <Reveal>
            <div className="page-hero__inner">
              <span className="eyebrow">Pricing</span>
              <h1 className="heading h-l">Let&apos;s start with a proper look.</h1>
              <p>
                Book a consultation and survey — it&apos;s free, and it&apos;s how
                every good project should begin.
              </p>
              <Link href="/contact" className="btn" style={{ marginTop: "1.5rem" }}>
                Book a Consultation{" "}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}

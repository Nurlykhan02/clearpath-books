import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section cta-band" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="cta-card">
            <div className="cta-card__grid">
              <div className="cta-card__copy">
                <span className="eyebrow">Ready when you are</span>
                <h2 className="heading h-l">Let&apos;s start with a proper look.</h2>
                <p>
                  Book a consultation and survey — it&apos;s free, and it&apos;s how
                  every good project should begin.
                </p>
              </div>
              <div className="cta-card__action">
                <Link href="/contact" className="btn btn--cream">
                  Book a Consultation{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
                <p className="cta-card__note">Free consultation · No obligation</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

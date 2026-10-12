import Link from "next/link";
import Reveal from "./Reveal";
import Blob, { BLOB_PATHS } from "./Blob";
import { COMPANY_TAGLINE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <Blob
        variant="warm"
        path={BLOB_PATHS.clay}
        style={{ top: -140, right: -120, width: 520, height: 520, opacity: 0.55 }}
      />
      <Blob
        variant="sage"
        path={BLOB_PATHS.sage}
        style={{ bottom: -180, left: -140, width: 460, height: 460, opacity: 0.4 }}
      />

      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal>
              <span className="hero__tag">
                <b aria-hidden="true">★</b> {COMPANY_TAGLINE}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="heading h-xl">
                Big-company expertise. <em>Built for small business</em>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede hero__lede">
                Sheep Bookkeeping is an expert-led bookkeeping firm built on
                big-company experience: deep accounting knowledge, proven
                processes, and financials you can trust.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero__cta">
                <Link href="/contact" className="btn">
                  Book a Free Consultation{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link href="/services" className="btn btn--ghost">
                  Explore Our Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="hero__visual" aria-hidden="true">
            <div className="hero__blobcard" />
            <div className="hero__chip hero__chip--tl">
              <h4>Accurate &amp; Organized</h4>
              <p>Clean books. Current numbers.</p>
            </div>
            <div className="hero__chip hero__chip--br">
              <span className="stars">★★★★★</span>
              <h4>99% client satisfaction</h4>
              <p>U.S. small businesses</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

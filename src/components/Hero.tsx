"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import HeroVisual from "./HeroVisual";
import Blob, { BLOB_PATHS } from "./Blob";
import { COMPANY_TAGLINE } from "@/lib/site";
import { IconTaxForm } from "@/lib/icons";

export default function Hero() {
  return (
    <section className="hero">
      <Blob
        variant="warm"
        path={BLOB_PATHS.clay}
        style={{ top: -60, right: -40, width: 180, height: 180, opacity: 0.42 }}
      />
      <Blob
        variant="sage"
        path={BLOB_PATHS.sage}
        style={{ top: 40, right: 120, width: 110, height: 110, opacity: 0.3 }}
      />
      <Blob
        variant="sage"
        path={BLOB_PATHS.sageAlt}
        style={{ bottom: -60, left: -50, width: 180, height: 180, opacity: 0.28 }}
      />

      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal>
              <span className="hero__tag">
                <b aria-hidden="true">
                  <IconTaxForm style={{ width: 14, height: 14 }} />
                </b>{" "}
                {COMPANY_TAGLINE}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="heading h-xl">
                Your books, finally <em>under control.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede hero__lede">
                Reliable bookkeeping and accounting for small businesses — clear
                numbers, fewer headaches, more time to run the company.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero__cta">
                <Link href="/contact" className="btn btn--sm">
                  Book a Free Consultation{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link href="/services" className="btn btn--ghost btn--sm">
                  Explore Our Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="hero__visual" aria-hidden="true">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

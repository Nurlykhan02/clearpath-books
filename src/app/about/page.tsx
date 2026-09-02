import Reveal from "@/components/Reveal";
import Blob, { BLOB_PATHS } from "@/components/Blob";
import CTA from "@/components/CTA";
import AboutIntro from "@/components/AboutIntro";
import TeamProfiles from "@/components/TeamProfiles";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Blob
          variant="warm"
          path={BLOB_PATHS.clayAlt}
          style={{ top: -80, right: -100, width: 360, height: 360, opacity: 0.35 }}
        />
        <div className="wrap">
          <Reveal>
            <div className="page-hero__inner">
              <span className="eyebrow">About Us</span>
              <h1 className="heading h-l">Meet the team behind ClearPath Books</h1>
              <p>
                International accounting backgrounds, now focused on U.S. small
                business bookkeeping and financial clarity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutIntro />
      <TeamProfiles />
      <CTA />
    </>
  );
}

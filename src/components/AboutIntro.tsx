import Reveal from "./Reveal";
import { ABOUT_INTRO } from "@/lib/team";

export default function AboutIntro() {
  return (
    <section className="section about-intro" aria-labelledby="about-intro-heading">
      <div className="wrap">
        <Reveal>
          <div className="about-intro__inner">
            <span className="eyebrow">{ABOUT_INTRO.eyebrow}</span>
            <h2 id="about-intro-heading" className="heading h-m">
              {ABOUT_INTRO.heading}
            </h2>
            <p className="lede about-intro__lede">{ABOUT_INTRO.lede}</p>
            <p className="about-intro__clients">{ABOUT_INTRO.clients}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import {
  IconCheckCircle,
  IconUsers,
  IconBuilding,
} from "@/lib/icons";

const features = [
  {
    no: "01",
    title: "Accurate & Organized",
    desc: "Your books are kept clean, current, and easy to understand.",
    Icon: IconCheckCircle,
  },
  {
    no: "02",
    title: "Dedicated Support",
    desc: "Real people who know your business and are here when you need them.",
    Icon: IconUsers,
  },
  {
    no: "03",
    title: "Built for Small Business",
    desc: "Practical accounting support without the cost of a full-time accounting department.",
    Icon: IconBuilding,
  },
];

export default function Features() {
  return (
    <section
      className="section features-section"
      style={{ paddingTop: 0, paddingBottom: "clamp(32px, 5vw, 64px)" }}
      aria-labelledby="features-heading"
    >
      <div className="wrap">
        <Reveal>
          <div className="features-section__head">
            <span className="eyebrow" aria-hidden="true">
              Why choose us
            </span>
            <h2 id="features-heading" className="sr-only">
              Why choose us
            </h2>
          </div>
        </Reveal>
        <div className="features-grid">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <article className="feature-card">
                <span className="feature-card__no" aria-hidden="true">
                  {feature.no}
                </span>
                <div className="feature-card__icon" aria-hidden="true">
                  <feature.Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

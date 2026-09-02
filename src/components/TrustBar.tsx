import Reveal from "./Reveal";
import {
  IconShield,
  IconChart,
  IconUsers,
  IconGlobe,
  IconBuilding,
  IconClock,
  IconStar,
  IconCheckCircle,
} from "@/lib/icons";

const stats = [
  { value: "100%", label: "Commitment to accuracy", Icon: IconShield },
  { value: "Monthly", label: "Financial reporting", Icon: IconChart },
  { value: "1:1", label: "Personalized support", Icon: IconUsers },
  { value: "U.S.", label: "Businesses we serve", Icon: IconGlobe },
  { value: "500+", label: "Businesses supported", Icon: IconBuilding },
  { value: "10+", label: "Years of experience", Icon: IconClock },
  { value: "99%", label: "Client satisfaction", Icon: IconStar },
  { value: "50 States", label: "U.S. business support", Icon: IconCheckCircle },
];

export default function TrustBar() {
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-label="Key facts">
      <div className="wrap">
        <Reveal>
          <div className="trust">
            <div className="trust__row trust__row--8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="trust__item"
                  role="group"
                  aria-label={`${stat.value}: ${stat.label}`}
                >
                  <span className="trust__icon" aria-hidden="true">
                    <stat.Icon />
                  </span>
                  <b aria-hidden="true">{stat.value}</b>
                  <span aria-hidden="true">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

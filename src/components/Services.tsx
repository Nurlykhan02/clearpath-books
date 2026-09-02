import Reveal from "./Reveal";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow">What we do</span>
            <h2 className="heading h-l">Six services, one standard.</h2>
            <p className="lede">
              Numbers you can rely on. Support you can count on.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.no} delay={i * 0.06}>
              <article className="svc">
                <span className="svc__no">{service.no}</span>
                <div className="svc__icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

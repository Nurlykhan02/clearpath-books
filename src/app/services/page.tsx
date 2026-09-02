import Reveal from "@/components/Reveal";
import Blob, { BLOB_PATHS } from "@/components/Blob";
import CTA from "@/components/CTA";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <Blob
          variant="warm"
          path={BLOB_PATHS.clay}
          style={{ top: -100, right: -80, width: 380, height: 380, opacity: 0.4 }}
        />
        <div className="wrap">
          <Reveal>
            <div className="page-hero__inner">
              <span className="eyebrow">What we do</span>
              <h1 className="heading h-l">Six services, one standard.</h1>
              <p>Numbers you can rely on. Support you can count on.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Service list">
        <div className="wrap">
          <h2 className="sr-only">Our services</h2>
          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.no} delay={i * 0.05}>
                <article className="svc">
                  <span className="svc__no" aria-hidden="true">
                    {service.no}
                  </span>
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

      <CTA />
    </>
  );
}

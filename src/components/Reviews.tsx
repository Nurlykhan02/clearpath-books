import Reveal from "./Reveal";
import Blob, { BLOB_PATHS } from "./Blob";

export default function Reviews() {
  return (
    <section className="section quote-band">
      <Blob
        variant="sage"
        path={BLOB_PATHS.sageAlt}
        style={{ bottom: -120, left: -120, width: 400, height: 400, opacity: 0.3 }}
      />
      <div className="wrap">
        <Reveal>
          <div className="quote-card">
            <div className="mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>
              Объяснили всё простым языком, без давления. Наконец-то понимаю
              свои налоги. Рекомендую всем предпринимателям.
            </blockquote>
            <cite>
              Алия К. <span>· Владелец кофейни</span>
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

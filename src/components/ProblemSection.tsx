import Reveal from "./Reveal";
import Blob, { BLOB_PATHS } from "./Blob";
import { COMPANY_NAME } from "@/lib/site";

const painPoints = [
  "Late reconciliations",
  "Messy books and missing transactions",
  "Unclear expenses",
  "Tax-season stress",
];

export default function ProblemSection() {
  return (
    <section className="section why">
      <Blob
        variant="warm"
        path={BLOB_PATHS.clayAlt}
        style={{ top: "8%", right: -80, width: 200, height: 200, opacity: 0.38 }}
      />
      <Blob
        variant="sage"
        path={BLOB_PATHS.sage}
        style={{ top: "42%", right: 40, width: 110, height: 110, opacity: 0.28 }}
      />
      <Blob
        variant="warm"
        path={BLOB_PATHS.clay}
        style={{ bottom: "6%", right: -40, width: 160, height: 160, opacity: 0.3 }}
      />
      <div className="wrap">
        <div className="why__inner">
          <Reveal>
            <div className="why__main">
              <div className="sec-head" style={{ marginBottom: "1.6rem" }}>
                <span className="eyebrow">The challenge</span>
                <h2 className="heading h-l">
                  Running a business is already enough work.
                </h2>
                <p className="heading h-m why__subtitle">
                  You shouldn&apos;t have to become an accountant to understand your business.
                </p>
              </div>

              <ul className="why__pain-list">
                {painPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="why__copy">
                <p>
                  When your books aren&apos;t up to date, it&apos;s difficult to know how
                  your business is really doing.
                </p>
                <p>That&apos;s where we come in.</p>
                <p className="why__copy--strong">
                  {COMPANY_NAME} takes care of the numbers behind your business so you
                  can spend less time worrying about bookkeeping and more time growing
                  your company.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="why__aside">
              <div className="why__art">
                <p className="why__quote">
                  &ldquo;You shouldn&apos;t have to completely change the way you work
                  just to get better bookkeeping.&rdquo;
                </p>
              </div>
              <p className="why__platform">
                We work with leading accounting and business platforms to keep your
                financial information organized and accessible.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

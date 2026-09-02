import Reveal from "./Reveal";
import Blob, { BLOB_PATHS } from "./Blob";

const steps = [
  {
    num: "1",
    title: "Бесплатная консультация",
    desc: "Обсуждаем ваш бизнес, задачи и текущую ситуацию. Без обязательств.",
  },
  {
    num: "2",
    title: "Фиксированная цена",
    desc: "Составляем план работ и фиксируем стоимость заранее. Никаких сюрпризов.",
  },
  {
    num: "3",
    title: "Работа и поддержка",
    desc: "Берём учёт на себя. Ответы на вопросы в течение 2 часов в рабочее время.",
  },
  {
    num: "4",
    title: "Годы сопровождения",
    desc: "Гарантия качества и номер, который всегда отвечает.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section why">
      <Blob
        variant="warm"
        path={BLOB_PATHS.clayAlt}
        style={{ top: "10%", right: -160, width: 420, height: 420, opacity: 0.35 }}
      />
      <div className="wrap">
        <div className="why__inner">
          <Reveal>
            <div className="why__art">
              <p className="why__quote">
                «Гарантия надёжна лишь настолько, насколько надёжна фирма за ней.»
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="sec-head" style={{ marginBottom: "1.6rem" }}>
              <span className="eyebrow">Почему мы</span>
              <h2 className="heading h-l">Никаких сюрпризов. По дизайну.</h2>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <div key={step.num} className="step">
                  <span className="step__num">{step.num}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

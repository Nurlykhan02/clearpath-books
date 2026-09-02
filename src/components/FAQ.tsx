"use client";

import { useId, useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Сколько стоят ваши услуги?",
    a: "Стоимость зависит от объёма работ и типа бизнеса. Базовое ведение ИП — от ₸25 000/мес. На консультации мы дадим точную цену без скрытых платежей.",
  },
  {
    q: "Можно ли получить разовую консультацию?",
    a: "Да, разовая консультация стоит от ₸8 000/час. Вы можете задать любые вопросы по налогам и учёту без обязательства заключать договор.",
  },
  {
    q: "Как быстро вы отвечаете?",
    a: "Мы отвечаем в течение 2 часов в рабочее время. Для срочных вопросов есть WhatsApp и телефон.",
  },
  {
    q: "Работаете ли вы с новыми ИП?",
    a: "Конечно. Помогаем с регистрацией, выбором налогового режима и настройкой учёта с первого дня.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="section" aria-labelledby={`${baseId}-heading`}>
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="eyebrow">FAQ</span>
            <h2 id={`${baseId}-heading`} className="heading h-l">
              Частые вопросы
            </h2>
          </div>
        </Reveal>

        <div style={{ maxWidth: "720px" }}>
          {faqs.map((faq, i) => {
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isOpen = open === i;

            return (
              <Reveal key={faq.q} delay={i * 0.06}>
                <div className="faq-item">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {faq.q}
                    <span aria-hidden="true" style={{ color: "var(--clay)", fontSize: "1.4rem" }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="faq-answer"
                  >
                    {faq.a}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

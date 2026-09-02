"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import Blob, { BLOB_PATHS } from "@/components/Blob";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error ?? "Something went wrong.");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <Blob
          variant="sage"
          path={BLOB_PATHS.sage}
          style={{ top: -80, left: -100, width: 360, height: 360, opacity: 0.35 }}
        />
        <div className="wrap">
          <Reveal>
            <div className="page-hero__inner">
              <span className="eyebrow">Contact</span>
              <h1 id="contact-heading" className="heading h-l">
                Let&apos;s start with a proper look.
              </h1>
              <p>
                Book a consultation and survey — it&apos;s free, and it&apos;s how
                every good project should begin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section" style={{ paddingTop: 0 }} aria-label="Consultation form">
        <div className="wrap">
          <div className="contact-grid contact-grid--single">
            <Reveal delay={0.1}>
              <div className="form-card">
                {sent ? (
                  <div
                    role="status"
                    aria-live="polite"
                    style={{ textAlign: "center", padding: "3rem 0" }}
                  >
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }} aria-hidden="true">
                      ✓
                    </div>
                    <h2
                      ref={successRef}
                      className="heading h-m"
                      tabIndex={-1}
                    >
                      Request received
                    </h2>
                    <p style={{ color: "var(--ink-soft)", marginTop: "0.75rem" }}>
                      We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} aria-busy={loading} noValidate={false}>
                    <h2 className="heading h-m" style={{ marginBottom: "1.5rem" }}>
                      Book a Free Consultation
                    </h2>
                    <div className="field">
                      <label htmlFor="name">
                        Full name <span className="req" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        aria-required="true"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">
                        Email <span className="req" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your business"
                      />
                    </div>
                    {error && (
                      <p className="form-error" role="alert" id="form-error">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="btn"
                      disabled={loading}
                      aria-describedby={error ? "form-error" : undefined}
                    >
                      {loading ? "Sending…" : "Book a Consultation"}{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

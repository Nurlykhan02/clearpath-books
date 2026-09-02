"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { COLOR_FIELDS, THEME_PRESETS } from "@/lib/theme";
import { DESIGN_OPTIONS } from "@/lib/design";
import { HEADER_OPTIONS } from "@/lib/header";

export default function ThemeCustomizer() {
  const {
    colors,
    setColor,
    applyPreset,
    resetTheme,
    activePresetId,
    design,
    setDesign,
    header,
    setHeader,
  } = useTheme();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const panelId = useId();
  const designLabelId = useId();
  const headerLabelId = useId();
  const presetLabelId = useId();
  const customLabelId = useId();

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("theme-panel-open", open);
    const page = document.getElementById("site-page");
    const mobileCta = document.querySelector(".mobile-cta");

    if (open) {
      page?.setAttribute("aria-hidden", "true");
      page?.setAttribute("inert", "");
      mobileCta?.setAttribute("aria-hidden", "true");
      mobileCta?.setAttribute("inert", "");
      window.setTimeout(() => closeRef.current?.focus(), 0);
    } else {
      page?.removeAttribute("aria-hidden");
      page?.removeAttribute("inert");
      mobileCta?.removeAttribute("aria-hidden");
      mobileCta?.removeAttribute("inert");
    }

    return () => {
      document.body.classList.remove("theme-panel-open");
      page?.removeAttribute("aria-hidden");
      page?.removeAttribute("inert");
      mobileCta?.removeAttribute("aria-hidden");
      mobileCta?.removeAttribute("inert");
    };
  }, [open]);

  function closePanel() {
    setOpen(false);
    window.setTimeout(() => toggleRef.current?.focus(), 0);
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="theme-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open style studio"
        aria-expanded={open}
        aria-controls={panelId}
        title="Customize style and colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <span>Style</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="theme-backdrop"
            aria-label="Close style studio"
            onClick={closePanel}
            tabIndex={-1}
          />
          <aside
            ref={panelRef}
            id={panelId}
            className="theme-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="theme-panel__head">
              <div>
                <h2 id={titleId}>Style Studio</h2>
                <p>Switch layout style and colors — live preview.</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="theme-panel__close"
                onClick={closePanel}
                aria-label="Close style studio"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <div className="theme-panel__section" role="group" aria-labelledby={designLabelId}>
              <h3 id={designLabelId} className="theme-panel__label">
                Layout style
              </h3>
              <div className="design-options">
                {DESIGN_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`design-option${design === option.id ? " is-active" : ""}`}
                    onClick={() => setDesign(option.id)}
                    aria-pressed={design === option.id}
                  >
                    <strong>{option.name}</strong>
                    <small>{option.description}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-panel__section" role="group" aria-labelledby={headerLabelId}>
              <h3 id={headerLabelId} className="theme-panel__label">
                Header style
              </h3>
              <div className="header-options">
                {HEADER_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`header-option${header === option.id ? " is-active" : ""}`}
                    onClick={() => setHeader(option.id)}
                    aria-pressed={header === option.id}
                  >
                    <span
                      className="header-option__preview"
                      style={{ background: option.preview }}
                      aria-hidden="true"
                    />
                    <span className="header-option__text">
                      <strong>{option.name}</strong>
                      <small>{option.description}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-panel__section" role="group" aria-labelledby={presetLabelId}>
              <h3 id={presetLabelId} className="theme-panel__label">
                Color presets
              </h3>
              <div className="theme-presets">
                {THEME_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    className={`theme-preset${activePresetId === preset.id ? " is-active" : ""}`}
                    onClick={() => applyPreset(preset.id)}
                    aria-pressed={activePresetId === preset.id}
                  >
                    <span className="theme-preset__swatches" aria-hidden="true">
                      <i style={{ background: preset.colors.clay }} />
                      <i style={{ background: preset.colors.sage }} />
                      <i style={{ background: preset.colors.cream }} />
                      <i style={{ background: preset.colors.ink }} />
                    </span>
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-panel__section" role="group" aria-labelledby={customLabelId}>
              <h3 id={customLabelId} className="theme-panel__label">
                Custom colors
              </h3>
              <div className="theme-colors">
                {COLOR_FIELDS.map(({ key, label, hint }) => (
                  <label key={key} className="theme-color-row">
                    <span className="theme-color-row__info">
                      <strong>{label}</strong>
                      <small>{hint}</small>
                    </span>
                    <span className="theme-color-row__picker">
                      <input
                        type="color"
                        value={colors[key]}
                        onChange={(e) => setColor(key, e.target.value)}
                        aria-label={`${label} color`}
                      />
                      <code aria-hidden="true">{colors[key]}</code>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="theme-panel__preview" aria-hidden="true">
              <p className="theme-panel__label">Preview</p>
              <div className="theme-preview-card">
                <span className="theme-preview-card__tag">Sample tag</span>
                <p className="theme-preview-card__heading">Heading preview</p>
                <p>Body text preview with your chosen palette.</p>
                <div className="theme-preview-card__actions">
                  <span className="btn" style={{ padding: "0.65rem 1.2rem", fontSize: "0.88rem" }}>
                    Primary button
                  </span>
                  <span
                    className="btn btn--ghost"
                    style={{ padding: "0.65rem 1.2rem", fontSize: "0.88rem" }}
                  >
                    Ghost button
                  </span>
                </div>
              </div>
            </div>

            <button type="button" className="theme-reset" onClick={resetTheme}>
              Reset to default
            </button>
          </aside>
        </>
      )}
    </>
  );
}

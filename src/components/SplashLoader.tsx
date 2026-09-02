"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/site";
import {
  IconCalculator,
  IconChart,
  IconLedger,
  IconScales,
  IconShield,
  IconTaxForm,
} from "@/lib/icons";

const ORBIT = [
  { Icon: IconCalculator, i: 0 },
  { Icon: IconTaxForm, i: 1 },
  { Icon: IconChart, i: 2 },
  { Icon: IconLedger, i: 3 },
  { Icon: IconShield, i: 4 },
  { Icon: IconScales, i: 5 },
];

const MIN_MS = 2200;

function clearSplashLock() {
  document.documentElement.classList.remove("splash-pending");
  document.body.classList.remove("splash-active");
  const page = document.getElementById("site-page");
  if (page) page.removeAttribute("aria-hidden");
}

export default function SplashLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.classList.add("splash-active");
    const page = document.getElementById("site-page");
    if (page) page.setAttribute("aria-hidden", "true");

    let done = false;

    const tick = window.setInterval(() => {
      setProgress((p) => (p >= 96 ? p : p + 5 + Math.random() * 7));
    }, 120);

    const finish = () => {
      if (done) return;
      done = true;
      window.clearInterval(tick);
      setProgress(100);
      window.setTimeout(() => {
        setVisible(false);
        clearSplashLock();
      }, 400);
    };

    const timer = window.setTimeout(finish, MIN_MS);

    return () => {
      done = true;
      window.clearTimeout(timer);
      window.clearInterval(tick);
      clearSplashLock();
    };
  }, []);

  const statusText = progress < 100 ? "Preparing your books…" : "Welcome";

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          className="splash"
          role="status"
          aria-live="polite"
          aria-busy={progress < 100}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="splash__grain" aria-hidden="true" />

          <div className="splash__content">
            <div className="splash__stage" aria-hidden="true">
              <div className="splash__orbit">
                {ORBIT.map(({ Icon, i }) => (
                  <div
                    key={i}
                    className="splash__orbit-item"
                    style={{ "--i": i } as CSSProperties}
                  >
                    <span className="splash__orbit-icon">
                      <Icon />
                    </span>
                  </div>
                ))}
              </div>

              <div className="splash__mark">
                <IconScales />
              </div>
            </div>

            <motion.p
              className="splash__title"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {COMPANY_NAME}
            </motion.p>

            <motion.p
              className="splash__tagline"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {COMPANY_TAGLINE}
            </motion.p>
          </div>

          <div className="splash__footer">
            <div
              className="splash__bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.min(Math.round(progress), 100)}
              aria-label="Loading progress"
            >
              <motion.span
                className="splash__bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            <p className="splash__status">{statusText}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

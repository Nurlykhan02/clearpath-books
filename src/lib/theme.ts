export type ThemeColors = {
  clay: string;
  sage: string;
  cream: string;
  ink: string;
  terracotta: string;
};

export const STORAGE_KEY = "clearpath-theme-v2";

export const DEFAULT_THEME: ThemeColors = {
  clay: "#1f4b6e",
  sage: "#2a9d8f",
  cream: "#f3f5f8",
  ink: "#15202b",
  terracotta: "#3d7ea6",
};

export type ThemePreset = {
  id: string;
  name: string;
  colors: ThemeColors;
};

export const THEME_PRESETS: ThemePreset[] = [
  { id: "clearpath", name: "ClearPath Default", colors: DEFAULT_THEME },

  // Bookkeeping & accounting
  {
    id: "golden-ledger",
    name: "Golden Ledger",
    colors: {
      clay: "#9a7b2f",
      sage: "#6b7f5a",
      cream: "#f7f4ec",
      ink: "#2c2416",
      terracotta: "#c4a35a",
    },
  },
  {
    id: "harbor-navy",
    name: "Harbor Navy",
    colors: {
      clay: "#1e3a5f",
      sage: "#0d9488",
      cream: "#f8fafc",
      ink: "#0f172a",
      terracotta: "#3b82f6",
    },
  },
  {
    id: "ledger-green",
    name: "Ledger Green",
    colors: {
      clay: "#166534",
      sage: "#4ade80",
      cream: "#f0fdf4",
      ink: "#14532d",
      terracotta: "#22c55e",
    },
  },
  {
    id: "tax-pro",
    name: "Tax Professional",
    colors: {
      clay: "#0f766e",
      sage: "#5eead4",
      cream: "#f0fdfa",
      ink: "#134e4a",
      terracotta: "#14b8a6",
    },
  },
  {
    id: "audit-grey",
    name: "Audit Grey",
    colors: {
      clay: "#475569",
      sage: "#64748b",
      cream: "#f1f5f9",
      ink: "#0f172a",
      terracotta: "#94a3b8",
    },
  },
  {
    id: "bookkeeper-warm",
    name: "Bookkeeper Warm",
    colors: {
      clay: "#92400e",
      sage: "#78716c",
      cream: "#fffbeb",
      ink: "#292524",
      terracotta: "#d97706",
    },
  },
  {
    id: "fiscal-copper",
    name: "Fiscal Copper",
    colors: {
      clay: "#9a3412",
      sage: "#57534e",
      cream: "#fef3c7",
      ink: "#1c1917",
      terracotta: "#ea580c",
    },
  },
  {
    id: "corporate-balance",
    name: "Corporate Balance",
    colors: {
      clay: "#1d4ed8",
      sage: "#6b7280",
      cream: "#f9fafb",
      ink: "#111827",
      terracotta: "#60a5fa",
    },
  },
  {
    id: "spreadsheet-blue",
    name: "Spreadsheet Blue",
    colors: {
      clay: "#2563eb",
      sage: "#93c5fd",
      cream: "#eff6ff",
      ink: "#1e3a8a",
      terracotta: "#60a5fa",
    },
  },

  // Legal & judicial
  {
    id: "courtroom-navy",
    name: "Courtroom Navy",
    colors: {
      clay: "#1e3a5f",
      sage: "#4a6fa5",
      cream: "#f8f5ef",
      ink: "#0f1c2e",
      terracotta: "#c9a227",
    },
  },
  {
    id: "marble-justice",
    name: "Marble Justice",
    colors: {
      clay: "#5c4d56",
      sage: "#7a8b99",
      cream: "#f5f3f0",
      ink: "#1f2933",
      terracotta: "#9b2335",
    },
  },
  {
    id: "legal-brief",
    name: "Legal Brief",
    colors: {
      clay: "#2c4a6e",
      sage: "#5b7a9d",
      cream: "#faf9f6",
      ink: "#152032",
      terracotta: "#8b6914",
    },
  },
  {
    id: "chambers-oak",
    name: "Chambers Oak",
    colors: {
      clay: "#4a3728",
      sage: "#6b5b4f",
      cream: "#f4efe6",
      ink: "#2a1f16",
      terracotta: "#a67c52",
    },
  },
  {
    id: "statute-scale",
    name: "Statute & Scale",
    colors: {
      clay: "#1a365d",
      sage: "#718096",
      cream: "#fffff8",
      ink: "#1a202c",
      terracotta: "#b7791f",
    },
  },
  {
    id: "counsel-burgundy",
    name: "Counsel Burgundy",
    colors: {
      clay: "#6b2737",
      sage: "#4a5568",
      cream: "#faf8f5",
      ink: "#1a1a2e",
      terracotta: "#9c4221",
    },
  },
  {
    id: "trust-estate",
    name: "Trust & Estate",
    colors: {
      clay: "#3d5a45",
      sage: "#8b9d83",
      cream: "#f5f2eb",
      ink: "#2d3a2e",
      terracotta: "#7c9070",
    },
  },
  {
    id: "litigation-slate",
    name: "Litigation Slate",
    colors: {
      clay: "#334155",
      sage: "#64748b",
      cream: "#f8fafc",
      ink: "#0f172a",
      terracotta: "#78716c",
    },
  },

  // General professional
  {
    id: "forest",
    name: "Forest Trust",
    colors: {
      clay: "#4a6741",
      sage: "#6b8f71",
      cream: "#f2f5ef",
      ink: "#1e2a1c",
      terracotta: "#8aab7a",
    },
  },
  {
    id: "ocean",
    name: "Ocean Calm",
    colors: {
      clay: "#3d6b7a",
      sage: "#5a8a96",
      cream: "#eef4f5",
      ink: "#1a2e35",
      terracotta: "#6ba3b0",
    },
  },
  {
    id: "slate",
    name: "Slate Pro",
    colors: {
      clay: "#4a5568",
      sage: "#718096",
      cream: "#f4f3f0",
      ink: "#1a202c",
      terracotta: "#8b9aab",
    },
  },
  {
    id: "burgundy",
    name: "Burgundy Classic",
    colors: {
      clay: "#7c3a45",
      sage: "#6b7355",
      cream: "#f8f0ec",
      ink: "#2c1810",
      terracotta: "#b56b5a",
    },
  },
];

export const COLOR_FIELDS: { key: keyof ThemeColors; label: string; hint: string }[] = [
  { key: "clay", label: "Primary", hint: "Buttons, links, accents" },
  { key: "sage", label: "Secondary", hint: "Tags, icons, highlights" },
  { key: "cream", label: "Background", hint: "Page background" },
  { key: "ink", label: "Text", hint: "Headings and body text" },
  { key: "terracotta", label: "Warm accent", hint: "Gradients, icons" },
];

function clamp(n: number) {
  return Math.max(0, Math.min(255, n));
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b].map((v) => clamp(v).toString(16).padStart(2, "0")).join("")}`;
}

export function mixHex(a: string, b: string, weight: number) {
  const c1 = hexToRgb(a);
  const c2 = hexToRgb(b);
  return rgbToHex(
    Math.round(c1.r * (1 - weight) + c2.r * weight),
    Math.round(c1.g * (1 - weight) + c2.g * weight),
    Math.round(c1.b * (1 - weight) + c2.b * weight),
  );
}

export function lighten(hex: string, amount: number) {
  return mixHex(hex, "#ffffff", amount);
}

export function darken(hex: string, amount: number) {
  return mixHex(hex, "#000000", amount);
}

export function applyTheme(colors: ThemeColors) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const { clay, sage, cream, ink, terracotta } = colors;

  root.style.setProperty("--clay", clay);
  root.style.setProperty("--clay-deep", darken(clay, 0.14));
  root.style.setProperty("--sage", sage);
  root.style.setProperty("--sage-deep", darken(sage, 0.16));
  root.style.setProperty("--cream", cream);
  root.style.setProperty("--cream-2", darken(cream, 0.04));
  root.style.setProperty("--sand", mixHex(cream, terracotta, 0.18));
  root.style.setProperty("--sand-deep", mixHex(cream, ink, 0.12));
  root.style.setProperty("--ink", ink);
  root.style.setProperty("--ink-soft", mixHex(ink, cream, 0.45));
  root.style.setProperty("--ink-faint", mixHex(ink, cream, 0.62));
  root.style.setProperty("--terracotta", terracotta);
  const apricot = lighten(terracotta, 0.28);
  root.style.setProperty("--apricot", apricot);
  root.style.setProperty("--line", mixHex(cream, ink, 0.22));
  root.style.setProperty("--card", lighten(cream, 0.35));

  const apricotRgb = hexToRgb(apricot);
  const sageRgb = hexToRgb(sage);
  root.style.setProperty(
    "--bg-glow-warm",
    `rgba(${apricotRgb.r}, ${apricotRgb.g}, ${apricotRgb.b}, 0.45)`,
  );
  root.style.setProperty(
    "--bg-glow-sage",
    `rgba(${sageRgb.r}, ${sageRgb.g}, ${sageRgb.b}, 0.18)`,
  );

  const inkRgb = hexToRgb(ink);
  root.style.setProperty(
    "--shadow-soft",
    `0 8px 24px -12px rgba(${inkRgb.r}, ${inkRgb.g}, ${inkRgb.b}, 0.28)`,
  );
  root.style.setProperty(
    "--shadow-lift",
    `0 14px 36px -16px rgba(${inkRgb.r}, ${inkRgb.g}, ${inkRgb.b}, 0.32)`,
  );

  root.style.backgroundColor = cream;
  document.body.style.backgroundColor = cream;
  document.body.style.backgroundImage = `linear-gradient(180deg, ${cream} 0%, ${cream} 100%)`;
}

export function loadStoredTheme(): ThemeColors | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ThemeColors;
    if (
      parsed.clay &&
      parsed.sage &&
      parsed.cream &&
      parsed.ink &&
      parsed.terracotta
    ) {
      return parsed;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function saveTheme(colors: ThemeColors) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
}

export function clearStoredTheme() {
  localStorage.removeItem(STORAGE_KEY);
}

export function themesEqual(a: ThemeColors, b: ThemeColors) {
  return (
    a.clay === b.clay &&
    a.sage === b.sage &&
    a.cream === b.cream &&
    a.ink === b.ink &&
    a.terracotta === b.terracotta
  );
}

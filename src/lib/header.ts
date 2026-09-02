export type HeaderVariant =
  | "glass"
  | "solid-dark"
  | "solid-light"
  | "navy"
  | "executive";

export const HEADER_STORAGE_KEY = "clearpath-header-v2";

export const DEFAULT_HEADER: HeaderVariant = "navy";

export type HeaderOption = {
  id: HeaderVariant;
  name: string;
  description: string;
  preview: string;
};

export const HEADER_OPTIONS: HeaderOption[] = [
  {
    id: "glass",
    name: "Frost Light",
    description: "Light frosted bar — quiet and clean",
    preview: "linear-gradient(to bottom, #f3f5f8, #e8ecf1)",
  },
  {
    id: "solid-dark",
    name: "Solid Dark",
    description: "Charcoal bar, white links, sharp and confident",
    preview: "linear-gradient(to bottom, #1a2330, #141c26)",
  },
  {
    id: "solid-light",
    name: "Solid Light",
    description: "Clean white header, underline active state",
    preview: "linear-gradient(to bottom, #ffffff, #f8f6f2)",
  },
  {
    id: "navy",
    name: "Navy Pro",
    description: "Deep navy with accent stripe — finance feel",
    preview: "linear-gradient(to bottom, #152a42, #0f2438)",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Compact dark bar, uppercase nav, top accent",
    preview: "linear-gradient(to bottom, #222830, #1a1f26)",
  },
];

const VALID_HEADERS = new Set<string>(HEADER_OPTIONS.map((o) => o.id));

export function applyHeader(variant: HeaderVariant) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-header", variant);
}

export function loadStoredHeader(): HeaderVariant | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(HEADER_STORAGE_KEY);
    if (raw && VALID_HEADERS.has(raw)) return raw as HeaderVariant;
  } catch {
    /* ignore */
  }
  return null;
}

export function saveHeader(variant: HeaderVariant) {
  localStorage.setItem(HEADER_STORAGE_KEY, variant);
}

export function clearStoredHeader() {
  localStorage.removeItem(HEADER_STORAGE_KEY);
}

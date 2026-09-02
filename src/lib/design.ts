export type DesignVariant = "organic" | "solid" | "minimal";

export const DESIGN_STORAGE_KEY = "clearpath-design-v3";

export const DEFAULT_DESIGN: DesignVariant = "organic";

export type DesignOption = {
  id: DesignVariant;
  name: string;
  description: string;
};

export const DESIGN_OPTIONS: DesignOption[] = [
  {
    id: "organic",
    name: "Soft Studio",
    description: "Bubbles, soft shapes — default ClearPath look",
  },
  {
    id: "solid",
    name: "ClearPath Pro",
    description: "Photo hero, sharp layout, no bubbles",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Flat corporate look, no blobs or photos",
  },
];

export function applyDesign(variant: DesignVariant) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-design", variant);
}

export function loadStoredDesign(): DesignVariant | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DESIGN_STORAGE_KEY);
    if (raw === "organic" || raw === "solid" || raw === "minimal") return raw;
  } catch {
    /* ignore */
  }
  return null;
}

export function saveDesign(variant: DesignVariant) {
  localStorage.setItem(DESIGN_STORAGE_KEY, variant);
}

export function clearStoredDesign() {
  localStorage.removeItem(DESIGN_STORAGE_KEY);
}

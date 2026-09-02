"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  applyDesign,
  clearStoredDesign,
  DEFAULT_DESIGN,
  DesignVariant,
  loadStoredDesign,
  saveDesign,
} from "@/lib/design";
import {
  applyHeader,
  clearStoredHeader,
  DEFAULT_HEADER,
  HeaderVariant,
  loadStoredHeader,
  saveHeader,
} from "@/lib/header";
import {
  applyTheme,
  clearStoredTheme,
  DEFAULT_THEME,
  loadStoredTheme,
  saveTheme,
  ThemeColors,
  THEME_PRESETS,
  themesEqual,
} from "@/lib/theme";

type ThemeContextValue = {
  colors: ThemeColors;
  setColor: (key: keyof ThemeColors, value: string) => void;
  applyPreset: (presetId: string) => void;
  resetTheme: () => void;
  activePresetId: string | null;
  design: DesignVariant;
  setDesign: (variant: DesignVariant) => void;
  header: HeaderVariant;
  setHeader: (variant: HeaderVariant) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(DEFAULT_THEME);
  const [design, setDesignState] = useState<DesignVariant>(DEFAULT_DESIGN);
  const [header, setHeaderState] = useState<HeaderVariant>(DEFAULT_HEADER);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedColors = loadStoredTheme();
    const storedDesign = loadStoredDesign();
    const storedHeader = loadStoredHeader();
    const initialColors = storedColors ?? DEFAULT_THEME;
    const initialDesign = storedDesign ?? DEFAULT_DESIGN;
    const initialHeader = storedHeader ?? DEFAULT_HEADER;

    setColors(initialColors);
    setDesignState(initialDesign);
    setHeaderState(initialHeader);
    applyTheme(initialColors);
    applyDesign(initialDesign);
    applyHeader(initialHeader);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyTheme(colors);
    saveTheme(colors);
  }, [colors, ready]);

  useEffect(() => {
    if (!ready) return;
    applyDesign(design);
    saveDesign(design);
  }, [design, ready]);

  useEffect(() => {
    if (!ready) return;
    applyHeader(header);
    saveHeader(header);
  }, [header, ready]);

  const setColor = useCallback((key: keyof ThemeColors, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  }, []);

  const applyPreset = useCallback((presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (preset) setColors(preset.colors);
  }, []);

  const setDesign = useCallback((variant: DesignVariant) => {
    setDesignState(variant);
  }, []);

  const setHeader = useCallback((variant: HeaderVariant) => {
    setHeaderState(variant);
  }, []);

  const resetTheme = useCallback(() => {
    setColors(DEFAULT_THEME);
    setDesignState(DEFAULT_DESIGN);
    setHeaderState(DEFAULT_HEADER);
    clearStoredTheme();
    clearStoredDesign();
    clearStoredHeader();
    applyTheme(DEFAULT_THEME);
    applyDesign(DEFAULT_DESIGN);
    applyHeader(DEFAULT_HEADER);
  }, []);

  const activePresetId = useMemo(() => {
    const match = THEME_PRESETS.find((p) => themesEqual(p.colors, colors));
    return match?.id ?? null;
  }, [colors]);

  const value = useMemo(
    () => ({
      colors,
      setColor,
      applyPreset,
      resetTheme,
      activePresetId,
      design,
      setDesign,
      header,
      setHeader,
    }),
    [colors, setColor, applyPreset, resetTheme, activePresetId, design, setDesign, header, setHeader],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

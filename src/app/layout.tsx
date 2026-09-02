import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import ThemeInitScript from "@/components/ThemeInitScript";
import DesignInitScript from "@/components/DesignInitScript";
import SplashInitScript from "@/components/SplashInitScript";
import SplashLoader from "@/components/SplashLoader";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/site";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY_NAME} — Your books, finally under control.`,
  description: COMPANY_TAGLINE,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-design="organic"
      data-header="navy"
      className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <DesignInitScript />
        <ThemeInitScript />
        <SplashInitScript />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <SplashLoader />
          <div className="page" id="site-page">
            <Header />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
          <MobileCTABar />
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import Link from "next/link";

export default function MobileCTABar() {
  return (
    <nav className="mobile-cta" aria-label="Mobile call to action">
      <Link href="/contact" className="btn" aria-label="Book a consultation from mobile bar">
        Book a Consultation
      </Link>
    </nav>
  );
}

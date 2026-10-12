import Link from "next/link";
import { COMPANY_NAME, COMPANY_SHORT } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="brand" aria-label={`${COMPANY_NAME} home`}>
              <span className="brand__mark" aria-hidden="true">
                {COMPANY_SHORT.slice(0, 1)}
              </span>
              <span className="brand__name">
                {COMPANY_SHORT}
                <span> Bookkeeping</span>
              </span>
            </Link>
            <p>Your books, finally under control.</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2>Menu</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>
            <span className="dot" aria-hidden="true" />
            © 2026 {COMPANY_NAME}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

/**
 * Footer — Dark walnut-dark background, 4-column grid.
 * Brand column (2fr): logo + tagline + social icons.
 * Services, Info, Contact columns (1fr each).
 * Bottom bar: copyright + privacy/cookie links.
 * Responsive: 2 cols on tablet, 1 col on mobile.
 */
import Link from 'next/link'
import { footer, contactInfo, nav } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-walnut-dark text-white/70 pt-12 pb-8 px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-8">
        {/* Brand column */}
        <div>
          <div className="font-heading font-black text-xl text-white mb-3">
            {nav.logo}<span className="text-orange">.</span>
          </div>
          <p className="text-sm leading-relaxed mb-6 whitespace-pre-line">
            {footer.tagline}
          </p>
          {/* Social icons */}
          <div className="flex gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white text-sm hover:bg-orange transition-colors"
            >
              f
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white text-sm hover:bg-orange transition-colors"
            >
              in
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm mb-4">
            {footer.servicesColumn.title}
          </h4>
          <ul className="flex flex-col gap-2">
            {footer.servicesColumn.links.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-white/60 text-[0.85rem] hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info column */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm mb-4">
            {footer.infoColumn.title}
          </h4>
          <ul className="flex flex-col gap-2">
            {footer.infoColumn.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 text-[0.85rem] hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm mb-4">
            Kontaktai
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-white/60 text-[0.85rem] hover:text-orange transition-colors"
              >
                {contactInfo.phoneFormatted}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white/60 text-[0.85rem] hover:text-orange transition-colors"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="text-white/50 text-[0.85rem] mt-2">
              {contactInfo.serviceArea}
            </li>
            <li className="text-white/50 text-[0.85rem]">
              {contactInfo.workingHours}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <span>{footer.legal.copyright}</span>
        <div className="flex items-center gap-6">
          {footer.legal.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/50 hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

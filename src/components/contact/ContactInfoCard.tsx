/**
 * ContactInfoCard — Reusable card with phone, email, WhatsApp, address.
 * Used on /kontaktai/ page and potentially elsewhere.
 */
import { contactInfo } from '@/lib/content'

export default function ContactInfoCard() {
  return (
    <div className="space-y-6">
      <h2 className="font-heading font-extrabold text-2xl text-walnut-dark">
        {contactInfo.companyName}
      </h2>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-walnut/10 rounded-brand flex items-center justify-center text-xl flex-shrink-0">
          📞
        </div>
        <div>
          <a href={`tel:${contactInfo.phone}`} className="font-heading font-bold text-lg text-walnut-dark hover:text-orange transition-colors">
            {contactInfo.phoneFormatted}
          </a>
          <div className="text-muted text-sm">{contactInfo.workingHours}</div>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-walnut/10 rounded-brand flex items-center justify-center text-xl flex-shrink-0">
          ✉️
        </div>
        <div>
          <a href={`mailto:${contactInfo.email}`} className="font-heading font-bold text-lg text-walnut-dark hover:text-orange transition-colors">
            {contactInfo.email}
          </a>
          <div className="text-muted text-sm">Atsakome per 24 valandas</div>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-walnut/10 rounded-brand flex items-center justify-center text-xl flex-shrink-0">
          📍
        </div>
        <div>
          <div className="font-heading font-bold text-lg text-walnut-dark">{contactInfo.serviceArea}</div>
          <div className="text-muted text-sm">Atvykstame visur Vilniuje ir aplinkiniuose rajonuose</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 pt-4">
        <a
          href={`tel:${contactInfo.phone}`}
          className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3.5 rounded-[10px] font-heading font-bold transition-colors"
        >
          📞 Skambinti
        </a>
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366] px-6 py-3.5 rounded-[10px] font-heading font-semibold transition-colors"
        >
          💬 WhatsApp
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center gap-2 bg-walnut/10 hover:bg-walnut/20 text-walnut-dark border border-walnut/20 px-6 py-3.5 rounded-[10px] font-heading font-semibold transition-colors"
        >
          ✉️ El. paštas
        </a>
      </div>
    </div>
  )
}

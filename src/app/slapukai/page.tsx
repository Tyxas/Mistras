/**
 * Slapukų politika (Cookie Policy) — Mistras
 */
import { cookiePolicy } from '@/lib/content'

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading font-black text-display-lg text-walnut-dark mb-2">
          {cookiePolicy.title}
        </h1>
        <p className="text-muted text-sm mb-12">
          {cookiePolicy.lastUpdated}
        </p>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-walnut-dark/80 leading-relaxed mb-10">
            {cookiePolicy.intro}
          </p>
          
          <div className="space-y-12">
            {cookiePolicy.sections.map((section, idx) => (
              <section key={idx} className="bg-white p-8 rounded-brand shadow-brand-sm border border-walnut/5">
                <h2 className="font-heading font-bold text-xl text-walnut-dark mb-4">
                  {section.title}
                </h2>
                <p className="text-muted leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

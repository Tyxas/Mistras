/**
 * Privatumo politika (Privacy Policy) — Mistras
 */
import { privacyPolicy } from '@/lib/content'

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading font-black text-display-lg text-walnut-dark mb-2">
          {privacyPolicy.title}
        </h1>
        <p className="text-muted text-sm mb-12">
          {privacyPolicy.lastUpdated}
        </p>
        
        <div className="space-y-10">
          {privacyPolicy.sections.map((section, idx) => (
            <section key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h2 className="font-heading font-bold text-xl text-walnut-dark mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-blue-brand/10 text-blue-brand flex items-center justify-center text-sm mr-3">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <div className="pl-11">
                <p className="text-muted leading-relaxed">
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-brand bg-walnut-dark text-white/80 text-sm">
          <p>
            Jei turite klausimų dėl mūsų privatumo politikos, susisiekite su mumis el. paštu: 
            <a href="mailto:mistrasvilnius@gmail.com" className="text-orange hover:underline ml-1">
              mistrasvilnius@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

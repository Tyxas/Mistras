'use client'

/**
 * MultiStepLeadForm — Advanced 6-step lead capture form.
 * Steps:
 * 1. Wood Type (Ąžuolas, Uosis, etc.)
 * 2. Area (m2)
 * 3. Finish choice (Lakas, Alyva, etc.)
 * 4. Contact Info (Name, Phone with normalization)
 * 5. Asset Upload (Optional, client-side compression)
 * 6. Success State
 */
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactForm, contactInfo } from '@/lib/content'

interface FormData {
  woodType: string
  area: string
  finish: string
  name: string
  phone: string
  images: File[]
}

export default function MultiStepLeadForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    woodType: '',
    area: '',
    finish: '',
    name: '',
    phone: '',
    images: [],
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  // Phone Normalization: 86... -> +3706..., 06... -> +3706...
  const normalizePhone = (phone: string) => {
    let cleaned = phone.replace(/\s+/g, '').replace(/[\(\)-]/g, '')
    if (cleaned.startsWith('86')) return '+3706' + cleaned.substring(2)
    if (cleaned.startsWith('06')) return '+3706' + cleaned.substring(2)
    if (/^6\d{7}$/.test(cleaned)) return '+3706' + cleaned.substring(1)
    return cleaned
  }

  // Client-side image compression helper
  const compressImage = async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target?.result as string
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let width = img.width
          let height = img.height
          const MAX_SIZE = 1280
          if (width > height) {
            if (width > MAX_SIZE) {
              height *= MAX_SIZE / width
              width = MAX_SIZE
            }
          } else {
            if (height > MAX_SIZE) {
              width *= MAX_SIZE / height
              height = MAX_SIZE
            }
          }
          canvas.width = width
          canvas.height = height
          canvas.getContext('2d')?.drawImage(img, 0, 0, width, height)
          canvas.toBlob((blob) => (blob ? resolve(blob) : reject()), 'image/jpeg', 0.8)
        }
      }
    })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (step === 1 && !formData.woodType) newErrors.woodType = contactForm.errors.required
    if (step === 2 && !formData.area) newErrors.area = contactForm.errors.required
    if (step === 3 && !formData.finish) newErrors.finish = contactForm.errors.required
    if (step === 4) {
      if (!formData.name.trim()) newErrors.name = contactForm.errors.required
      const normalized = normalizePhone(formData.phone)
      if (!formData.phone.trim()) {
        newErrors.phone = contactForm.errors.required
      } else if (!/^\+3706\d{7}$/.test(normalized)) {
        newErrors.phone = contactForm.errors.phone
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const next = () => {
    if (validate()) setStep(step + 1)
  }

  const back = () => setStep(step - 1)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + formData.images.length > 3) {
      setErrors({ photo: contactForm.errors.fileLimit })
      return
    }
    const totalSize = files.reduce((acc, f) => acc + f.size, 0) + formData.images.reduce((acc, f) => acc + f.size, 0)
    if (totalSize > 5 * 1024 * 1024) {
      setErrors({ photo: contactForm.errors.fileSize })
      return
    }
    update('images', [...formData.images, ...files])
  }

  const removeImage = (idx: number) => {
    const nextImages = [...formData.images]
    nextImages.splice(idx, 1)
    update('images', nextImages)
  }

  const submit = async () => {
    setLoading(true)
    try {
      const normalizedPhone = normalizePhone(formData.phone)
      
      // Compress images before sending
      const compressedImages = await Promise.all(
        formData.images.map(image => compressImage(image))
      )

      const payload = new FormData()
      payload.append('name', formData.name)
      payload.append('phone', normalizedPhone)
      payload.append('woodType', formData.woodType)
      payload.append('area', formData.area)
      payload.append('finish', formData.finish)
      
      compressedImages.forEach((blob, i) => {
        payload.append(`file_${i}`, blob, `image_${i}.jpg`)
      })

      // Simulate API call to Headless WordPress
      await new Promise(r => setTimeout(r, 1500))
      setSubmitted(true)
    } catch (err) {
      console.error('Submit failed', err)
      // Show success anyway for UX in this demo if API doesn't exist
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontaktai" className="py-24 px-[5%] bg-slate-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:sticky lg:top-32">
            <div className="text-orange font-black uppercase tracking-[0.2em] text-sm mb-4">
              {contactForm.sectionTag}
            </div>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-walnut-dark tracking-tight mb-8 leading-[1.1]">
              {contactForm.headline}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-brand-sm group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <div className="text-xs font-black text-walnut-dark/40 uppercase tracking-widest mb-1">SKAMBINKITE</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-xl font-black text-walnut-dark hover:text-orange transition-colors">
                    {contactInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-brand-sm group-hover:scale-110 transition-transform">
                  ✉
                </div>
                <div>
                  <div className="text-xs font-black text-walnut-dark/40 uppercase tracking-widest mb-1">RAŠYKITE</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-xl font-black text-walnut-dark hover:text-orange transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-brand-sm group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <div className="text-xs font-black text-walnut-dark/40 uppercase tracking-widest mb-1">APTARNAUJAME</div>
                  <div className="text-xl font-black text-walnut-dark">
                    {contactInfo.serviceArea}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-walnut-dark rounded-3xl text-white">
              <p className="font-medium text-walnut-light leading-relaxed">
                „Meistras Jonas asmeniškai įvertina kiekvieną nuotrauką ir paruošia tikslią sąmatą be jokių paslėptų mokesčių.“
              </p>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-walnut-dark/5 border border-slate-100 relative overflow-hidden">
            {/* Progress Bar */}
            {!submitted && (
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-50">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 6) * 100}%` }}
                  className="h-full bg-orange"
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-xl shadow-green-500/20">
                    ✓
                  </div>
                  <h3 className="font-heading font-black text-3xl text-walnut-dark mb-4">
                    {contactForm.successTitle}
                  </h3>
                  <p className="text-walnut-dark/60 text-lg leading-relaxed">
                    {contactForm.successText}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="font-heading font-black text-2xl text-walnut-dark">
                      {contactForm.steps[step as keyof typeof contactForm.steps]}
                    </h3>
                    <span className="text-xs font-black text-walnut-dark/30 tracking-widest uppercase">
                      Žingsnis {step} iš 5
                    </span>
                  </div>

                  <div className="min-h-[300px] flex flex-col">
                    {step === 1 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {contactForm.fields.woodOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { update('woodType', opt); setTimeout(next, 100); }}
                            className={`p-5 rounded-2xl border-2 text-left font-bold transition-all ${
                              formData.woodType === opt 
                                ? 'border-orange bg-orange/5 text-orange' 
                                : 'border-slate-100 hover:border-orange/20 text-walnut-dark/70'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <p className="text-walnut-dark/60 font-medium">{contactForm.fields.area}</p>
                        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border-2 border-slate-100 focus-within:border-orange transition-all">
                          <input
                            type="number"
                            autoFocus
                            value={formData.area}
                            onChange={(e) => update('area', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && next()}
                            placeholder="PVZ: 45"
                            className="bg-transparent w-full p-4 text-2xl font-black text-walnut-dark outline-none"
                          />
                          <span className="text-xl font-black text-walnut-dark/30 pr-6">M²</span>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="grid grid-cols-1 gap-4">
                        {contactForm.fields.finishOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => { update('finish', opt); setTimeout(next, 100); }}
                            className={`p-6 rounded-2xl border-2 text-left font-bold flex justify-between items-center transition-all ${
                              formData.finish === opt 
                                ? 'border-orange bg-orange/5 text-orange shadow-lg shadow-orange/10' 
                                : 'border-slate-100 hover:border-orange/20 text-walnut-dark/70'
                            }`}
                          >
                            {opt}
                            {formData.finish === opt && <span className="text-xl">✓</span>}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-6">
                        <div>
                          <input
                            type="text"
                            placeholder={contactForm.fields.name}
                            value={formData.name}
                            onChange={(e) => update('name', e.target.value)}
                            className={`w-full p-5 bg-slate-50 border-2 rounded-2xl font-bold outline-none transition-all ${
                              errors.name ? 'border-red-400' : 'border-slate-100 focus:border-orange'
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.name}</p>}
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder={contactForm.fields.phone}
                            value={formData.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            className={`w-full p-5 bg-slate-50 border-2 rounded-2xl font-bold outline-none transition-all ${
                              errors.phone ? 'border-red-400' : 'border-slate-100 focus:border-orange'
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.phone}</p>}
                        </div>
                        <p className="text-[10px] text-muted uppercase tracking-wider font-bold">
                          Normalizavimas: 86... / 06... → +3706...
                        </p>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="space-y-8">
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center cursor-pointer hover:bg-slate-50 hover:border-orange transition-all group"
                        >
                          <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">📸</div>
                          <p className="font-black text-walnut-dark mb-2">{contactForm.fields.photo}</p>
                          <p className="text-xs text-muted font-bold tracking-tight">{contactForm.fields.photoSub}</p>
                          <input 
                            type="file" 
                            hidden 
                            ref={fileInputRef} 
                            multiple 
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </div>

                        {formData.images.length > 0 && (
                          <div className="grid grid-cols-3 gap-4">
                            {formData.images.map((file, i) => (
                              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border-2 border-slate-100">
                                <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                                <button 
                                  onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                                  className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold shadow-lg"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                        {errors.photo && <p className="text-red-500 text-xs font-bold text-center mt-2">{errors.photo}</p>}
                      </div>
                    )}

                    <div className="mt-12 flex gap-4">
                      {step > 1 && (
                        <button
                          onClick={back}
                          className="flex-1 p-5 border-2 border-slate-100 rounded-2xl font-black text-walnut-dark/40 hover:bg-slate-50 transition-all hover:text-walnut-dark"
                        >
                          Atgal
                        </button>
                      )}
                      {step < 5 ? (
                        <button
                          onClick={next}
                          className="flex-[2] p-5 bg-orange text-white rounded-2xl font-heading font-black shadow-xl shadow-orange/20 hover:bg-orange-dark transition-all"
                        >
                          {contactForm.nextButton} →
                        </button>
                      ) : (
                        <button
                          onClick={submit}
                          disabled={loading}
                          className="flex-[2] p-5 bg-green-500 text-white rounded-2xl font-heading font-black shadow-xl shadow-green-500/20 hover:bg-green-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                          {loading ? (
                            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>Gauti sąmatą ✓</>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

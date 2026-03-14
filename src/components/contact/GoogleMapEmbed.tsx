'use client'

/**
 * GoogleMapEmbed — Vilnius map embed with stylized frame.
 * Uses Google Maps embed for Vilnius area.
 */
export default function GoogleMapEmbed() {
  return (
    <div className="rounded-brand-lg overflow-hidden border border-gray-200 shadow-brand">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73738.49288734065!2d25.219327!3d54.687156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius%2C%20Lithuania!5e0!3m2!1slt!2slt!4v1"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="UAB Mistras – Vilnius"
      />
    </div>
  )
}

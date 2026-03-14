/**
 * POST /api/contact — Lead form submission handler.
 * Validates required fields, stores lead data.
 * Will forward to WordPress CF7 when CMS is connected.
 */
import { NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  phone: string
  email?: string
  city?: string
  area?: number
  condition?: string
  service?: string
  source?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json({ error: 'name is required' }, { status: 400 })
    }
    if (!body.phone?.trim()) {
      return NextResponse.json({ error: 'phone is required' }, { status: 400 })
    }

    // Validate phone format (Lithuanian)
    const cleanPhone = body.phone.replace(/\s/g, '')
    if (!/^(\+370|8)\d{7,8}$/.test(cleanPhone)) {
      return NextResponse.json({ error: 'Invalid phone format' }, { status: 400 })
    }

    // Validate email if provided
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // TODO: Forward to WordPress CF7 REST API
    // const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL
    // await fetch(`${wpUrl}/wp-json/contact-form-7/v1/contact-forms/{id}/feedback`, { ... })

    // Log to console for now
    console.log('[LEAD]', {
      name: body.name,
      phone: cleanPhone,
      email: body.email || null,
      city: body.city || null,
      area: body.area || null,
      condition: body.condition || null,
      service: body.service || null,
      source: body.source || 'unknown',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Ačiū! Gavome jūsų užklausą. Susisieksime per 24 val.',
    })
  } catch (error) {
    console.error('[CONTACT_API_ERROR]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

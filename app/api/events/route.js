// app/api/events/route.js
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const eventsDir = path.join(process.cwd(), 'public', 'images', 'events')

    if (!fs.existsSync(eventsDir)) {
      return NextResponse.json({ images: [] })
    }

    const files = fs.readdirSync(eventsDir)
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .map((f) => `/images/events/${f}`)

    return NextResponse.json({ images: files })
  } catch (err) {
    console.error('Events API error:', err)
    return NextResponse.json({ images: [] })
  }
}

import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const eventsDir = path.join(process.cwd(), 'public', 'images', 'events')
    if (!fs.existsSync(eventsDir)) {
      return new Response(JSON.stringify([]), { status: 200, headers: {'Content-Type':'application/json'} })
    }
    const files = fs.readdirSync(eventsDir)
    const supported = files.filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f))
    const urls = supported.map(f => `/images/events/${f}`)
    return new Response(JSON.stringify(urls), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify([]), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}

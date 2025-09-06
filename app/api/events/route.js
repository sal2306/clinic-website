import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const eventsDir = path.join(process.cwd(), "public", "images", "events");
    if (!fs.existsSync(eventsDir)) {
      return NextResponse.json([], { status: 200 });
    }
    const files = fs.readdirSync(eventsDir);
    const supported = files.filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));
    const urls = supported.map((f) => `/images/events/${encodeURIComponent(f)}`);
    return NextResponse.json(urls, { status: 200, headers: { "Cache-Control": "public, max-age=60" } });
  } catch (err) {
    console.error("events API error:", err);
    return NextResponse.json([], { status: 500 });
  }
}

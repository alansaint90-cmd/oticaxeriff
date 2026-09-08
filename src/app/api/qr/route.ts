import QRCode from "qrcode";
import { NextResponse, type NextRequest } from "next/server";
import { absoluteUrl } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const data = request.nextUrl.searchParams.get("data") ?? "/";
  const url = data.startsWith("http") ? data : absoluteUrl(data);
  const buffer = await QRCode.toBuffer(url, {
    type: "png",
    width: 960,
    margin: 2,
    color: { dark: "#062747", light: "#ffffff" }
  });

  const body = new Uint8Array(buffer);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": "attachment; filename=iba-conecta-qr.png"
    }
  });
}

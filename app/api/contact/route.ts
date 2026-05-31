import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const DIVISION_ROUTES: Record<string, { to: string; label: string }> = {
  cars:  { to: "info@descampers.com", label: "DES Cars — Voertuigenhandel" },
  it:    { to: "info@desgroup.eu",    label: "DES IT — IT Consultancy" },
  shop:  { to: "info@desshop.nl",     label: "DES Shop — E-commerce" },
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message, division } = await req.json()
    if (!email || !message || !firstName) {
      return NextResponse.json({ error: "Vereiste velden ontbreken" }, { status: 400 })
    }

    const route = DIVISION_ROUTES[division] ?? DIVISION_ROUTES.cars
    const name  = `${firstName} ${lastName}`.trim()

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth:   { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    // 1. Admin notification → correct division inbox
    await transporter.sendMail({
      from:    `"DES Group Website" <${process.env.SMTP_USER}>`,
      to:      route.to,
      replyTo: email,
      subject: `[Website] Nieuw bericht via ${route.label} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:580px;padding:24px">
          <div style="background:#0f172a;padding:16px 24px;border-radius:8px 8px 0 0">
            <div style="color:#fff;font-size:16px;font-weight:700">📩 Nieuw contactbericht</div>
            <div style="color:rgba(255,255,255,0.5);font-size:11px;margin-top:2px">${route.label}</div>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;padding:20px 24px">
            <table style="width:100%;font-size:13px;border-collapse:collapse">
              <tr><td style="color:#64748b;padding:6px 0;width:120px">Naam</td><td style="font-weight:600;color:#0f172a">${name}</td></tr>
              <tr><td style="color:#64748b;padding:6px 0">E-mail</td><td><a href="mailto:${email}" style="color:#1D9E75">${email}</a></td></tr>
              ${phone ? `<tr><td style="color:#64748b;padding:6px 0">Telefoon</td><td style="color:#0f172a">${phone}</td></tr>` : ""}
              <tr><td style="color:#64748b;padding:6px 0">Divisie</td><td style="color:#0f172a">${route.label}</td></tr>
            </table>
            <div style="margin-top:16px;padding:14px;background:#f8fafc;border-radius:8px;font-size:13px;color:#334155;line-height:1.6;white-space:pre-wrap">${message}</div>
            <div style="margin-top:16px;font-size:11px;color:#94a3b8">Ontvangen via deshold.com</div>
          </div>
        </div>`,
    })

    // 2. Auto-responder → visitor
    await transporter.sendMail({
      from:    `"DES Group" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: `Bedankt voor uw bericht — DES Group`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;padding:24px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
            <span style="width:8px;height:8px;border-radius:50%;background:#1D9E75;display:inline-block"></span>
            <span style="font-size:15px;font-weight:600;color:#0f172a">DES Group</span>
          </div>
          <p style="font-size:14px;color:#0f172a;font-weight:600;margin-bottom:8px">Beste ${firstName},</p>
          <p style="font-size:13px;color:#475569;line-height:1.7;margin-bottom:12px">
            Bedankt voor uw bericht. Wij hebben uw vraag ontvangen en zullen zo spoedig mogelijk reageren —
            doorgaans binnen één werkdag.
          </p>
          <p style="font-size:13px;color:#475569;line-height:1.7;margin-bottom:20px">
            Uw bericht is doorgestuurd naar <strong>${route.label}</strong>.
          </p>
          <div style="border-top:1px solid #e2e8f0;padding-top:16px;font-size:11px;color:#94a3b8">
            DES Group · deshold.com · info@desgroup.eu
          </div>
        </div>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    console.error("[contact]", err)
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 })
  }
}

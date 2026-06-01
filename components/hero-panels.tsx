"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function HeroPanels() {
  const t = useTranslations("Hero")
  const [active, setActive] = useState(0)

  const panels = [
    {
      title: t("platform_title"),
      subtitle: t("platform_sub"),
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      href: "/platform",
      accent: "#3b82f6",
      num: "01",
      eyebrow: "Enterprise Systems & Solutions",
    },
    {
      title: "DES Mobility",
      subtitle: "Camper Conversion Expert · Campers, caravans and vans. Freedom on the road for unforgettable outdoor journeys across Europe.",
      img: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?w=1200&q=80",
      href: "https://descampers.com",
      accent: "#1D9E75",
      num: "02",
    },
    {
      title: "DES Shop",
      subtitle: "Retail and e-commerce solutions for everyday needs.",
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
      href: "https://desshop.nl",
      accent: "#f59e0b",
      num: "03",
    },
    {
      title: "DES Ventures",
      subtitle: "Invent, build, spin out. Product ideas, IP, prototypes. Invention lab + micro-fund.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      href: "/ventures",
      accent: "#8b5cf6",
      num: "04",
    },
  ]

  return (
    <section className="flex overflow-hidden" style={{ height: "62vh", minHeight: "480px" }}>
      {panels.map((p, i) => (
        <motion.div
          key={p.title}
          onMouseEnter={() => setActive(i)}
          animate={{ flex: active === i ? 3 : 1 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="relative cursor-pointer overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${p.img})` }}
            animate={{ scale: active === i ? 1.04 : 1.1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 h-0.5 w-full"
            style={{ background: p.accent }}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute top-8 right-5 text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>{p.num}</div>

          <div className="absolute bottom-10 left-8 right-8 z-10 text-white">
            <motion.div
              animate={{ opacity: active === i ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {p.eyebrow && active === i && (
                <div className="mb-4">
                  <div className="font-bold leading-tight" style={{ fontSize: "28px", fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.85)" }}>{p.eyebrow}</div>
                  <div className="font-medium mt-1" style={{ fontSize: "clamp(15px,1.4vw,18px)", color: "rgba(56,189,248,0.85)", letterSpacing: "0.04em" }}>
                    AI | ERP | MES | CRM | DevOps
                  </div>
                  <div style={{ height: "1px", width: "140px", background: "linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.0))", marginTop: "12px" }} />
                </div>
              )}
              <h2 className="font-bold leading-tight mb-3 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: "28px", fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.85)" }}>
                {p.title}
              </h2>
            </motion.div>

            <motion.div
              animate={{ opacity: active === i ? 1 : 0, height: active === i ? "auto" : 0, y: active === i ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-[13px] leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                {p.subtitle}
              </p>
              <Link href={p.href}
                className="inline-flex items-center gap-2 text-[12px] font-medium px-4 py-2 rounded-full transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.4)", color: "white" }}>
                {t("discover")} <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

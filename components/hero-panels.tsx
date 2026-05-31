"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const panels = [
  {
    title: "DES Campers",
    subtitle: "Freedom on the road. Premium campers for unforgettable journeys.",
    bg: "from-slate-900 via-emerald-950 to-slate-900",
    img: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?w=1200&q=80",
    href: "https://descampers.com",
    accent: "#1D9E75",
  },
  {
    title: "DES Cars",
    subtitle: "Quality vehicles. Trusted trading. Lasting relationships.",
    bg: "from-slate-900 via-blue-950 to-slate-900",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    href: "/businesses#cars",
    accent: "#3B82F6",
  },
  {
    title: "DES Platform",
    subtitle: "The technology behind every business. One platform. Endless possibilities.",
    bg: "from-slate-900 via-violet-950 to-slate-900",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    href: "/platform",
    accent: "#8B5CF6",
  },
  {
    title: "DESHold",
    subtitle: "Building businesses through technology and innovation.",
    bg: "from-slate-900 via-slate-800 to-slate-900",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    href: "/about",
    accent: "#F59E0B",
  },
]

export default function HeroPanels() {
  const [active, setActive] = useState(2)

  return (
    <section className="h-screen flex overflow-hidden">
      {panels.map((panel, i) => (
        <motion.div
          key={panel.title}
          onMouseEnter={() => setActive(i)}
          animate={{ flex: active === i ? 2.8 : 1 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="relative cursor-pointer overflow-hidden"
        >
          {/* Background image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${panel.img})` }}
            animate={{ scale: active === i ? 1.05 : 1.1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Active accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 w-full"
            style={{ background: panel.accent }}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="absolute bottom-12 left-8 right-8 z-10 text-white">
            <motion.div
              animate={{ opacity: active === i ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl xl:text-5xl font-bold mb-3 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {panel.title}
              </h2>
            </motion.div>

            <motion.div
              animate={{
                opacity: active === i ? 1 : 0,
                height: active === i ? "auto" : 0,
                y: active === i ? 0 : 10,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-[15px] text-slate-200 leading-relaxed mb-6 max-w-xs">
                {panel.subtitle}
              </p>
              <Link href={panel.href}
                className="inline-flex items-center gap-2 border border-white/60 text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-200">
                Discover More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Panel number */}
          <div className="absolute top-8 right-6 text-white/20 text-[11px] font-mono">
            0{i + 1}
          </div>
        </motion.div>
      ))}
    </section>
  )
}

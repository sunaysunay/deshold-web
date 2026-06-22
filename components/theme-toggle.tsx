"use client"
import { useTheme } from "next-themes"
import { Monitor, Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

const OPTIONS = [
  { key: "system", Icon: Monitor },
  { key: "light",  Icon: Sun },
  { key: "dark",   Icon: Moon },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div role="group" aria-label="Theme switcher"
      style={{ display: "inline-flex", alignItems: "center", gap: 2, padding: 3, borderRadius: 9, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
      {OPTIONS.map(({ key, Icon }) => {
        const active = theme === key
        return (
          <button key={key} type="button" onClick={() => setTheme(key)} aria-pressed={active} aria-label={`${key} theme`}
            style={{ display: "grid", placeItems: "center", width: 26, height: 26, borderRadius: 6, cursor: "pointer", border: "none",
              background: active ? "#1D9E75" : "transparent", color: active ? "#fff" : "rgba(255,255,255,0.55)", transition: "all .15s ease" }}>
            <Icon size={13} />
          </button>
        )
      })}
    </div>
  )
}

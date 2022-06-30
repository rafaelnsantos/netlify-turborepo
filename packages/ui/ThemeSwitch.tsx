import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light")

  return <button onClick={handleToggle}>Toggle theme</button>
}

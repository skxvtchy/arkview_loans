"use client"

import * as React from "react"

/**
 * Renders children only after the component has mounted on the client.
 * Use this to avoid hydration mismatches when the server and client would
 * render different output (e.g. Radix UI auto-generated IDs, or useIsMobile).
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <>{fallback}</>
  return <>{children}</>
}

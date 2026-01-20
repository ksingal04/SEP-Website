import { useEffect, useRef, useState } from "react"

export function ScrollVelocityContainer({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function ScrollVelocityRow({ baseVelocity = 5, direction = 1, children, className }) {
  const containerRef = useRef(null)
  const animationFrameRef = useRef(null)
  const positionRef = useRef(0)
  const lastScrollYRef = useRef(window.scrollY)
  const lastTimeRef = useRef(Date.now())
  const scrollVelocityRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Track scroll velocity
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const timeDelta = Math.max(currentTime - lastTimeRef.current, 1)
      
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current)
      scrollVelocityRef.current = (scrollDelta / timeDelta) * 16 // Normalize to ~60fps
      
      lastScrollYRef.current = currentScrollY
      lastTimeRef.current = currentTime
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const animate = () => {
      // Calculate animation velocity based on scroll speed
      const dynamicVelocity = baseVelocity + scrollVelocityRef.current * 0.3
      const clampedVelocity = Math.min(Math.max(dynamicVelocity, baseVelocity * 0.5), baseVelocity * 3)
      
      // Update position
      const directionMultiplier = direction === 1 ? 1 : -1
      positionRef.current += clampedVelocity * directionMultiplier * 0.1
      
      // Get the width of one set of children for seamless loop
      const firstChild = container.firstElementChild
      if (firstChild) {
        const childWidth = firstChild.offsetWidth
        // Reset position when it exceeds one set's width (seamless loop)
        if (direction === 1 && positionRef.current <= -childWidth) {
          positionRef.current += childWidth
        } else if (direction === -1 && positionRef.current >= childWidth) {
          positionRef.current -= childWidth
        }
      }
      
      // Apply transform
      container.style.transform = `translateX(${positionRef.current}px)`
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [baseVelocity, direction])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        willChange: "transform",
      }}
    >
      <div style={{ display: "inline-flex" }}>
        {children}
      </div>
      <div style={{ display: "inline-flex" }}>
        {children}
      </div>
    </div>
  )
}

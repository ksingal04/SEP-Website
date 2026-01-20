import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

const iPadScroll = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // 3D rotation - starts tilted, ends front-facing
  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0])
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 0])
  
  // Scale - starts smaller, grows to full size
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.05])
  
  // Translate - moves forward as it rotates
  const translateZ = useTransform(scrollYProgress, [0, 1], [-100, 0])
  
  // Screen content pop-out (moderate, mid-scroll) - More dramatic
  const screenScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 1.5, 1.5])
  const screenTranslateZ = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 60, 60])
  const screenTranslateY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, -30, -30])
  
  // Dynamic shadow intensity based on pop-out
  const shadowIntensity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 0.5, 0.5])
  const shadowBlur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 40, 40])
  const shadowSpread = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 10, 10])
  
  // Create dynamic shadow filter
  const shadowFilter = useMotionTemplate`drop-shadow(0 ${shadowBlur}px ${shadowSpread}px rgba(0, 0, 0, ${shadowIntensity}))`

  return (
    <section 
      ref={containerRef}
      className="relative h-[120vh] bg-black flex items-center justify-center overflow-visible"
    >
      <div className="relative w-full max-w-4xl mx-auto px-4 overflow-visible">
        <motion.div
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="relative overflow-visible"
        >
          {/* iPad Frame */}
          <div className="relative overflow-visible">
            {/* Outer Bezel - Dark metallic gradient */}
            <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl border border-gray-700 overflow-visible">
              {/* Inner Bezel */}
              <div className="rounded-[2rem] bg-black p-2 overflow-visible relative">
                {/* Screen Container - overflow-visible to allow breakout, no rounded corners to prevent clipping */}
                <div className="relative overflow-visible bg-black" style={{ borderRadius: '1.5rem' }}>
                  {/* Screen Content with Pop Effect - Positioned to break out */}
                  <motion.div
                    style={{
                      scale: screenScale,
                      translateZ: screenTranslateZ,
                      translateY: screenTranslateY,
                      transformStyle: "preserve-3d",
                      zIndex: 50,
                      position: "relative",
                      willChange: "transform",
                    }}
                    className="relative w-full aspect-[4/3] origin-center"
                  >
                    <motion.div
                      style={{
                        filter: shadowFilter,
                      }}
                      className="relative w-full h-full"
                    >
                      <img
                        src="/assets/RecruitmentPage/Spring2026RecruitmentTheme/TabletRecruitmentPage.jpg"
                        alt="Spring Rush Design"
                        className="w-full h-full object-contain"
                        style={{
                          willChange: "transform",
                        }}
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl">Spring Rush Design</div>'
                        }}
                      />
                    </motion.div>
                    
                    {/* Enhanced glow effect that scales with pop-out */}
                    <motion.div 
                      style={{
                        opacity: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 0.2, 0.4, 0.4]),
                      }}
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none"
                    />
                  </motion.div>
                  
                  {/* Screen Reflection - Behind popped content */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"
                    style={{ zIndex: 1, borderRadius: '1.5rem' }}
                  />
                </div>
                
                {/* Home Indicator - Above frame */}
                <div 
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"
                  style={{ zIndex: 20 }}
                />
              </div>
            </div>
            
            {/* Shadow underneath for depth */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-black/50 blur-3xl rounded-full" style={{ zIndex: 0 }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default iPadScroll

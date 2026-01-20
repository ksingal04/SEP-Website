import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function MovingBorder({
  children,
  borderRadius = "1.5rem",
  className,
  containerClassName,
  ...otherProps
}) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setDimensions({
        width: container.offsetWidth,
        height: container.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate star positions around the perimeter
  const numStars = 24;
  const stars = Array.from({ length: numStars }, (_, i) => {
    const position = i / numStars;
    const perimeter = 2 * (dimensions.width + dimensions.height);
    const currentPos = position * perimeter;

    let x = 0;
    let y = 0;

    // Top edge
    if (currentPos < dimensions.width) {
      x = currentPos;
      y = 0;
    }
    // Right edge
    else if (currentPos < dimensions.width + dimensions.height) {
      x = dimensions.width;
      y = currentPos - dimensions.width;
    }
    // Bottom edge
    else if (currentPos < 2 * dimensions.width + dimensions.height) {
      x = dimensions.width - (currentPos - dimensions.width - dimensions.height);
      y = dimensions.height;
    }
    // Left edge
    else {
      x = 0;
      y = dimensions.height - (currentPos - 2 * dimensions.width - dimensions.height);
    }

    return {
      id: i,
      x,
      y,
      delay: i * 0.15,
      size: Math.random() * 3 + 3, // Random size between 3-6px
    };
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-visible rounded-3xl border-2 border-primary-navy/20",
        containerClassName
      )}
      style={{
        borderRadius,
      }}
      {...otherProps}
    >
      {/* Animated Stars around the border */}
      {dimensions.width > 0 && dimensions.height > 0 && stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 1, 0],
            scale: [0, 1.2, 1, 1.2, 0],
            rotate: 360,
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent-blue drop-shadow-lg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}

      {/* Card Content */}
      <div
        className={cn(
          "relative z-10 flex h-full w-full flex-col bg-white/95 backdrop-blur-sm overflow-hidden",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} - 2px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

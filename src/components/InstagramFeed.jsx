import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&q=80",
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&q=80",
  // Add your own images here later
];

export default function InstagramFeed() {
  return (
    <div className="w-full py-10 overflow-hidden bg-white">
      {/* CSS Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>

      {/* The Scrolling Track */}
      {/* We render the images TWICE inside a flex container that is wide enough to hold them. */}
      {/* The animation moves it -50% (exactly half way) and then snaps back to 0 instantly, creating the illusion of infinity. */}
      
      <div className="flex w-max animate-scroll">
        {/* Set 1 */}
        <div className="flex gap-4 px-2">
          {images.map((src, i) => (
            <img 
              key={`set1-${i}`} 
              src={src} 
              alt="Instagram" 
              className="h-64 w-64 object-cover rounded-2xl shadow-md pointer-events-none"
            />
          ))}
        </div>
        {/* Set 2 (Duplicate for loop) */}
        <div className="flex gap-4 px-2">
          {images.map((src, i) => (
            <img 
              key={`set2-${i}`} 
              src={src} 
              alt="Instagram" 
              className="h-64 w-64 object-cover rounded-2xl shadow-md pointer-events-none"
            />
          ))}
        </div>
        {/* Set 3 (Safety buffer for ultra-wide screens) */}
        <div className="flex gap-4 px-2">
          {images.map((src, i) => (
            <img 
              key={`set3-${i}`} 
              src={src} 
              alt="Instagram" 
              className="h-64 w-64 object-cover rounded-2xl shadow-md pointer-events-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

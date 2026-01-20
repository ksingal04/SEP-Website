const InfiniteCarousel = () => {
  // Placeholder images - replace with actual image paths
  const images = [
    '/carousel-1.jpg',
    '/carousel-2.jpg',
    '/carousel-3.jpg',
    '/carousel-4.jpg',
    '/carousel-5.jpg',
    '/carousel-6.jpg',
  ]

  return (
    <section className="my-12 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="flex gap-4 animate-scroll">
            {/* Duplicate images multiple times for seamless infinite loop */}
            {[...images, ...images, ...images].map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-gray-200"
              >
                <img
                  src={img}
                  alt={`Carousel image ${(idx % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-400', 'to-purple-500')
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}

export default InfiniteCarousel

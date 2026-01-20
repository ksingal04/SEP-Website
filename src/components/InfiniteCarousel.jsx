const InfiniteCarousel = () => {
  // Images from InfiniteLoop1 folder
  const images = [
    '/assets/Home page/InfiniteLoop1/ArjunAndPolina.jpeg',
    '/assets/Home page/InfiniteLoop1/CandidGroupPhoto.jpeg',
    '/assets/Home page/InfiniteLoop1/GroupPhoto.jpeg',
    '/assets/Home page/InfiniteLoop1/SaasnaAndKabir.jpeg',
    '/assets/Home page/InfiniteLoop1/SideGroupPhoto.jpeg',
    '/assets/Home page/InfiniteLoop1/Social.jpeg',
    '/assets/Home page/InfiniteLoop1/Social1.jpeg',
  ]

  return (
    <section className="my-12 bg-black overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div className="relative w-full">
        <div className="flex gap-4 animate-scroll">
          {/* Duplicate images multiple times for seamless infinite loop */}
          {[...images, ...images, ...images, ...images].map((img, idx) => (
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
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 4));
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 50s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}

export default InfiniteCarousel

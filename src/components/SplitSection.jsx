import { useState } from 'react'
import { MovingBorder } from './ui/moving-border'

const HoverCard = ({ title, description, image, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative w-full h-[600px] rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image - Fades in on hover */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Moving Border Wrapper */}
      <MovingBorder
        borderRadius="1.5rem"
        duration={3000}
        rx={24}
        ry={24}
        className="overflow-hidden bg-transparent"
        containerClassName="absolute inset-0"
      >
        {/* Dark Background (Default) with backdrop blur */}
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-500 z-0 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ borderRadius: 'calc(1.5rem - 2px)' }}
        ></div>

        {/* Content Container - Flex column with space-between to pin button to bottom */}
        <div className="relative z-10 h-full flex flex-col p-12">
        {/* Top Section: Title and Description */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Title - Always visible, changes color on hover - Bolder and Darker */}
          <h2
            className={`text-4xl md:text-5xl font-black mb-6 transition-colors duration-500 ${
              isHovered ? 'text-white' : 'text-white'
            }`}
          >
            {title}
          </h2>

          {/* Description - Fades out and moves down on hover - Medium weight for better readability */}
          <p
            className={`text-lg leading-relaxed mb-8 font-semibold text-neutral-200 transition-all duration-500 ${
              isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {description}
          </p>
        </div>

        {/* Button - Always visible, pinned to bottom, style changes on hover */}
        <div className="mt-auto pt-6 pb-4">
          <button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 ${
              isHovered
                ? 'bg-white text-primary-navy hover:bg-opacity-90'
                : 'bg-primary-navy text-white hover:bg-opacity-90'
            }`}
          >
            {buttonText}
          </button>
        </div>
        </div>
      </MovingBorder>
    </div>
  )
}

const SplitSection = () => {
  const recruitmentData = {
    title: 'Our Recruitment',
    description:
      "Sigma Eta Pi's recruitment process is designed to identify ambitious, values-driven students who are passionate about entrepreneurship, leadership, and innovation. Our rush experience combines professional, social, and interactive events that allow potential members to authentically connect with our brotherhood and mission. Through networking, collaborative challenges, and personal engagement, candidates gain insight into our culture, expectations, and long-term vision.",
    image: '/recruitment-image.jpg',
    buttonText: 'Learn More',
  }

  const alumniData = {
    title: 'Our Alumni',
    description:
      'Sigma Eta Pi alumni continue to exemplify entrepreneurial leadership across a wide range of industries and ventures. Our alumni network provides mentorship, career guidance, and professional opportunities that support members long after graduation. Through continued engagement, alumni play a vital role in strengthening the fraternity\'s legacy and expanding its impact.',
    image: '/alumni-image.jpg',
    buttonText: 'Learn More',
  }

  return (
    <section className="py-20 pb-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <HoverCard {...recruitmentData} />
          <HoverCard {...alumniData} />
        </div>
      </div>
    </section>
  )
}

export default SplitSection

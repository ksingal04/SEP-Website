const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-primary-navy mb-6">
          About Sigma Eta Pi
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8 font-medium">
          Sigma Eta Pi at Indiana University is a co-ed professional entrepreneurship fraternity dedicated to innovation, professional development, and community. It serves as a hub for ambitious students across business and technology disciplines who are driven to build, lead, and create meaningful, lasting impact through unconventional career paths.
        </p>
        <button className="bg-primary-navy text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default AboutSection

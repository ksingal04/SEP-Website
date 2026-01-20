const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Home page/Hero Section Picture/SEPgroupPhoto.jpeg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight">
          Sigma Eta Pi
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
          Discovery. Drive. Impact.
        </p>
      </div>
    </section>
  )
}

export default HeroSection

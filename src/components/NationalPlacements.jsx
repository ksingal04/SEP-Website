import { LogoLoop } from './LogoLoop'

const NationalPlacements = () => {
  const companies = [
    { src: "/assets/Home page/LogoLoop/google.svg", alt: "Google" },
    { src: "/assets/Home page/LogoLoop/microsoft.svg", alt: "Microsoft" },
    { src: "/assets/Home page/LogoLoop/Amazon.svg", alt: "Amazon" },
    { src: "/assets/Home page/LogoLoop/meta.svg", alt: "Meta" },
    { src: "/assets/Home page/LogoLoop/Tesla.svg", alt: "Tesla" },
    { src: "/assets/Home page/LogoLoop/spacex.svg", alt: "SpaceX" },
    { src: "/assets/Home page/LogoLoop/Openai.svg", alt: "OpenAI" },
    { src: "/assets/Home page/LogoLoop/stripe.svg", alt: "Stripe" }
  ]

  return (
    <section className="py-16 pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Where SEP Alumni Work
        </h2>
      </div>
      <div className="w-screen overflow-hidden relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <LogoLoop
          logos={companies}
          speed={80}
          direction="left"
          scaleOnHover={true}
          logoHeight={48}
          fadeOut={false}
          ariaLabel="National SEP Alumni Network companies"
        />
      </div>
    </section>
  )
}

export default NationalPlacements

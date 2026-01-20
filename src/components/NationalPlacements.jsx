import { LogoLoop } from './LogoLoop'

const NationalPlacements = () => {
  const companies = [
    { src: "https://logo.clearbit.com/netflix.com", alt: "Netflix" },
    { src: "https://logo.clearbit.com/google.com", alt: "Google" },
    { src: "https://logo.clearbit.com/meta.com", alt: "Meta" },
    { src: "https://logo.clearbit.com/uber.com", alt: "Uber" },
    { src: "https://logo.clearbit.com/airbnb.com", alt: "Airbnb" },
    { src: "https://logo.clearbit.com/stripe.com", alt: "Stripe" },
    { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft" },
    { src: "https://logo.clearbit.com/amazon.com", alt: "Amazon" },
    { src: "https://logo.clearbit.com/tesla.com", alt: "Tesla" },
    { src: "https://logo.clearbit.com/spacex.com", alt: "SpaceX" }
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-primary-navy mb-12">
          Where SEP Alumni Work
        </h2>
        <LogoLoop
          logos={companies}
          speed={80}
          direction="left"
          scaleOnHover={true}
          logoHeight={45}
          fadeOut={true}
          ariaLabel="National SEP Alumni Network companies"
        />
      </div>
    </section>
  )
}

export default NationalPlacements

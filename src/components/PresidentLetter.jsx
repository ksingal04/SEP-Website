const PresidentLetter = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/assets/SharvaniPresident.JPG"
              alt="Sharvani Patil - President"
              className="w-full h-auto rounded-3xl object-cover"
            />
            <p className="text-white font-semibold mt-4 text-lg">
              Sharvani Patil - President
            </p>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-6 text-neutral-200 text-lg leading-relaxed">
              <p>
                Sigma Eta Pi was founded to create a space that celebrates thinking outside the box and makes room for you instead of asking you to fit a mold. Our national organization is rooted in entrepreneurial thinking and doing things differently, a spirit we are proud to bring to Indiana University.
              </p>
              <p>
                I was inspired to start this chapter after seeing a gap for students with unique and non-linear career interests, especially those drawn to interdisciplinary and creative paths. Sigma Eta Pi exists to support those who want to explore, build, and design their own trajectories.
              </p>
              <p>
                Our founding principles of discovery, drive, and impact will allow our future brothers to reflect on their personal and professional selves, learn how to stand out as a professional, and create impact and change in spaces they care about.
              </p>
              <p>
                Watching this vision take shape through our founding class has been incredibly rewarding. I am excited to introduce Sigma Eta Pi to the IU community and begin building a chapter full of individuals that reflect innovation, authenticity, and a new way of thinking.
              </p>
            </div>

            {/* Button */}
            <a
              href="/brothers"
              className="self-start mt-8 px-8 py-3 rounded-full font-semibold bg-primary-navy text-white hover:bg-opacity-90 transition-all"
            >
              Meet Our Brothers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresidentLetter

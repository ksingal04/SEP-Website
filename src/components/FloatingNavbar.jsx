import { useState, useEffect } from 'react'

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    'Home',
    'About',
    'Brothers',
    'Recruitment',
    'Alumni',
    'Partnerships',
  ]

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'top-4' : 'top-6'
      }`}
    >
      <div className="bg-black/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex items-center gap-8 border border-white/10">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/Home page/Navigation Bar/Logo.jpg"
            alt="Sigma Eta Pi Logo"
            className="h-10 w-auto object-contain bg-transparent"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const href = 
              link === 'Home' ? '/' : 
              link === 'Recruitment' ? '/recruitment' : 
              link === 'Brothers' ? '/brothers' :
              link === 'About' ? '/about' :
              link === 'Alumni' ? '/alumni' :
              `#${link.toLowerCase()}`
            return (
              <a
                key={link}
                href={href}
                className="text-white hover:text-accent-blue transition-colors text-sm font-medium"
              >
                {link}
              </a>
            )
          })}
        </div>

        {/* Contact Button */}
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all">
          Contact Us
        </button>
      </div>
    </nav>
  )
}

export default FloatingNavbar

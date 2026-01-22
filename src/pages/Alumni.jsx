import React from 'react'
import FloatingNavbar from '../components/FloatingNavbar'
import Footer from '../components/Footer'
import BlurText from '../components/ui/BlurText'

const Alumni = () => {
  return (
    <div className="min-h-screen bg-black">
      <FloatingNavbar />
      
      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-4xl mx-auto">
          <BlurText 
            text="Alumni & History" 
            className="text-5xl md:text-6xl font-bold mb-10 block text-white" 
            delay={0} 
          />
          
          <BlurText 
            text="Founded in 2010 at UCLA, Sigma Eta Pi is a co-ed professional fraternity dedicated not to setting a path for you, but to supporting you on whatever path you carve." 
            className="text-lg text-neutral-200 mb-6 block leading-relaxed" 
            delay={0.2} 
          />
          
          <BlurText 
            text="Our mission is to create environments where university students can exercise their creativity, intellect, and problem-solving skills with the support of a close-knit community. Our members have started ventures in every industry from education to technology. Every one of our members has a demonstrable passion for learning, driving change, and self-improvement, but none of them do it alone." 
            className="text-lg text-neutral-200 mb-8 block leading-relaxed" 
            delay={0.4} 
          />
          
          <BlurText 
            text="We have 11 chapters across the nation including at 6 top ten undergraduate business schools according to US News." 
            className="text-lg text-neutral-200 mb-8 block leading-relaxed font-semibold" 
            delay={0.6} 
          />
          
          <div className="space-y-4">
            <BlurText 
              text="University of California Los Angeles (UCLA) - Alpha Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={0.8} 
            />
            <BlurText 
              text="University of Southern California (USC) - Gamma Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={1.0} 
            />
            <BlurText 
              text="University of California Santa Barbara (UCSB) - Epsilon Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={1.2} 
            />
            <BlurText 
              text="University of Michigan - Zeta Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={1.4} 
            />
            <BlurText 
              text="University of Pennsylvania (UPenn) - Theta Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={1.6} 
            />
            <BlurText 
              text="University of North Carolina Chapel Hill - Iota Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={1.8} 
            />
            <BlurText 
              text="University of California Irvine (UCI) - Kappa Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={2.0} 
            />
            <BlurText 
              text="University of California San Diego - Lambda Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={2.2} 
            />
            <BlurText 
              text="Carnegie Mellon University - Mu Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={2.4} 
            />
            <BlurText 
              text="Ohio State University - Nu Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={2.6} 
            />
            <BlurText 
              text="Cal Poly San Luis Obispo - Xi Chapter" 
              className="text-lg text-neutral-200 block leading-relaxed" 
              delay={2.8} 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Alumni

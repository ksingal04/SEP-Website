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
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
            className="text-lg text-gray-300 mb-6 block leading-relaxed" 
            delay={0.2} 
          />
          
          <BlurText 
            text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." 
            className="text-lg text-gray-300 mb-6 block leading-relaxed" 
            delay={0.4} 
          />
          
          <BlurText 
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." 
            className="text-lg text-gray-300 block leading-relaxed" 
            delay={0.6} 
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Alumni

import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import { CometCard } from '../components/ui/comet-card';
import './Brothers.css';

const brothers = [
  { name: "Alaina Doran", role: "Co-Director of Media", image: "/assets/BrothersPage/Alaina Doran/Alaina.JPG" },
  { name: "Aman Mishra", role: "General Member", image: "/assets/BrothersPage/Aman/Aman.JPG" },
  { name: "Arjun Premnath", role: "Co-Director of Recruitment", image: "/assets/BrothersPage/Arjun/Arjun.JPG" },
  { name: "Cate MacKendree", role: "Director of Wellness", image: "/assets/BrothersPage/Cate/Cate.jpg" },
  { name: "Finnbar O'Halloran", role: "General Member", image: "/assets/BrothersPage/Finn/Finn.jpg" },
  { name: "Harini Vinod", role: "Director of Professional Affairs", image: "/assets/BrothersPage/Harini/DSC07784_Original.JPG" },
  { name: "Ian Ives", role: "Director of Finance", image: "/assets/BrothersPage/Ian/Ian.jpg" },
  { name: "Kabir Singal", role: "Director of Technology", image: "/assets/BrothersPage/Kabir/kabir.jpg" },
  { name: "Kate Walsh", role: "General Member", image: "/assets/BrothersPage/Kate/DSC07828_Original.JPG" },
  { name: "Lauren Seach", role: "Upperclassman Mentor", image: "/assets/BrothersPage/Lauren/Lauren.jpg" },
  { name: "Linnea Paulsson", role: "Director of Marketing", image: "/assets/BrothersPage/Linnea/Linnea.JPG" },
  { name: "Nolan Murphy", role: "Co-Director of Media", image: "/assets/BrothersPage/Nolan/Nolan.JPG" },
  { name: "Paarth Tyagi", role: "General Member", image: "/assets/BrothersPage/Paarth/Paarth.jpg" },
  { name: "Polina Oleynikova", role: "Co-Director of Recruitment", image: "/assets/BrothersPage/Polina/polina.JPG" },
  { name: "Saasna Jeyaraman", role: "Director of Operations", image: "/assets/BrothersPage/Saasna/Saasna.JPG" },
  { name: "Sharvani Patil", role: "President", image: "/assets/BrothersPage/Sharvani/Sharvani.JPG" },
  { name: "Sohum Jain", role: "General Member", image: "/assets/BrothersPage/Sohum/Sohum.JPG" },
  { name: "Sophie Millspaugh", role: "Director of Corporate Relations", image: "/assets/BrothersPage/Sophie/Sophie.JPG" },
  { name: "Sourish Singh", role: "Director of DEI", image: "/assets/BrothersPage/Sourish/Sourish.jpg" },
  { name: "Veer", role: "Upperclassman Mentor", image: "/assets/BrothersPage/Veer/Veer.jpg" },
  { name: "Will O'Hare", role: "General Member", image: "/assets/BrothersPage/Will/will.jpg" }
];


const Brothers = () => {
  return (
    <div className="min-h-screen bg-black">
      <FloatingNavbar />
      
      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Brothers
            </h1>
            <p className="text-lg text-white/80">
              Meet the members of Sigma Eta Pi at Indiana University
            </p>
          </div>

          {/* Brothers Grid with CometCard Effect */}
          <main className="brothers-main">
            {brothers.map((brother, index) => (
              <CometCard key={index}>
                <div 
                  className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4 h-full"
                  onClick={() => console.log(`Navigate to ${brother.name}`)}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  {/* Image Container */}
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] w-full">
                      <img
                        loading="lazy"
                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-125 saturate-100"
                        alt={brother.name}
                        src={brother.image}
                        onError={(e) => {
                          e.target.src = `https://picsum.photos/id/${index + 100}/300/400`;
                        }}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }} 
                      />
                    </div>
                  </div>
                  
                  {/* Text Content (Name & Role) */}
                  <div className="mt-4 flex flex-col items-center justify-center p-2 text-white">
                    <h3 className="text-lg font-bold tracking-tight text-center">{brother.name}</h3>
                    <p className="text-xs text-gray-400 opacity-70 mt-1 text-center">{brother.role}</p>
                  </div>
                </div>
              </CometCard>
            ))}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brothers;

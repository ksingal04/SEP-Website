import React from 'react';
import FloatingNavbar from '../components/FloatingNavbar';
import Footer from '../components/Footer';
import { CometCard } from '../components/ui/comet-card';
import './Brothers.css';

const brothers = [
  { name: "Alaina Doran", position: "Co-Director of Media" },
  { name: "Aman Mishra", position: "General Member" },
  { name: "Aneesha Addepalli", position: "Director of Social Affairs" },
  { name: "Arjun Premnath", position: "Co-Director of Recruitment" },
  { name: "Cate MacKendree", position: "Director of Wellness" },
  { name: "Finnbar O'Halloran", position: "General Member" },
  { name: "Harini Vinod", position: "Director of Professional Affairs" },
  { name: "Ian Ives", position: "Director of Finance" },
  { name: "Kabir Singal", position: "Director of Technology" },
  { name: "Kate Walsh", position: "General Member" },
  { name: "Linnea Paulsson", position: "Director of Marketing" },
  { name: "Maahi Wason", position: "General Member" },
  { name: "Mishti Shah", position: "Director of Merchandise" },
  { name: "Nolan Murphy", position: "Co-Director of Media" },
  { name: "Paarth Tyagi", position: "General Member" },
  { name: "Polina Oleynikova", position: "Co-Director of Recruitment" },
  { name: "Saasna Jeyaraman", position: "Director of Operations" },
  { name: "Sharvani Patil", position: "President" },
  { name: "Sohum Jain", position: "Director of Alumni Engagement" },
  { name: "Sophie Millspaugh", position: "Director of Corporate Relations" },
  { name: "Sourish Singh", position: "Director of DEI" },
  { name: "Trisha Mehta", position: "General Member" },
  { name: "Will O'Hare", position: "General Member" }
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
                  className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4 h-full"
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
                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                        alt={brother.name}
                        src={brother.name === "Kabir Singal" 
                          ? "/assets/BrothersPage/KabirSingal/KabirSingalDofTechjpg.jpg"
                          : `https://picsum.photos/300/400?random=${index}`
                        }
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
                  
                  {/* Text Content (Name & Position) */}
                  <div className="mt-4 flex flex-col items-center justify-center p-2 font-mono text-white">
                    <h3 className="text-lg font-bold tracking-tight text-center">{brother.name}</h3>
                    <p className="text-xs text-gray-400 opacity-70 mt-1 text-center">{brother.position}</p>
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

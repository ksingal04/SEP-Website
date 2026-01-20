import React from "react";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { Timeline } from "../components/ui/timeline";

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-black">
      <FloatingNavbar />
      
      {/* Hero Section with Container Scroll Animation */}
      <div className="flex flex-col overflow-hidden bg-black">
        <ContainerScroll
          titleComponent={<></>}
        >
          <img
            src="/assets/RecruitmentPage/Spring2026RecruitmentTheme/TabletRecruitmentPage.jpg"
            alt="Recruitment Hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full w-full"
            draggable={false}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop";
            }}
          />
        </ContainerScroll>
      </div>

      {/* Timeline Section */}
      <RecruitmentTimeline />
      
      <Footer />
    </div>
  );
};

export function RecruitmentTimeline() {
  const data = [
    {
      title: "Meet the Chapter",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-extrabold leading-relaxed">
            Come hang out with us and see if we are a good fit. This is your chance to meet current members, learn about our values, and ask questions. Network with brothers and discover what makes Sigma Eta Pi special.
          </p>
        </div>
      ),
    },
    {
      title: "Open Rush",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-extrabold leading-relaxed">
            Professional Night. Bring your resume and show us your drive. Network with brothers and showcase your entrepreneurial spirit. This is your opportunity to demonstrate your passion and connect with like-minded individuals.
          </p>
        </div>
      ),
    },
    {
      title: "Invite Only",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-extrabold leading-relaxed">
            Selected candidates are invited to exclusive events. This is where deeper connections are formed and mutual fit is assessed. Experience our community firsthand and see if Sigma Eta Pi is the right fit for you.
          </p>
        </div>
      ),
    },
    {
      title: "Bid Day",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-extrabold leading-relaxed">
            Welcome to the family. Congratulations on joining Sigma Eta Pi! This marks the beginning of your journey with us. Celebrate with your new brothers and embark on an incredible experience together.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Recruitment;

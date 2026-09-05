import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ProblemSection from "@/components/ProblemSection";
import AboutIntro from "@/components/AboutIntro";
import TeamProfiles from "@/components/TeamProfiles";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <TrustBar />
      <Services />
      <ProblemSection />
      <AboutIntro />
      <TeamProfiles />
    </div>
  );
}

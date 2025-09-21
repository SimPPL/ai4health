import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectCards from "@/components/project-cards";
import FAQSection from "@/components/faq-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectCards />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*<FAQSection />*/}
      <Footer />
    </main>
  );
}

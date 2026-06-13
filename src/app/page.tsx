import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeatureCarousel from "@/components/FeatureCarousel";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import AppPreview from "@/components/AppPreview";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeatureCarousel />
        <HowItWorks />
        <AppShowcase />
        <AppPreview />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  );
}

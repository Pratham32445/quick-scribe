
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import UseCases from "@/components/home/UseCases";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <UseCases />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

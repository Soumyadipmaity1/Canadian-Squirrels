import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/Home/AboutUs";
import {BentoBox} from "@/components/Home/BentoBox";
import Home from "@/components/Home/HeroSection";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";
import {Blob} from "@/constants/Icons";
import Engage from "@/components/Home/Engage";

function Page() {
  return (
    <div className="scrollbar-hide cursor-default">
      <div className="w-full relative overflow-hidden">
        <div className="absolute md:hidden -translate-x-1/2 -top-52 z-10">
          <Blob variant="violet"/>
        </div>
        <div className="absolute -right-10 translate-x-1/2 -top-80 z-10 md:hidden">
          <Blob variant="yellow"/>
        </div>
        <Home/>
        <div className="hidden md:block w-full h-[700px]">
          <Engage/>
        </div>
        <AboutUs/>
      </div>
      <BentoBox/>
      <Testimonials/>
      <ContactUs/>
    </div>
  );
}

export default Page;

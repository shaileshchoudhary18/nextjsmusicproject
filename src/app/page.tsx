import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { main } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <h1 className=" text-2xl text-center">Hello  world!</h1>
    <HeroSection />
    <FeaturedCourses />
    </main>
  );
}

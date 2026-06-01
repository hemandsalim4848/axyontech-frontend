import Image from 'next/image';
import HomeBanner from './components/HomeBanner';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import WhyUs from './components/WhyUs';
import BrandShowcase from './components/BrandShowcase';
import { ScrollReveal } from "./components/ScrollReveal";
import FadeSection from "./components/FadeSection";
import AboutSection from './components/AboutSection';
// This is your "Database" for now. You can add more later!
const products = [
  { id: 1, name: "4K Curved Monitor", category: "Monitors", price: "View Specs", img: "https://via.placeholder.com/300" },
  { id: 2, name: "75\" Interactive Panel", category: "iFP", price: "View Specs", img: "https://via.placeholder.com/300" },
  { id: 3, name: "850W Modular PSU", category: "PSU", price: "View Specs", img: "https://via.placeholder.com/300" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <ScrollReveal>
        <FadeSection>
        <HomeBanner />
      </FadeSection>
      {/* <FadeSection>
         <BrandShowcase />
      </FadeSection> */}
      <FadeSection>
        <CategoryGrid />
      </FadeSection>
     
      <FadeSection>
        {/* <FeaturedProducts /> */}
        <AboutSection/>
      </FadeSection>
       {/* <FadeSection>
        <WhyUs />
      </FadeSection> */}
      


        </ScrollReveal>
      
    </main>
  );
}
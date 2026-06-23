import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { MissionSection } from '@/components/sections/mission-section';
import { BusinessSection } from '@/components/sections/business-section';
import { CultureSection, JoinSection } from '@/components/sections/culture-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <BusinessSection />
        <CultureSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}

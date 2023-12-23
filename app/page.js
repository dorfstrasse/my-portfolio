import Image from 'next/image'
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#232323]">
      <div class="container mx-auto">
        <HeroSection />
      </div>
    </main>
  );
}

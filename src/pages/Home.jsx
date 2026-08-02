import Nav from '@/components/tab/Nav';
import Hero from '@/components/tab/Hero';
import Problem from '@/components/tab/Problem';
import Architecture from '@/components/tab/Architecture';
import Capabilities from '@/components/tab/Capabilities';
import Differentiator from '@/components/tab/Differentiator';
import UseCases from '@/components/tab/UseCases';
import HowItWorks from '@/components/tab/HowItWorks';
import WhyNow from '@/components/tab/WhyNow';
import Positioning from '@/components/tab/Positioning';
import Roadmap from '@/components/tab/Roadmap';
import Validation from '@/components/tab/Validation';
import Founder from '@/components/tab/Founder';
import FinalCTA from '@/components/tab/FinalCTA';
import Footer from '@/components/tab/Footer';
import CornerSummary from '@/components/tab/CornerSummary';

export default function Home() {
  return (
    <div className="min-h-screen bg-tab-base text-tab-ink">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <Capabilities />
        <Differentiator />
        <UseCases />
        <HowItWorks />
        <WhyNow />
        <Positioning />
        <Roadmap />
        <Validation />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
      <CornerSummary />
    </div>
  );
}
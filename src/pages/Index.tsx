import { useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import ProductGrid from '@/components/ProductGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner />
        <ProductGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

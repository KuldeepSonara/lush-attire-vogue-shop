import { useEffect, useState } from 'react';

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
          Lush Attire
        </h1>
        <div className="mt-6 w-12 h-0.5 bg-foreground mx-auto opacity-30"></div>
      </div>
    </div>
  );
};

export default Loader;
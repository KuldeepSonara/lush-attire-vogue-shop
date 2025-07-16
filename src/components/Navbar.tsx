import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-display text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
              Lush Attire
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/collection" 
              className={`text-sm font-light transition-colors ${
                location.pathname === '/collection' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-light transition-colors ${
                location.pathname === '/about' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 pt-8">
              <Link 
                to="/collection" 
                className="text-lg font-light text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Collection
              </Link>
              <Link 
                to="/about" 
                className="text-lg font-light text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About', 'Careers', 'Press'],
    Support: ['Contact', 'Shipping', 'Returns', 'Size Guide'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookies']
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container-luxury py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight mb-6">
              Lush Attire
            </h3>
            <p className="text-base font-light text-muted-foreground leading-relaxed max-w-md mb-8">
              Minimal luxury fashion for the modern individual. 
              Curated collections that transcend trends and embrace timeless elegance.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-border hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border hover:border-foreground transition-colors duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-sm tracking-wide uppercase mb-6 text-foreground">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border mt-16 pt-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0">
              <h4 className="font-display text-xl font-medium mb-2">
                Stay Updated
              </h4>
              <p className="text-sm font-light text-muted-foreground">
                Subscribe to receive updates on new collections and exclusive offers.
              </p>
            </div>
            
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-minimal flex-1 mr-4"
              />
              <button className="btn-minimal whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm font-light text-muted-foreground">
            © {currentYear} Lush Attire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
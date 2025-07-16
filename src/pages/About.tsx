import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-luxury text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="font-display text-hero font-semibold tracking-tight leading-none">
              About
              <br />
              <span className="text-muted-foreground">Lush Attire</span>
            </h1>
            
            <p className="text-large font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe in the power of simplicity. Every piece in our collection 
              is thoughtfully designed to transcend trends and embrace timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-luxury">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-display font-semibold tracking-tight">
                Our Story
              </h2>
              
              <div className="space-y-6 text-large font-light text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Lush Attire emerged from a simple vision: to create 
                  clothing that speaks to the modern minimalist. In a world of fast fashion 
                  and fleeting trends, we chose a different path.
                </p>
                
                <p>
                  Each piece in our collection is carefully crafted using premium materials 
                  sourced from ethical suppliers. We believe that quality should never be 
                  compromised, and that great design should stand the test of time.
                </p>
                
                <p>
                  Our commitment extends beyond fashion. We're dedicated to sustainable 
                  practices, fair manufacturing, and creating pieces that our customers 
                  will treasure for years to come.
                </p>
              </div>
            </div>
            
            <div className="aspect-[4/5] bg-muted/30 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                alt="Our atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-luxury bg-muted/30">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-display font-semibold tracking-tight mb-6">
              Our Values
            </h2>
            <p className="text-large font-light text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <h3 className="font-display text-xl font-medium tracking-tight">
                Quality First
              </h3>
              <p className="font-light text-muted-foreground leading-relaxed">
                We use only the finest materials and work with skilled artisans 
                to ensure every piece meets our exacting standards.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="font-display text-xl font-medium tracking-tight">
                Sustainable Practice
              </h3>
              <p className="font-light text-muted-foreground leading-relaxed">
                From sourcing to production, we prioritize environmental 
                responsibility and ethical manufacturing processes.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="font-display text-xl font-medium tracking-tight">
                Timeless Design
              </h3>
              <p className="font-light text-muted-foreground leading-relaxed">
                Our designs transcend seasonal trends, focusing on silhouettes 
                and details that will remain relevant for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-luxury">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-display font-semibold tracking-tight mb-6">
              Meet Our Team
            </h2>
            <p className="text-large font-light text-muted-foreground max-w-2xl mx-auto">
              The creative minds behind Lush Attire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-48 h-48 mx-auto bg-muted/30 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Creative Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  Alex Chen
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Creative Director
                </p>
                <p className="mt-4 font-light text-muted-foreground leading-relaxed">
                  With over a decade in fashion design, Alex brings a unique 
                  vision that balances minimalism with sophisticated details.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-48 h-48 mx-auto bg-muted/30 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Head of Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  Sarah Kim
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Head of Production
                </p>
                <p className="mt-4 font-light text-muted-foreground leading-relaxed">
                  Sarah ensures every piece meets our quality standards while 
                  maintaining our commitment to ethical production practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-luxury bg-muted/30">
        <div className="container-luxury text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-display text-display font-semibold tracking-tight">
              Join Our Journey
            </h2>
            <p className="text-large font-light text-muted-foreground leading-relaxed">
              Discover our latest collection and become part of the Lush Attire community.
            </p>
            <Button className="btn-minimal px-12">
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
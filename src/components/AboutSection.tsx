const AboutSection = () => {
  return (
    <section id="about" className="scroll-section py-luxury bg-muted/30">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-display font-semibold tracking-tight">
              Crafted for the 
              <br />
              Discerning Individual
            </h2>
            
            <div className="space-y-6 text-large font-light text-muted-foreground leading-relaxed">
              <p>
                Lush Attire represents the intersection of minimal design and maximum impact. 
                Every piece in our collection is thoughtfully designed to transcend trends 
                and become an essential part of your wardrobe.
              </p>
              
              <p>
                We believe in quality over quantity, craftsmanship over mass production, 
                and timeless aesthetics over fleeting fashion statements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="font-display text-xl font-medium mb-2">Premium Materials</h3>
                <p className="text-sm font-light text-muted-foreground">
                  Sourced globally, chosen for longevity and comfort.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium mb-2">Ethical Production</h3>
                <p className="text-sm font-light text-muted-foreground">
                  Fair wages, sustainable practices, conscious creation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-muted/50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop&crop=center"
                alt="Lush Attire craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-background border border-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
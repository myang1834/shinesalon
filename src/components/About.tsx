import { Award, Heart, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10k+", label: "Happy Clients" },
  { icon: Heart, value: "50+", label: "Expert Stylists" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-8">
              Where Beauty Meets Excellence
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Shine Salon, we believe that true beauty radiates from within. 
                Our mission is to create a sanctuary where you can escape the everyday 
                and emerge feeling refreshed, confident, and absolutely radiant.
              </p>
              <p>
                Founded with a passion for excellence, we've assembled a team of 
                talented artists who share our commitment to exceptional service and 
                stunning results. Every visit is an experience crafted just for you.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-gold" />
                    <span className="font-display text-3xl md:text-4xl font-medium text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm overflow-hidden border border-gold/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gold/40 font-display text-6xl">S</span>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-secondary to-cream-dark rounded-sm overflow-hidden border border-border">
                  <div className="w-full h-full flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-gold/30" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-gradient-to-br from-gold/10 to-secondary rounded-sm overflow-hidden border border-gold/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-gold/30" />
                  </div>
                </div>
                <div className="aspect-[4/5] bg-gradient-to-br from-cream-dark to-gold/5 rounded-sm overflow-hidden border border-border">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gold/40 font-display text-6xl">S</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

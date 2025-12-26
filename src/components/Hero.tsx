import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="block w-12 h-px bg-gold/60" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to
            </span>
            <span className="block w-12 h-px bg-gold/60" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream mb-6 animate-fade-in-up">
            Shine Salon
          </h1>

          {/* Tagline */}
          <p className="text-cream/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-1">
            Experience the art of beauty in an atmosphere of pure elegance and relaxation
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Button variant="hero" size="xl">
              Book Appointment
            </Button>
            <Button variant="elegant" size="xl" className="text-cream border-cream/30 hover:border-cream hover:text-cream">
              View Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
          <div className="flex flex-col items-center gap-2 text-cream/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-cream/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

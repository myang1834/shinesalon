import { Scissors, Sparkles, Droplets, Wind } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, coloring, and styling tailored to enhance your unique beauty",
    price: "From $75",
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facials using premium products for radiant, healthy skin",
    price: "From $95",
  },
  {
    icon: Droplets,
    title: "Nail Care",
    description: "Luxurious manicures and pedicures with exquisite attention to detail",
    price: "From $45",
  },
  {
    icon: Wind,
    title: "Blowout Bar",
    description: "Professional blowouts and styling for that perfect, polished look",
    price: "From $55",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Discover our curated selection of premium beauty services, 
            each designed to help you look and feel your absolute best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price */}
              <span className="text-gold font-medium text-sm tracking-wide">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

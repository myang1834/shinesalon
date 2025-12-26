import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Elegance Avenue", "Beverly Hills, CA 90210"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@shinesalon.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Sat: 9AM - 8PM", "Sun: 10AM - 6PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal text-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - CTA */}
          <div>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mt-4 mb-8">
              Ready to Shine?
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10 max-w-lg">
              Book your appointment today and discover the Shine Salon difference. 
              Our team of experts is ready to help you look and feel your absolute best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Book Appointment
              </Button>
              <Button 
                variant="elegant" 
                size="xl" 
                className="border-cream/30 text-cream hover:border-cream hover:text-cream"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium text-cream mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, index) => (
                  <p key={index} className="text-cream/60 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

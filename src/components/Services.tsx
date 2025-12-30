import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sparkles, Palette, Shield, Clock } from "lucide-react";

const services = [
  {
    title: "Classic Manicure",
    description: "Professional nail care with cuticle treatment, shaping, and your choice of polish",
    price: "$35",
    duration: "45 min",
    icon: Shield,
    features: ["Cuticle care", "Nail shaping", "Base & top coat", "Polish application"]
  },
  {
    title: "Gel Manicure",
    description: "Long-lasting gel polish that stays chip-free for up to 3 weeks",
    price: "$55",
    duration: "60 min",
    icon: Sparkles,
    features: ["UV gel polish", "3-week wear", "Chip resistant", "High gloss finish"],
    popular: true
  },
  {
    title: "Nail Art Design",
    description: "Custom nail art created by our talented artists to express your unique style",
    price: "$75+",
    duration: "90 min",
    icon: Palette,
    features: ["Custom designs", "Hand-painted art", "3D elements", "Unique patterns"]
  },
  {
    title: "Spa Pedicure",
    description: "Luxurious foot treatment with exfoliation, massage, and perfect polish",
    price: "$65",
    duration: "75 min",
    icon: Clock,
    features: ["Foot soak", "Exfoliation", "Massage", "Callus removal"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-[color:var(--palette-coral)]/15 text-[color:var(--palette-rose)] border-[color:var(--palette-coral)]/30">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold text-[color:var(--palette-gray)]">
            Nail Services That Transform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From classic elegance to bold artistic expressions, we offer comprehensive nail care services 
            tailored to your personal style and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`relative overflow-hidden transition-all hover:shadow-lg ${service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Looking for something specific? We also offer custom treatments and packages.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
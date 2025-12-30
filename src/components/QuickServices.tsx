import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sparkles, Heart, Star } from "lucide-react";

export function QuickServices() {
  const services = [
    {
      id: "manicure",
      title: "Manicure",
      description: "Professional nail care & styling",
      price: "From $35",
      icon: Sparkles,
      gradient: "from-[color:var(--palette-peach)] to-[color:var(--palette-coral)]",
      features: ["Shape & File", "Cuticle Care", "Polish Application"]
    },
    {
      id: "pedicure", 
      title: "Pedicure",
      description: "Relaxing foot & nail treatment",
      price: "From $45",
      icon: Heart,
      gradient: "from-[color:var(--palette-coral)] to-[color:var(--palette-rose)]",
      features: ["Foot Soak", "Exfoliation", "Massage & Polish"]
    },
    {
      id: "combo",
      title: "Mani + Pedi",
      description: "Complete nail care experience",
      price: "From $70",
      icon: Star,
      gradient: "from-[color:var(--palette-rose)] to-[color:var(--palette-mauve)]",
      features: ["Full Service", "Best Value", "2-3 Hours"],
      popular: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[color:var(--palette-cream)] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[color:var(--palette-gray)] mb-4">
            Choose Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select from our signature services designed to pamper and perfect your nails
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[color:var(--palette-rose)] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  service.popular ? 'ring-2 ring-[color:var(--palette-rose)]/20 shadow-lg' : 'hover:shadow-lg'
                }`}>
                  <div className={`h-3 bg-gradient-to-r ${service.gradient}`}></div>
                  
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.gradient} p-0.5`}>
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <IconComponent className="h-7 w-7 text-[color:var(--palette-gray)]" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[color:var(--palette-gray)] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <div className="text-2xl font-bold text-[color:var(--palette-rose)]">
                        {service.price}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 rounded-full bg-[color:var(--palette-coral)] mr-3 flex-shrink-0"></div>
                          <span className="text-[color:var(--palette-gray)]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg`}
                      size="lg"
                    >
                      Book {service.title}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? We offer personalized packages
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[color:var(--palette-rose)] text-[color:var(--palette-rose)] hover:bg-[color:var(--palette-peach)]/20"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
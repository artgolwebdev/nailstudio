import { Button } from "./ui/button";
import { Star, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-soft-pink via-cream to-argent/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm">Rated #1 Nail Studio</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-dark-brown leading-tight">
                Elevate Your
                <span className="text-primary block">Nail Game</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience luxury nail care with our expert technicians. From classic manicures to stunning nail art, 
                we create beautiful nails that make you feel confident and glamorous.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-argent text-dark-brown hover:bg-argent/10">
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Nail Designs</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633681926019-03bd9325ec20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTczMzgyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxe Nails Studio Interior"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-argent/20 rounded-2xl -z-10"></div>
            
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-dark-brown">Premium Experience</div>
                  <div className="text-sm text-muted-foreground">Luxury treatments await</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
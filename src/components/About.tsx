import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Award, Users, Heart, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Our certified nail technicians bring years of experience and ongoing training to every service."
  },
  {
    icon: Users,
    title: "Client-Centered Care",
    description: "We listen to your needs and preferences to create a personalized experience every visit."
  },
  {
    icon: Heart,
    title: "Health & Safety First",
    description: "We maintain the highest standards of cleanliness and use only premium, safe products."
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "From classic elegance to avant-garde designs, we bring your nail vision to life."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-[color:var(--palette-peach)]/20 text-[color:var(--palette-rose)] border-[color:var(--palette-coral)]/30">
                About Us
              </Badge>
              <h2 className="text-4xl font-bold text-[color:var(--palette-gray)]">
                Where Artistry Meets Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded with a passion for nail artistry and client satisfaction, Luxe Nails Studio has become 
                the premier destination for luxury nail care. Our mission is to provide exceptional service in 
                a relaxing, elegant environment where every client feels pampered and valued.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[color:var(--palette-rose)] pl-6">
                <h3 className="text-xl font-semibold text-[color:var(--palette-gray)] mb-2">Our Story</h3>
                <p className="text-muted-foreground">
                  What started as a dream to create the perfect nail salon experience has grown into a trusted 
                  studio where artistry, quality, and client care come together. Every service is designed to 
                  not just enhance your nails, but to provide a moment of luxury in your day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[color:var(--palette-peach)]/30 rounded-lg">
                  <div className="text-2xl font-bold text-[color:var(--palette-rose)] mb-1">5+</div>
                  <div className="text-sm text-[color:var(--palette-gray)]">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-[color:var(--palette-peach)]/30 rounded-lg">
                  <div className="text-2xl font-bold text-[color:var(--palette-rose)] mb-1">500+</div>
                  <div className="text-sm text-[color:var(--palette-gray)]">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623282788208-d8b90baf5e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1NzMzODI3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Spa treatment and relaxation"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[color:var(--palette-gray)] mb-4">Our Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure every client receives the exceptional 
              experience they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-[color:var(--palette-coral)]/20 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-[color:var(--palette-rose)]" />
                    </div>
                    <h4 className="text-lg font-semibold text-[color:var(--palette-gray)]">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
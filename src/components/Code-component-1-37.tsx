import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1606619353146-a7732c58345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMGhhbmRzJTIwcG9saXNofGVufDF8fHx8MTc1NzMzODI3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Classic French Manicure",
    category: "Classic",
    description: "Timeless elegance with perfect precision"
  },
  {
    image: "https://images.unsplash.com/photo-1609353864300-f19013dedb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc1NzMxNzk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Artistic Nail Design",
    category: "Nail Art",
    description: "Creative expression through beautiful nail art"
  },
  {
    image: "https://images.unsplash.com/photo-1633681926019-03bd9325ec20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTczMzgyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Studio Ambiance",
    category: "Studio",
    description: "Luxurious and relaxing environment"
  },
  {
    image: "https://images.unsplash.com/photo-1623282788208-d8b90baf5e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1NzMzODI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Spa Treatment",
    category: "Spa",
    description: "Pampering treatments for total relaxation"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Our Work
          </Badge>
          <h2 className="text-4xl font-bold text-dark-brown">
            Gallery of Beautiful Nails
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning nail designs and see the artistry that awaits you. 
            Each creation is uniquely crafted for our valued clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Badge variant="secondary" className="bg-primary text-white border-primary mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-dark-brown font-medium mb-1">Unique Designs</div>
            <div className="text-sm text-muted-foreground">New creations every month</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-dark-brown font-medium mb-1">Custom Work</div>
            <div className="text-sm text-muted-foreground">Tailored to your style</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-dark-brown font-medium mb-1">Client Rating</div>
            <div className="text-sm text-muted-foreground">Consistently excellent service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
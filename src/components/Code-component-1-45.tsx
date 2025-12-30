import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-dark-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Luxe Nails Studio</h3>
              <p className="text-gray-300">
                Your premier destination for luxury nail care and artistic nail designs. 
                Experience elegance and excellence in every service.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-primary hover:border-primary">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Classic Manicure</span></li>
              <li><span className="text-gray-300">Gel Manicure</span></li>
              <li><span className="text-gray-300">Nail Art Design</span></li>
              <li><span className="text-gray-300">Spa Pedicure</span></li>
              <li><span className="text-gray-300">Custom Treatments</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">hello@luxenails.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-300">
                  <div>123 Beauty Avenue</div>
                  <div>Downtown District</div>
                  <div>City, State 12345</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Sat: 9AM-6PM</div>
                  <div>Sun: 10AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Luxe Nails Studio. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
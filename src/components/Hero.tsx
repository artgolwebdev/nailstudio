import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Star, ArrowRight, Sparkles, Award, Clock, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { StepBookingForm } from "./StepBookingForm";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1706629503603-e47c37722776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwc2Fsb24lMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NTczMzk1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Luxury Nail Salon Interior",
    title: "Premium Experience",
    subtitle: "Luxury meets artistry"
  },
  {
    src: "https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1NzMzOTU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Professional Nail Art",
    title: "Expert Artistry",
    subtitle: "Precision in every detail"
  },
  {
    src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwZGVzaWducyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NzMzOTU3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Colorful Nail Designs",
    title: "Creative Designs",
    subtitle: "Express your style"
  }
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[color:var(--palette-peach)] via-[color:var(--palette-cream)] to-[color:var(--palette-coral)]/20"
          animate={{
            background: [
              "linear-gradient(135deg, var(--palette-peach), var(--palette-cream), rgba(242,165,160,0.2))",
              "linear-gradient(135deg, var(--palette-coral), var(--palette-peach), rgba(199,117,139,0.15))",
              "linear-gradient(135deg, var(--palette-peach), var(--palette-cream), rgba(242,165,160,0.2))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? 'from-[color:var(--palette-coral)] to-[color:var(--palette-rose)]' :
              i % 3 === 1 ? 'from-[color:var(--palette-peach)] to-[color:var(--palette-coral)]' :
              'from-[color:var(--palette-rose)] to-[color:var(--palette-mauve)]'
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 z-10 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Enhanced Rating Badge */}
              <motion.div 
                className="inline-flex items-center space-x-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-[color:var(--palette-coral)]/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.4 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star className="h-4 w-4 fill-current text-[color:var(--palette-mauve)]" />
                    </motion.div>
                  ))}
                </div>
                <motion.span 
                  className="text-sm font-medium text-[color:var(--palette-gray)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Rated #1 Nail Studio
                </motion.span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  <Award className="h-4 w-4 text-[color:var(--palette-rose)]" />
                </motion.div>
              </motion.div>
              
              {/* Enhanced Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <motion.span 
                    className="block text-[color:var(--palette-gray)]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Transform Your
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-[color:var(--palette-coral)] via-[color:var(--palette-rose)] to-[color:var(--palette-mauve)] bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Nail Story
                  </motion.span>
                </h1>
              </motion.div>
              
              {/* Enhanced Description */}
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Where artistry meets luxury. Our expert nail technicians create stunning designs 
                that express your unique style and personality. From classic elegance to bold creativity.
              </motion.p>
            </div>

            {/* Enhanced Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[color:var(--palette-coral)] to-[color:var(--palette-rose)] hover:from-[color:var(--palette-coral)]/90 hover:to-[color:var(--palette-rose)]/90 group shadow-xl"
                  onClick={() => setShowBookingForm(true)}
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Book Your Experience
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[color:var(--palette-mauve)] text-[color:var(--palette-gray)] hover:bg-[color:var(--palette-peach)]/30 shadow-lg backdrop-blur-sm"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  View Availability
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats with animations */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {[
                { number: "500+", label: "Happy Clients", gradient: "from-[color:var(--palette-coral)] to-[color:var(--palette-mauve)]" },
                { number: "5+", label: "Years Excellence", gradient: "from-[color:var(--palette-rose)] to-[color:var(--palette-mauve)]" },
                { number: "100+", label: "Art Designs", gradient: "from-[color:var(--palette-coral)] to-[color:var(--palette-rose)]" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-[color:var(--palette-gray)] font-medium group-hover:text-[color:var(--palette-rose)] transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Image Slider & Booking Form */}
          <motion.div 
            className="relative space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Image Slider */}
            <div className="relative">
              <motion.div
                className="overflow-hidden rounded-3xl shadow-2xl relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <ImageWithFallback
                      src={heroImages[currentImage].src}
                      alt={heroImages[currentImage].alt}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Image Overlay Text */}
                    <motion.div 
                      className="absolute bottom-6 left-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-1">{heroImages[currentImage].title}</h3>
                      <p className="text-lg opacity-90">{heroImages[currentImage].subtitle}</p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    onClick={togglePlayPause}
                    className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </motion.button>
                </div>

                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <motion.button
                    onClick={prevImage}
                    className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Background Elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[color:var(--palette-coral)]/20 via-[color:var(--palette-peach)]/15 to-[color:var(--palette-mauve)]/15 rounded-3xl -z-10"></div>
            </div>

            {/* Floating Enhanced Cards */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[color:var(--palette-coral)]/15"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[color:var(--palette-peach)]/40 to-[color:var(--palette-coral)]/30 rounded-xl flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="h-6 w-6 text-[color:var(--palette-rose)]" />
                </motion.div>
                <div>
                  <div className="font-semibold text-[color:var(--palette-gray)]">Premium Care</div>
                  <div className="text-sm text-[color:var(--palette-gray)]/70">Luxury experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[color:var(--palette-mauve)]/15"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-[color:var(--palette-coral)]/30 to-[color:var(--palette-mauve)]/30 rounded-xl flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="h-6 w-6 text-[color:var(--palette-rose)] fill-current" />
                </motion.div>
                <div>
                  <div className="font-semibold text-[color:var(--palette-gray)]">Art & Design</div>
                  <div className="text-sm text-[color:var(--palette-gray)]/70">Custom creations</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Booking Form Modal */}
        <AnimatePresence>
          {showBookingForm && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <StepBookingForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
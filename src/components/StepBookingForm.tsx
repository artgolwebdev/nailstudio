import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Check,
  Star
} from "lucide-react";
import { format } from "date-fns";

interface BookingFormData {
  service: string;
  date: Date | undefined;
  time: string;
  duration: string;
  addOns: string[];
  name: string;
  email: string;
  phone: string;
}

const services = [
  { id: "manicure", name: "Classic Manicure", price: 35, duration: "45 min" },
  { id: "pedicure", name: "Luxury Pedicure", price: 45, duration: "60 min" },
  { id: "combo", name: "Mani + Pedi Combo", price: 70, duration: "90 min" },
  { id: "gel", name: "Gel Manicure", price: 50, duration: "60 min" },
  { id: "art", name: "Nail Art Design", price: 65, duration: "75 min" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

const addOns = [
  { id: "cuticle", name: "Premium Cuticle Care", price: 10 },
  { id: "massage", name: "Hand Massage", price: 15 },
  { id: "design", name: "Simple Nail Art", price: 20 },
  { id: "strengthen", name: "Nail Strengthening", price: 12 }
];

export function StepBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    service: "",
    date: undefined,
    time: "",
    duration: "",
    addOns: [],
    name: "",
    email: "",
    phone: ""
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleAddOn = (addOnId: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const calculateTotal = () => {
    const service = services.find(s => s.id === formData.service);
    const servicePrice = service ? service.price : 0;
    const addOnPrice = formData.addOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
    return servicePrice + addOnPrice;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.service !== "";
      case 2: return formData.date && formData.time !== "";
      case 3: return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      case 4: return true;
      default: return false;
    }
  };

  const handleSubmit = () => {
    // TODO: Integrate with booking API
    // Handle booking submission
    alert("Thank you! Your booking has been confirmed. We'll send you a confirmation email shortly.");
    // Reset form after submission
    setFormData({
      service: "",
      date: undefined,
      time: "",
      duration: "",
      addOns: [],
      name: "",
      email: "",
      phone: ""
    });
    setCurrentStep(1);
  };

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl border-0 overflow-hidden">
      {/* Progress Bar */}
      <div className="relative h-2 bg-[color:var(--palette-cream)]">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[color:var(--palette-coral)] to-[color:var(--palette-rose)]"
          initial={{ width: "25%" }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <CardContent className="p-6 space-y-6">
        {/* Step Header */}
        <div className="text-center">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-[color:var(--palette-gray)]">
              Step {currentStep} of {totalSteps}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentStep === 1 && "Choose your service"}
              {currentStep === 2 && "Select date & time"}
              {currentStep === 3 && "Your information"}
              {currentStep === 4 && "Confirm booking"}
            </p>
          </motion.div>
        </div>

        {/* Step Content */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-200 ${
                        formData.service === service.id 
                          ? 'ring-2 ring-[color:var(--palette-rose)] bg-[color:var(--palette-peach)]/20' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => updateFormData('service', service.id)}
                    >
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-[color:var(--palette-gray)]">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-[color:var(--palette-rose)]">${service.price}</div>
                          {formData.service === service.id && (
                            <Check className="h-4 w-4 text-[color:var(--palette-rose)] ml-auto" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <Label className="text-sm font-medium">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left font-normal mt-2"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => updateFormData('date', date)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-sm font-medium">Select Time</Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {timeSlots.slice(0, 12).map((time) => (
                      <Button
                        key={time}
                        variant={formData.time === time ? "default" : "outline"}
                        className={`text-xs ${
                          formData.time === time 
                            ? 'bg-[color:var(--palette-rose)] hover:bg-[color:var(--palette-rose)]/90' 
                            : ''
                        }`}
                        onClick={() => updateFormData('time', time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="pt-2">
                  <Label className="text-sm font-medium">Add-ons (Optional)</Label>
                  <div className="space-y-2 mt-2">
                    {addOns.map((addOn) => (
                      <div key={addOn.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={addOn.id}
                          checked={formData.addOns.includes(addOn.id)}
                          onCheckedChange={() => toggleAddOn(addOn.id)}
                        />
                        <Label 
                          htmlFor={addOn.id}
                          className="text-sm flex-1 cursor-pointer"
                        >
                          {addOn.name}
                        </Label>
                        <span className="text-sm font-medium text-[color:var(--palette-rose)]">
                          +${addOn.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--palette-coral)] to-[color:var(--palette-rose)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-[color:var(--palette-gray)]">Confirm Your Booking</h4>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-medium">
                      {services.find(s => s.id === formData.service)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">
                      {formData.date ? format(formData.date, "PPP") : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">{formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  {formData.addOns.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Add-ons:</span>
                      <span className="font-medium">{formData.addOns.length} selected</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-semibold text-[color:var(--palette-rose)]">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              disabled={!isStepValid()}
              className="bg-gradient-to-r from-[color:var(--palette-coral)] to-[color:var(--palette-rose)] hover:from-[color:var(--palette-coral)]/90 hover:to-[color:var(--palette-rose)]/90 flex items-center"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[color:var(--palette-coral)] to-[color:var(--palette-rose)] hover:from-[color:var(--palette-coral)]/90 hover:to-[color:var(--palette-rose)]/90 flex items-center"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Confirm Booking
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
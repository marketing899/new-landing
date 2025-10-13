import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Shield } from "lucide-react";

const HeroRegistrationForm = ({ highlight }: { highlight: boolean }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consultTime: "",
    symptoms: [] as string[],
    consent: false
  });

  const symptomOptions = [
    "Weight gain", "Irregular periods", "Severe cramps", 
    "Bloating", "Facial hair", "Acne", "Gut issues", 
    "Mood swings", "Fatigue", "Hair loss"
  ];

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      symptoms: checked 
        ? [...prev.symptoms, symptom]
        : prev.symptoms.filter(s => s !== symptom)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.consent) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone number, and consent are required.",
        variant: "destructive"
      });
      return;
    }

    console.log("Form submitted:", formData);
    toast({
      title: "Registration Successful!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <Card className={`shadow-card-hover border-brand-pink/20 animate-fade-in ${highlight ? 'ring-2 ring-brand-pink/50' : ''}`}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-poppins text-left">
          Start Your 90-Day Journey
        </CardTitle>
        <p className="text-sm text-muted-text text-left">
          Get your personalized PCOS reversal plan
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-left">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-left">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-left">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
              />
            </div>
          </div>



          <div className="space-y-2">
            <Label className="text-left">Preferred Consult Time</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, consultTime: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekday-630pm">weekday 6:30PM</SelectItem>
                <SelectItem value="weekday-wed-fri-4pm">weekday (Wednesday and Friday) 4PM</SelectItem>
                <SelectItem value="weekend-11am">weekend 11am Sat Sun</SelectItem>
                <SelectItem value="weekend-4pm">weekend 4PM</SelectItem>
              </SelectContent>
            </Select>
          </div>



          <div className="space-y-3">
            <Label className="text-left">Select your symptoms (optional)</Label>
            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
              {symptomOptions.map((symptom) => (
                <div key={symptom} className="flex items-center space-x-2">
                  <Checkbox
                    id={symptom}
                    checked={formData.symptoms.includes(symptom)}
                    onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                  />
                  <Label htmlFor={symptom} className="text-xs cursor-pointer text-left">
                    {symptom}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
              required
            />
            <Label htmlFor="consent" className="text-xs leading-tight cursor-pointer text-left">
              I agree to be contacted by Laiqa and receive program-related information *
            </Label>
          </div>

          <Button
            type="submit"
            variant="brand"
            size="lg"
            className="w-full flex items-center gap-2 text-left"
          >
            <Shield className="w-4 h-4" />
            Reverse PCOS Now
            <ArrowRight className="w-4 h-4" />
          </Button>

          <p className="text-xs text-muted-text text-left">
            🔒 Your information is secure and will not be shared
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default HeroRegistrationForm;
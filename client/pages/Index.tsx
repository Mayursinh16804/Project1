import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Wrench, Shield, Thermometer, Settings, Star, Users, Award, CheckCircle } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.builder.io/api/v1/assets/5a8c30a1b7984e9dbaf0e12f1f3a6110/mayuraircon-a3c6ab?format=webp&width=800"
                alt="Mayur Aircon"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
            </nav>
            <Button>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Commercial PAC Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Professional{" "}
                  <span className="text-accent">Air Conditioning</span>{" "}
                  Solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert sales and service for Commercial Precision Air Conditioning Units. 
                  Ensuring optimal climate control for your business operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Wrench className="w-5 h-5 mr-2" />
                  Emergency Service
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-semibold">500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="font-semibold">15+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <Card className="text-center p-4">
                    <Thermometer className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold">24°C</div>
                    <div className="text-sm text-muted-foreground">Optimal Temp</div>
                  </Card>
                  <Card className="text-center p-4">
                    <Settings className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </Card>
                  <Card className="text-center p-4">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </Card>
                  <Card className="text-center p-4">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Commercial PAC Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive precision air conditioning services for all your commercial needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>PAC Installation</CardTitle>
                <CardDescription>
                  Professional installation of commercial precision air conditioning units with optimal placement and configuration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Maintenance & Repair</CardTitle>
                <CardDescription>
                  Regular maintenance and emergency repair services to ensure your PAC systems operate at peak efficiency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Temperature Control</CardTitle>
                <CardDescription>
                  Advanced climate control solutions with precision temperature and humidity management for critical environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock emergency support to minimize downtime and maintain optimal operating conditions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Consultation</CardTitle>
                <CardDescription>
                  Expert consultation to determine the best PAC solutions for your specific commercial requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Warranty Service</CardTitle>
                <CardDescription>
                  Comprehensive warranty coverage and service for all installed PAC systems with guaranteed parts and labor.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  About Mayuraircon
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Trusted PAC Specialists
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 15 years of experience in commercial precision air conditioning, 
                  Mayuraircon has established itself as a leading provider of PAC solutions. 
                  We specialize in maintaining optimal climate conditions for critical business operations.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Certified Technicians</h3>
                    <p className="text-muted-foreground">Factory-trained professionals with industry certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Quality Guarantee</h3>
                    <p className="text-muted-foreground">100% satisfaction guarantee on all installations and services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Emergency Response</h3>
                    <p className="text-muted-foreground">24/7 emergency service for critical system failures</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Get In Touch
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Contact Mayuraircon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to optimize your commercial air conditioning? Get in touch for a free consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">Available 24/7 for emergencies</p>
              <Button variant="outline" className="mt-4 w-full">
                Call Now
              </Button>
            </Card>

            <Card className="text-center p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">Response within 24 hours</p>
              <Button variant="outline" className="mt-4 w-full">
                Send Email
              </Button>
            </Card>

            <Card className="text-center p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Serving commercial clients nationwide</p>
              <Button variant="outline" className="mt-4 w-full">
                Find Us
              </Button>
            </Card>

            <Card className="text-center p-6">
              <Clock className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">Mon-Fri: 8AM-6PM<br />Emergency: 24/7</p>
              <Button variant="outline" className="mt-4 w-full">
                Schedule
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img 
                src="https://cdn.builder.io/api/v1/assets/5a8c30a1b7984e9dbaf0e12f1f3a6110/mayuraircon-a3c6ab?format=webp&width=800"
                alt="Mayur Aircon"
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/80">
                Professional commercial PAC solutions with over 15 years of experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>PAC Installation</li>
                <li>Maintenance & Repair</li>
                <li>Emergency Service</li>
                <li>Consultation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>24/7 Emergency</li>
                <li>Free Consultation</li>
                <li>Get Quote</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Mayuraircon. All rights reserved. Professional PAC Solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

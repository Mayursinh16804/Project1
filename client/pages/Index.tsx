import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Wrench, Shield, Volume2, Settings, Star, Users, Award, CheckCircle, Mic, Radio, HeadphonesIcon, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.builder.io/api/v1/assets/5a8c30a1b7984e9dbaf0e12f1f3a6110/mayuraircon-a3c6ab?format=webp&width=800"
                alt="MayurAircon"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-accent transition-colors font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">About</a>
              <a href="#products" className="text-foreground hover:text-accent transition-colors font-medium">Products</a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">Services</a>
              <a href="#clients" className="text-foreground hover:text-accent transition-colors font-medium">Clients</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">Contact</a>
            </nav>
            <Button className="bg-accent hover:bg-accent/90">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgogICAgICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMjAyYyIvPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjI1IiByPSI4IiBmaWxsPSIjMzk0ODU5IiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSI3NSIgcj0iNiIgZmlsbD0iIzM5NDg1OSIgb3BhY2l0eT0iMC4yIi8+CiAgICAgIDxyZWN0IHg9IjcwIiB5PSI2MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjQiIGZpbGw9IiMzOTQ4NTkiIG9wYWNpdHk9IjAuNCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhKSIvPgo8L3N2Zz4K')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit bg-accent/20 text-accent border-accent/30">
                  Commercial PA Systems
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Powerful Sound,{" "}
                  <span className="text-accent">Professional</span>{" "}
                  Service
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  Commercial PA System Sales & Support You Can Rely On
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-accent hover:bg-accent/90">
                  Explore Our Products
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-foreground">
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 95587 19344
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-semibold">1000+ Installations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Volume2 className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold">Crystal</div>
                    <div className="text-sm opacity-80">Clear Audio</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">Support</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold">Premium</div>
                    <div className="text-sm opacity-80">Quality</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold">Trusted</div>
                    <div className="text-sm opacity-80">Service</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                See Our Work
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold">
                See Our Work in Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch how we transform spaces with professional PA system installations
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <Volume2 className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
                    <p className="text-muted-foreground">PA System Installation & Client Projects</p>
                  </div>
                  <Button className="mt-4">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Play Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  About MayurAircon
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  20+ Years of Experience in PA Systems
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MayurAircon has been a trusted name in commercial PA systems for over two decades. 
                  We specialize in providing high-quality audio solutions trusted by leading institutions 
                  across offices, schools, factories, government buildings, and shopping malls.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Expert Technicians</h3>
                    <p className="text-muted-foreground">Certified professionals with decades of PA system experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Trusted by Leading Institutions</h3>
                    <p className="text-muted-foreground">Serving offices, schools, factories, and government buildings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Complete Solutions</h3>
                    <p className="text-muted-foreground">From consultation to installation and ongoing maintenance</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-6">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">20+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </Card>
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">1000+</div>
                      <div className="text-sm text-muted-foreground">Installations</div>
                    </Card>
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </Card>
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </Card>
                  </div>
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
              Complete PA System Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive PA system services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Installation of PA Systems</CardTitle>
                <CardDescription className="text-center">
                  Professional installation with optimal speaker placement and configuration for maximum coverage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">AMC (Annual Maintenance Contracts)</CardTitle>
                <CardDescription className="text-center">
                  Regular maintenance contracts to ensure your PA systems operate reliably year-round
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Troubleshooting & Repairs</CardTitle>
                <CardDescription className="text-center">
                  Fast diagnosis and repair services to minimize downtime and restore audio quality
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">System Upgrades</CardTitle>
                <CardDescription className="text-center">
                  Modernize your existing PA systems with latest technology and improved performance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Professional PA Equipment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-quality audio equipment for all your commercial PA system needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                <Zap className="w-16 h-16 text-accent" />
              </div>
              <CardHeader>
                <CardTitle>Amplifiers</CardTitle>
                <CardDescription>
                  High-powered amplifiers for commercial grade audio distribution and control
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  View Details
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                <Volume2 className="w-16 h-16 text-accent" />
              </div>
              <CardHeader>
                <CardTitle>Wall Speakers</CardTitle>
                <CardDescription>
                  Premium wall-mounted speakers designed for clear audio distribution in large spaces
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  View Details
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                <Mic className="w-16 h-16 text-accent" />
              </div>
              <CardHeader>
                <CardTitle>Microphones</CardTitle>
                <CardDescription>
                  Professional microphones for announcements, presentations, and events
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  View Details
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                <Radio className="w-16 h-16 text-accent" />
              </div>
              <CardHeader>
                <CardTitle>Audio Mixers & Controllers</CardTitle>
                <CardDescription>
                  Advanced control systems for managing complex PA installations and audio routing
                </CardDescription>
                <Button variant="outline" className="mt-4">
                  View Details
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why Choose MayurAircon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with PA system specialists
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Experienced Technicians</h3>
              <p className="text-muted-foreground">Certified professionals with 20+ years in PA systems</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Fast On-Site Service</h3>
              <p className="text-muted-foreground">Quick response times for installations and emergency repairs</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Quality Equipment</h3>
              <p className="text-muted-foreground">Premium PA systems from trusted manufacturers</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              <p className="text-muted-foreground">Competitive rates without compromising on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="clients" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "MayurAircon installed our school's PA system flawlessly. The audio quality is excellent and their maintenance service is reliable."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Principal</p>
                  <p className="text-sm text-muted-foreground">City Public School</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Professional service and high-quality equipment. Our factory PA system has been running perfectly for 3 years."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Operations Manager</p>
                  <p className="text-sm text-muted-foreground">Industrial Corp</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Quick response time and expert troubleshooting. MayurAircon keeps our shopping mall's PA system running smoothly."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Facility Manager</p>
                  <p className="text-sm text-muted-foreground">Metro Mall</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Client Logos */}
          <div className="border-t pt-12">
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Trusted by Leading Organizations
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-muted px-6 py-3 rounded">Schools</div>
              <div className="bg-muted px-6 py-3 rounded">Government Buildings</div>
              <div className="bg-muted px-6 py-3 rounded">Factories</div>
              <div className="bg-muted px-6 py-3 rounded">Shopping Malls</div>
              <div className="bg-muted px-6 py-3 rounded">Corporate Offices</div>
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
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to upgrade your PA system? Get in touch for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    placeholder="Tell us about your PA system requirements..."
                    rows={4}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <Button className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-2">Available for calls and emergencies</p>
                    <p className="text-lg font-semibold text-accent">+91 95587 19344</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">Send us your requirements</p>
                    <p className="text-lg font-semibold text-accent">mayuraircon1684@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Emergency: 24/7</p>
                  </div>
                </div>
              </Card>

              {/* Google Maps Placeholder */}
              <Card className="p-6">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-accent" />
                    <p className="font-semibold">Service Area</p>
                    <p className="text-sm text-muted-foreground">Serving clients nationwide</p>
                  </div>
                </div>
              </Card>
            </div>
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
                alt="MayurAircon"
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/80">
                Professional PA system solutions with over 20 years of experience in commercial audio.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  WhatsApp
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Instagram
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>PA Installation</li>
                <li>AMC Services</li>
                <li>Troubleshooting</li>
                <li>System Upgrades</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Phone: +91 95587 19344</li>
                <li>Email: mayuraircon1684@gmail.com</li>
                <li>24/7 Emergency Service</li>
                <li>Free Consultation</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 MayurAircon. All rights reserved. Professional PA System Solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

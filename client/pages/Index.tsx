import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Shield,
  Snowflake,
  Settings,
  Star,
  Users,
  Award,
  CheckCircle,
  ThermometerSun,
  Wind,
  Building,
  Home,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fb62909aa440046ef82b1eff0e7532fc5?format=webp&width=800"
                alt="Mayur Aircon"
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#safety"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Safety
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Products
              </a>
              <a
                href="#clients"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Clients
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
            <Button className="bg-accent hover:bg-accent/90">
              Request a Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhYyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgogICAgICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBmMTcyYSIvPgogICAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxMiIgZmlsbD0iIzBkYzJmZiIgb3BhY2l0eT0iMC4zIi8+CiAgICAgIDxyZWN0IHg9IjYwIiB5PSI2MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjYiIGZpbGw9IiMwZGMyZmYiIG9wYWNpdHk9IjAuNCIvPgogICAgICA8Y2lyY2xlIGN4PSI3NSIgY3k9IjIwIiByPSI4IiBmaWxsPSIjMGRjMmZmIiBvcGFjaXR5PSIwLjIiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhYykiLz4KPC9zdmc+Cg==')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="w-fit bg-accent/10 text-accent border-accent/30"
                >
                  Professional AC Solutions
                </Badge>
                <div className="text-accent font-semibold text-xl lg:text-2xl mb-4">
                  MAYUR AIRCON
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-primary">
                  Stay Cool,{" "}
                  <span className="text-accent">Stay Comfortable</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Expert Air Conditioning Solutions for Homes & Businesses
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-accent hover:bg-accent/90"
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 95587 19344
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-semibold">5000+ Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Snowflake className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold text-primary">Cool</div>
                    <div className="text-sm text-muted-foreground">Comfort</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold text-primary">
                      Energy
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Efficient
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur border-accent/20">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-3xl font-bold text-primary">
                      Trusted
                    </div>
                    <div className="text-sm text-muted-foreground">Service</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Watch Our Work
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                Watch How We Bring Cool Comfort to Every Space
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How AC work
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmOWZmIi8+CiAgPGNpcmNsZSBjeD0iNDAwIiBjeT0iMjI1IiByPSI0MCIgZmlsbD0iIzBkYzJmZiIgb3BhY2l0eT0iMC4zIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIzODAsMjA1IDM4MCwyNDUgNDIwLDIyNSIgZmlsbD0iI2ZmZmZmZiIvPgogIDx0ZXh0IHg9IjQwMCIgeT0iMjc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2YjczODAiPkluc3RhbGxhdGlvbiBEZW1vIFZpZGVvPC90ZXh0Pgo8L3N2Zz4K"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source
                    src="https://cdn.builder.io/o/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2F598752652fa144c6a1671eca2bc7bd97?alt=media&token=8fb9d776-5b78-40c5-a192-fd3c592ffbdb&apiKey=5a8c30a1b7984e9dbaf0e12f1f3a6110"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-primary mb-2">
                  Professional AC Installation & Service
                </p>
                <p className="text-muted-foreground">
                  Watch our certified technicians demonstrate professional
                  installation techniques and maintenance procedures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  About MAYUR AIRCON
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                  Trusted AC Experts with 2+ Years of Experience
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MAYUR AIRCON has been providing reliable air conditioning
                  solutions for over 2 years. We specialize in residential,
                  commercial, and industrial AC solutions for homes, offices,
                  industries, malls, hospitals, and schools.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Energy-efficient Systems</h3>
                    <p className="text-muted-foreground">
                      Advanced AC solutions that reduce energy consumption
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Branded Products</h3>
                    <p className="text-muted-foreground">
                      Premium brands like Vertiv, Daikin, Voltas, LG, Blue Star
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">
                      Reliable After-sales Support
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive maintenance and 24/7 service support
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-6 bg-accent hover:bg-accent/90">
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">
                        2+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </Card>
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">
                        5000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Installations
                      </div>
                    </Card>
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Support
                      </div>
                    </Card>
                    <Card className="text-center p-4">
                      <div className="text-2xl font-bold text-accent mb-1">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Satisfaction
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">
              Complete AC Solutions for Every Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive air
              conditioning services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">AC Installation</CardTitle>
                <CardDescription className="text-center">
                  Professional installation of Split, Cassette, VRV/VRF systems
                  with optimal placement and efficiency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">
                  AMC (Annual Maintenance)
                </CardTitle>
                <CardDescription className="text-center">
                  Comprehensive annual maintenance contracts to ensure optimal
                  performance and longevity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">AC Repair & Servicing</CardTitle>
                <CardDescription className="text-center">
                  Fast and reliable repair services to restore your AC to
                  optimal working condition
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">
                  Duct Cleaning & Filter Replacement
                </CardTitle>
                <CardDescription className="text-center">
                  Professional duct cleaning and filter replacement for improved
                  air quality and efficiency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl">HVAC System Setup</CardTitle>
                <CardDescription className="text-center">
                  Complete HVAC system design and installation for large
                  buildings and commercial spaces
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Safety First
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">
              Professional Safety Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified technicians follow strict safety protocols for every
              installation and service call
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Certified Safety Protocols
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every member of our team is trained in the latest safety
                  standards and uses professional-grade protective equipment for
                  all installations and maintenance work.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">
                      High-Visibility Safety Gear
                    </h4>
                    <p className="text-muted-foreground">
                      All technicians wear certified hi-vis clothing and
                      protective equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">
                      Rooftop Installation Safety
                    </h4>
                    <p className="text-muted-foreground">
                      Specialized training for commercial rooftop HVAC
                      installations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">
                      Indoor Installation Protocols
                    </h4>
                    <p className="text-muted-foreground">
                      Safe and clean indoor installation practices protecting
                      your property
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fc030bc1a761e4a4f98db1013603d8469?format=webp&width=800"
                alt="Technicians in safety gear working on rooftop HVAC installation"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2F5ee692b8a89b4270a42751566f145cbc?format=webp&width=800"
                alt="Professional technician installing indoor AC unit"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Professional Installation Standards
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our indoor installation team maintains the highest standards
                  of professionalism, cleanliness, and safety for residential
                  and commercial properties.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Property Protection</h4>
                    <p className="text-muted-foreground">
                      Floor coverings and protective measures for all indoor
                      work
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Trained Professionals</h4>
                    <p className="text-muted-foreground">
                      Certified technicians with ongoing safety and technical
                      training
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-muted-foreground">
                      Every installation is inspected and tested for safety and
                      performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Safety Compliant</div>
            </Card>
            <Card className="text-center p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-3xl font-bold text-accent mb-2">0</div>
              <div className="text-muted-foreground">Safety Incidents</div>
            </Card>
            <Card className="text-center p-6">
              <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-3xl font-bold text-accent mb-2">
                Certified
              </div>
              <div className="text-muted-foreground">Technicians</div>
            </Card>
            <Card className="text-center p-6">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-3xl font-bold text-accent mb-2">Insured</div>
              <div className="text-muted-foreground">& Bonded</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Products
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">
              Professional Cooling Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced cooling systems from leading manufacturers for data
              centers, commercial spaces, and industrial applications
            </p>
          </div>

          {/* Featured Data Center Installation */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2F0af59e38f28d4c17acf85a7427147cd6?format=webp&width=800"
                  alt="Data Center Cooling Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Data Center Cooling Solutions
                </CardTitle>
                <CardDescription className="text-lg">
                  Complete HVAC infrastructure for large-scale data center
                  operations with precision cooling and optimal airflow
                  management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* Liebert SRC - Small Room Cooling */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2F54d635349e304904bdc36d45fdc35e4e?format=webp&width=800"
                  alt="Liebert SRC Small Room Cooling"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Liebert SRC - Small Room Cooling</CardTitle>
                <CardDescription>
                  Designed for high air quantity to match equipment sensible
                  load application. Features energy-efficient components with
                  advanced control systems.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">
                    <strong>Models:</strong> SRC003ES, SRC045, SRC07ES
                  </div>
                  <div className="text-sm">
                    <strong>Capacity:</strong> 2.8 kW - 7.0 kW
                  </div>
                  <div className="text-sm">
                    <strong>Airflow:</strong> 750 CMH - 1900 CMH
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  View Specifications
                </Button>
              </CardHeader>
            </Card>

            {/* Vertiv Liebert PCW */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2F7cfe6fb1d2f04b55a4bebe7be3c91b67?format=webp&width=800"
                  alt="Vertiv Liebert PCW"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Vertiv Liebert PCW - Chilled Water Units</CardTitle>
                <CardDescription>
                  Ideal chilled water cooling unit providing efficient solution
                  for data center and server room air conditioning.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">
                    <strong>Models:</strong> PH170, PH046, PH081, PH066, PH136,
                    PH111, PH091
                  </div>
                  <div className="text-sm">
                    <strong>Capacity:</strong> 44.9 kW - 171.5 kW
                  </div>
                  <div className="text-sm">
                    <strong>Airflow:</strong> 11500 CMH - 40700 CMH
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  View Specifications
                </Button>
              </CardHeader>
            </Card>

            {/* Liebert XDU Coolant Distribution */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fe7680bc71e1e494aa2661602289c92b7?format=webp&width=800"
                  alt="Liebert XDU Coolant Distribution"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Liebert XDU Coolant Distribution Units</CardTitle>
                <CardDescription>
                  Designed to support fluid cooling within high density
                  environments, suitable for chip & rear door cooling
                  applications.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">
                    <strong>Model:</strong> XDU450 Coolant Distribution Unit
                  </div>
                  <div className="text-sm">
                    <strong>Capacity:</strong> 453 kW at 7.2 °F (4.0 °C)
                  </div>
                  <div className="text-sm">
                    <strong>Dimensions:</strong> 1900mm H × 600mm W × 1043mm D
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  View Specifications
                </Button>
              </CardHeader>
            </Card>

            {/* Vertiv Liebert EFC */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2F94f046c3c7164239a825e0964bff9cff?format=webp&width=800"
                  alt="Vertiv Liebert EFC"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Vertiv Liebert EFC - Low-GWP Evaporative</CardTitle>
                <CardDescription>
                  Next generation indirect evaporative free cooling unit with
                  low-GWP refrigerant designed for data center applications.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm">
                    <strong>Range:</strong> 100 to 450 kW
                  </div>
                  <div className="text-sm">
                    <strong>Technology:</strong> Indirect evaporative cooling
                    with air-to-air heat exchanger
                  </div>
                  <div className="text-sm">
                    <strong>Efficiency:</strong> Advanced energy efficiency with
                    future-ready refrigerant
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  View Specifications
                </Button>
              </CardHeader>
            </Card>
          </div>

          {/* Product Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Snowflake className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Precision Cooling</h3>
              <p className="text-sm text-muted-foreground">
                Small room and rack cooling solutions
              </p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Building className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Data Center HVAC</h3>
              <p className="text-sm text-muted-foreground">
                Large-scale facility cooling systems
              </p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <ThermometerSun className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Chilled Water</h3>
              <p className="text-sm text-muted-foreground">
                Efficient water-based cooling solutions
              </p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <Settings className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Coolant Distribution</h3>
              <p className="text-sm text-muted-foreground">
                Specialized liquid cooling systems
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Why Choose Prisize
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">
              Why Choose <span className="text-accent">MAYUR AIRCON</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with AC specialists who care
              about your comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Expert Technicians</h3>
              <p className="text-muted-foreground">
                Certified professionals with 2+ years of AC installation and
                service experience
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">
                Prompt Service & Support
              </h3>
              <p className="text-muted-foreground">
                Quick response times and 24/7 emergency support for all your AC
                needs
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                Affordable rates without compromising on quality or service
                standards
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Branded Products</h3>
              <p className="text-muted-foreground">
                Premium AC brands: Daikin, Voltas, LG, Blue Star and more
                trusted names
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="clients" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by homeowners and businesses across residential,
              commercial, and industrial sectors
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
                  "Excellent service! Our home AC installation was completed
                  professionally and the cooling is amazing. Highly recommend
                  Prisize."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Homeowner</p>
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
                  "Professional team, quality products, and reliable AMC
                  service. Our office AC systems have been running perfectly for
                  3 years."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">
                    Office Manager
                  </p>
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
                  "Quick response for emergency repairs and excellent
                  maintenance service. Trust Prisize for all our hospital AC
                  needs."
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Dr. Anil Patel</p>
                  <p className="text-sm text-muted-foreground">
                    Hospital Administrator
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Client Types */}
          <div className="border-t pt-12">
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Serving Diverse Clients
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-lg flex items-center gap-2">
                <Home className="w-4 h-4" />
                Homes
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-lg flex items-center gap-2">
                <Building className="w-4 h-4" />
                Offices
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-lg flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Industries
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-lg flex items-center gap-2">
                <Users className="w-4 h-4" />
                Malls
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-lg flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Hospitals
              </div>
              <div className="bg-accent/10 text-accent px-6 py-3 rounded-lg flex items-center gap-2">
                <Award className="w-4 h-4" />
                Schools
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Contact Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary">
              Get Your Free AC Quote Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready for cool comfort? Contact us for a free consultation and
              competitive quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Request Your Quote</CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
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
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    placeholder="Tell us about your AC requirements (type, space size, etc.)..."
                    rows={4}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90">
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
                    <p className="text-muted-foreground mb-2">
                      Available for calls and emergencies
                    </p>
                    <p className="text-lg font-semibold text-accent">
                      +91 95587 19344
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">
                      Send us your AC requirements
                    </p>
                    <p className="text-lg font-semibold text-accent">
                      mayuraircon1684@gmail.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Hours</h3>
                    <p className="text-muted-foreground">
                      Mon-Sat: 9:00 AM - 7:00 PM
                    </p>
                    <p className="text-muted-foreground">Emergency: 24/7</p>
                  </div>
                </div>
              </Card>

              {/* Google Maps Placeholder */}
              <Card className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-accent" />
                    <p className="font-semibold">Service Coverage</p>
                    <p className="text-sm text-muted-foreground">
                      Homes, Offices, Industries, Malls, Hospitals, Schools
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="w-fit mx-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
              >
                Company Founder
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Meet Our Founder
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                The visionary behind MAYUR AIRCON's success and commitment to
                excellence
              </p>
            </div>

            <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur border-primary-foreground/20">
              <div className="p-12 text-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent/50">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fe44870ba918145f797458d5d8ff14dff?format=webp&width=800"
                    alt="Mayursinh Padhiyar - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-primary-foreground">
                    Mayursinh Padhiyar
                  </h3>
                  <p className="text-accent font-semibold text-xl">
                    Founder & Chief Executive Officer
                  </p>
                  <div className="text-primary-foreground/90 text-lg leading-relaxed space-y-4">
                    <p>
                      With over 5 years of unwavering dedication to the air
                      conditioning industry, Mayursinh Padhiyar founded MAYUR
                      AIRCON with a vision to revolutionize cooling solutions
                      for both residential and commercial sectors.
                    </p>
                    <p>
                      His commitment to excellence, innovative approach, and
                      customer-first philosophy have made MAYUR AIRCON a trusted
                      name in precision air conditioning systems. Under his
                      leadership, the company has successfully completed over
                      5000 installations and continues to set new standards in
                      the industry.
                    </p>
                    <p>
                      Mayursinh's expertise spans across commercial PAC systems,
                      data center cooling solutions, and cutting-edge HVAC
                      technologies, making him a respected leader in the field.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-primary-foreground/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        5+
                      </div>
                      <div className="text-sm text-primary-foreground/80">
                        Years of Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        5000+
                      </div>
                      <div className="text-sm text-primary-foreground/80">
                        Projects Completed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        100%
                      </div>
                      <div className="text-sm text-primary-foreground/80">
                        Customer Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <p className="text-lg text-primary-foreground/80 italic">
                "Excellence in air conditioning is not just our business - it's
                our passion and commitment to every client."
              </p>
              <p className="text-accent font-semibold mt-2">
                - Mayursinh Padhiyar
              </p>
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
                src="https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fb62909aa440046ef82b1eff0e7532fc5?format=webp&width=800"
                alt="Mayur Aircon"
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/80">
                <strong>MAYUR AIRCON</strong> - Professional air conditioning
                solutions with over 2 years of experience in residential and
                commercial cooling.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Facebook
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a
                    href="#home"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>AC Installation</li>
                <li>AMC Services</li>
                <li>AC Repair</li>
                <li>HVAC Systems</li>
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
            <p>
              &copy; 2025 MAYUR AIRCON. All rights reserved. Expert AC Solutions
              for Every Space.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

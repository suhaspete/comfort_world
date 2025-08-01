import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Bed,
  Utensils,
  Shield,
  Sparkles,
  Users,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Star,
  Clock,
  Wifi,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComfortWorldPG() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-gray-800">Comfort World PG</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-600 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="#facilities" className="text-gray-600 hover:text-orange-600 transition-colors">
                Facilities
              </Link>
              <Link href="#gallery" className="text-gray-600 hover:text-orange-600 transition-colors">
                Gallery
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href="https://wa.me/918722333244" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">
              7+ Years of Trusted Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-orange-600">Comfort World PG</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">Your Home Away From Home</p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of comfort, safety, and cleanliness with our 7+ years of trusted service
              across multiple locations in Bangalore, providing safe, clean, and comfortable accommodation for students
              and working professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3" asChild>
                <a href="tel:+919535443273">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 95354 43273
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
                asChild
              >
                <a href="https://wa.me/919535443273" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <Image
              src="/images/gallery/building-exterior.jpg"
              alt="Comfort World PG Building"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">🏠 Our PG Facilities at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and convenient stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accommodation */}
            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bed className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🛏 Comfortable Rooms</h3>
                <p className="text-gray-600">
                  Spacious rooms available in Private, Double, and Triple sharing options with comfortable bedding and
                  storage.
                </p>
              </CardContent>
            </Card>

            {/* Food */}
            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🍽 Delicious Food</h3>
                <p className="text-gray-600">
                  Fresh homestyle meals including North Indian, South Indian, and Chinese cuisine prepared with care.
                </p>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🔐 Safety & Security</h3>
                <p className="text-gray-600">
                  24/7 staff presence, CCTV surveillance, gated entry, and daily attendance tracking for your safety.
                </p>
              </CardContent>
            </Card>

            {/* Housekeeping */}
            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🧹 Housekeeping Services</h3>
                <p className="text-gray-600">
                  Regular cleaning, laundry services, and strict hygiene protocols to maintain cleanliness.
                </p>
              </CardContent>
            </Card>

            {/* Common Areas */}
            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🧘‍♀️ Common Areas</h3>
                <p className="text-gray-600">
                  Spacious dining area, indoor games, TV lounge, and daily newspapers for relaxation and socializing.
                </p>
              </CardContent>
            </Card>

            {/* Additional Amenities */}
            <Card className="hover:shadow-lg transition-shadow border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">📶 Modern Amenities</h3>
                <p className="text-gray-600">
                  High-speed WiFi, power backup, parking facility, and 24/7 water supply for your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">📸 Gallery</h2>
            <p className="text-lg text-gray-600">
              Take a virtual tour of our comfortable and well-maintained facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <Image
                src="/images/gallery/room-1.jpg"
                alt="Comfortable Room"
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="/images/gallery/dining-area.jpg"
                alt="Dining Area"
                width={400}
                height={250}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/gallery/kitchen-area.jpg"
                alt="Kitchen Area"
                width={400}
                height={250}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="/images/gallery/tv-lounge.jpg"
                alt="TV Lounge"
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/gallery/room-2.jpg"
                alt="Another Comfortable Room"
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="/images/gallery/common-area.jpg"
                alt="Common Area"
                width={400}
                height={250}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">💬 What Our Residents Say</h2>
            <p className="text-lg text-gray-600">Hear from our satisfied residents about their experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Comfort World PG has been my home for 2 years. The food is amazing, rooms are clean, and the staff is
                  very caring. Highly recommended for working professionals!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold">Rahul Sharma</p>
                    <p className="text-sm text-gray-500">Comfort 'A' Block Boys</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a student, I needed a safe and affordable place. Comfort World PG provided exactly that with great
                  facilities and a homely atmosphere. Thank you!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold">Priya Patel</p>
                    <p className="text-sm text-gray-500">Comfort 'B' Block Girls PG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The security and cleanliness standards are excellent. I feel completely safe here, and the management
                  is very responsive to any concerns."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Amit Kumar</p>
                    <p className="text-sm text-gray-500">BMSIT Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">About Comfort World PG</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-orange-600 mr-3" />
                  <span className="text-2xl font-semibold text-gray-800">7+ Years of Excellence</span>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With over 7 years of dedicated service, Comfort World PG has established itself as a trusted name in
                  providing quality accommodation for students and working professionals.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To create a secure, clean, and welcoming PG environment where residents feel at home while pursuing
                    their academic and professional goals. We believe in providing not just accommodation, but a
                    community where everyone feels valued and cared for.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/gallery/building-exterior.jpg"
                  alt="About Comfort World PG"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">📍 Our Locations Across Bangalore</h2>
            <p className="text-lg text-gray-600">Multiple convenient locations to serve you better</p>
          </div>

          {/* Contact Numbers */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="tel:+919535443273">
                  <Phone className="h-4 w-4 mr-2" />
                  95354 43273
                </a>
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="tel:+919035186912">
                  <Phone className="h-4 w-4 mr-2" />
                  90351 86912
                </a>
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="tel:+918722333244">
                  <Phone className="h-4 w-4 mr-2" />
                  87223 33244
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                asChild
              >
                <a href="https://wa.me/919535443273" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                asChild
              >
                <a href="mailto:comfortworldonline@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Comfort World 'A' Block */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfort World 'A' Block</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    UWS Residential, RTO Main road, Singanayakanahalli, Yelahanka, Bangalore - 560064
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://maps.app.goo.gl/ex3sEO3EYYRrSEJ4Z" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort World 'B' Block */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfort World 'B' Block</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    Avalahalli, Behind Sai Baba, near Bmsit college, Yelahanka, Bangalore - 560064
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://maps.app.goo.gl/9c8M1XptkuId1S4oX" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort World 'C' Block */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfort World 'C' Block</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    72 SURYA VAMSHI LAYOUT NAGENAHALLI BANGALORE - 64, Karnataka 560064
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://maps.app.goo.gl/NEJudvQsr8u07zOCv" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort World 'D' Block */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfort World 'D' Block</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    59 SURYA VAMSHI LAYOUT NAGENAHALLI BANGALORE - 64, Karnataka 560064
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://maps.app.goo.gl/ex3sEO3EYYRrSEJ4Z" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort World 'A' Block Girls */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfort World 'A' Block Girls</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    Rs square, Site no41 Near sriram suhana apartment, avalahalli village, yelahanka, Bangalore-64,
                    Karnataka 560064
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://maps.app.goo.gl/SI5ehLdi5XtkqG6QG" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Comfort World 'B' Block Girls */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfort World 'B' Block Girls</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">
                    Rs square, Site no3 Near sriram suhana apartment, avalahalli village, yelahanka, Bangalore-64,
                    Karnataka 560064
                  </p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://maps.app.goo.gl/SI5ehLdi5XtkqG6QG" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Book Now / Inquire</h3>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Comfort World 'A' Block</option>
                      <option>Comfort World 'B' Block</option>
                      <option>Comfort World 'C' Block</option>
                      <option>Comfort World 'D' Block</option>
                      <option>Comfort World 'A' Block Girls</option>
                      <option>Comfort World 'B' Block Girls</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Room Preference</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Private Room</option>
                      <option>Double Sharing</option>
                      <option>Triple Sharing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Any specific requirements or questions..." rows={4} />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Submit Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-orange-600" />
                <span className="text-xl font-bold">Comfort World PG</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for comfortable and safe accommodation for over 7 years.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-orange-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#facilities" className="text-gray-400 hover:text-orange-600">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-orange-600">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-orange-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-orange-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Private Rooms</li>
                <li>Double Sharing</li>
                <li>Triple Sharing</li>
                <li>Meal Services</li>
                <li>Housekeeping</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  📞{" "}
                  <a href="tel:+919535443273" className="hover:text-orange-600">
                    95354 43273
                  </a>
                </p>
                <p>
                  📱{" "}
                  <a href="tel:+919035186912" className="hover:text-orange-600">
                    90351 86912
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a href="tel:+918722333244" className="hover:text-orange-600">
                    87223 33244
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a href="mailto:comfortworldonline@gmail.com" className="hover:text-orange-600">
                    comfortworldonline@gmail.com
                  </a>
                </p>
                <p>📍 Multiple Locations in Bangalore</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© {new Date().getFullYear()} Comfort World PG. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-orange-600 text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-600 text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

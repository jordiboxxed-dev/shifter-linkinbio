"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Coffee,
  FileText,
  Users,
  Video,
  ShoppingCart,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Good morning");
    else if (hour < 18) setTimeOfDay("Good afternoon");
    else setTimeOfDay("Good evening");
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  // Copy contact info to clipboard
  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    toast.success(`${type === "email" ? "Email" : "Phone"} copied to clipboard!`);
  };

  // Sample products data
  const products = [
    {
      id: 1,
      title: "Premium UI Kit",
      description: "Complete design system for modern web apps",
      price: "$49",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "React Components",
      description: "Reusable components with TypeScript support",
      price: "$29",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Design Templates",
      description: "Professional templates for any project",
      price: "$19",
      image: "/placeholder.svg"
    }
  ];

  // Sample links data
  const links = [
    {
      id: 1,
      title: "🚀 My Web Apps",
      description: "Check out my latest applications",
      icon: ExternalLink,
      href: "#",
      category: "apps"
    },
    {
      id: 2,
      title: "🎓 Join My Community",
      description: "Learn with me on Skool",
      icon: Users,
      href: "#",
      category: "learning"
    },
    {
      id: 3,
      title: "📺 Latest Videos",
      description: "Watch my latest content",
      icon: Video,
      href: "#",
      category: "media"
    },
    {
      id: 4,
      title: "📱 Follow Me",
      description: "Connect on social media",
      icon: Twitter,
      href: "#",
      category: "social"
    },
    {
      id: 5,
      title: "🛍️ My Products",
      description: "Premium resources for creators",
      icon: ShoppingCart,
      href: "#",
      category: "products"
    },
    {
      id: 6,
      title: "📧 Contact Me",
      description: "Get in touch directly",
      icon: Mail,
      href: "#contact",
      category: "contact"
    },
    {
      id: 7,
      title: "📄 My Resume",
      description: "View my professional experience",
      icon: FileText,
      href: "#",
      category: "docs"
    },
    {
      id: 8,
      title: "☕ Buy Me Coffee",
      description: "Support my work",
      icon: Coffee,
      href: "#",
      category: "support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {timeOfDay}, I'm Alex
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Full-stack developer & UI/UX designer creating beautiful digital experiences
          </p>
          
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            I build modern web applications with React, TypeScript, and Node.js. 
            Passionate about creating intuitive user interfaces and solving complex problems.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { icon: Github, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Youtube, href: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="glass-card w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </section>

        {/* Links Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.id}
                  href={link.href}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="glass-card p-3 rounded-xl bg-white/10">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{link.title}</h3>
                      <p className="text-gray-300">{link.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Media Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Latest Content</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* YouTube Video */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
                  <p className="text-xl">Featured Video</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Building Modern Web Apps</h3>
                <p className="text-gray-300">Learn how to create responsive applications with React and Tailwind CSS</p>
              </div>
            </div>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="glass-card rounded-xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Gallery item ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">My Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <Label htmlFor="name" className="text-lg mb-2 block">Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="email" className="text-lg mb-2 block">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="text-lg mb-2 block">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card border-white/20 bg-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                    Email
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">hello@example.com</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard("hello@example.com", "email")}
                      className="hover:bg-white/20"
                    >
                      {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-white/20 bg-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                    Phone
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyToClipboard("+1 (555) 123-4567", "phone")}
                      className="hover:bg-white/20"
                    >
                      {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-white/20 bg-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                    Location
                  </h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </CardContent>
              </Card>
              
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Youtube, href: "#" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
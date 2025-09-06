"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter,
  Users,
  Video,
  ShoppingCart,
  ExternalLink,
  Music2,
  Handshake
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Buenos días");
    else if (hour < 18) setTimeOfDay("Buenas tardes");
    else setTimeOfDay("Buenas noches");
  }, []);

  // Sample automations data
  const automations = [
    {
      id: 1,
      title: "Agente de IA con WhatsApp",
      description: "Automatiza respuestas y procesos de negocio directamente desde WhatsApp",
      price: "Gratis",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Creación de Contenido Automático",
      description: "Genera contenido para redes sociales sin intervención manual",
      price: "Gratis",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Scraping de Redes Sociales",
      description: "Recopila y analiza datos de múltiples plataformas sociales",
      price: "Gratis",
      image: "/placeholder.svg"
    }
  ];

  // Sample links data
  const communityLinks = [
    {
      id: 1,
      title: "Mi Skool",
      description: "Sumate a mi comunidad sobre IA y automatizaciones",
      icon: Users,
      href: "https://www.skool.com/boxxed-ai-6727/about?ref=494349c01611435b8fd952267c2bffbf",
      category: "community"
    }
  ];

  const appLinks = [
    {
      id: 1,
      title: "BotBoxx",
      description: "Instant AI Agent Demo",
      icon: ExternalLink,
      href: "https://botboxx-demo-vip.vercel.app",
      category: "apps"
    },
    {
      id: 2,
      title: "Viti AI",
      description: "Mockup Studio Pro - Coming Soon",
      icon: ExternalLink,
      href: "#",
      category: "apps",
      disabled: true
    },
    {
      id: 3,
      title: "Mussi AI",
      description: "Talent Pool for Talent Hunters - Coming Soon",
      icon: ExternalLink,
      href: "#",
      category: "apps",
      disabled: true
    }
  ];

  const quickLinks = [
    {
      id: 1,
      title: "📺 Últimos Videos",
      description: "Mira mi contenido más reciente",
      icon: Video,
      href: "https://www.youtube.com/@jordishifter/videos",
      category: "media"
    },
    {
      id: 2,
      title: "🛍️ Mis Automatizaciones",
      description: "Soluciones automatizadas para tu negocio",
      icon: ShoppingCart,
      href: "#",
      category: "products"
    },
    {
      id: 3,
      title: "🤝 Trabajemos Juntos",
      description: "Consulta por servicios personalizados",
      icon: Handshake,
      href: "https://www.instagram.com/jordishifter",
      category: "support"
    }
  ];

  const galleryImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Hero Section */}
        <section className="text-center pt-4 pb-8">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
                <img 
                  src="/profile.jpeg" 
                  alt="Jordi Shifter Profile" 
                  className="w-full h-full rounded-full object-cover border-4 border-white/20"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            VibeCoder | Automatizaciones & Agentes IA
          </h1>
          
          <div className="max-w-md mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              Especializado en:
            </p>
            
            <div className="inline-grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300 mb-8 text-left">
              <p>⚡ N8N</p>
              <p>🔎 Scraping de datos</p>
              <p>🤖 Multi-Agentes</p>
              <p>📝 Contenido con IA</p>
              <p>🌐 Web Apps - SaaS</p>
              <p>🚀 Smart Flows</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { icon: Twitter, href: "https://x.com/cryptoarchive88?s=21&t=1HFCohjBN3NZTVXjk2pj_A", label: "Twitter" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jordi-shifter-22158291/", label: "LinkedIn" },
              { icon: Youtube, href: "https://www.youtube.com/@jordishifter/videos", label: "YouTube" },
              { icon: Instagram, href: "https://www.instagram.com/jordishifter", label: "Instagram" },
              { icon: Music2, href: "https://www.tiktok.com/@jordishifterok?_t=ZM-8zST9n28wuE&_r=1", label: "TikTok" },
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="glass-card w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20"
                title={social.label || ""}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Comunidad Gratuita</h2>
          
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {communityLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.id}
                    href={link.href}
                    className="glass-card p-3 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 w-full max-w-sm"
                  >
                    <div className="flex flex-col items-center text-center space-y-1 md:space-y-3">
                      <div className="glass-card p-2 rounded-xl bg-white/10">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">{link.title}</h3>
                        <p className="text-gray-300 text-sm">{link.description}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Mis Web Apps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.id}
                  href={link.href}
                  className={`glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 bg-white/10 border border-white/20 block ${link.disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <CardContent className="p-3 md:p-6">
                    <div className="flex flex-col items-center space-y-1 md:space-y-3">
                      <div className="glass-card p-2 rounded-xl bg-white/10">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg md:text-xl font-semibold mb-1 text-white">{link.title}</h3>
                        <p className="text-gray-300 text-sm">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </a>
              );
            })}
          </div>
        </section>

        {/* Media Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Último Contenido</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* YouTube Video */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ynn9eA8Hq2Y"
                  title="creé una app de IA que genera contenido infinito gratis"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2">Creé una app de IA que genera contenido infinito gratis</h3>
                <p className="text-gray-300 text-sm">Y encima de todo autopostea en todas tus redes sociales.</p>
              </div>
            </div>
            
            {/* Image Gallery */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center">Algunas de mis automatizaciones</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((src, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img 
                      src={src} 
                      alt={`Galería item ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Links Rápidos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.id}
                  href={link.href}
                  className="glass-card p-3 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col items-center text-center space-y-1 md:space-y-3">
                    <div className="glass-card p-2 rounded-xl bg-white/10">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-1">{link.title}</h3>
                      <p className="text-gray-300 text-sm">{link.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Automations Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Templates de N8N</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {automations.map((automation) => (
              <div key={automation.id} className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <img 
                    src={automation.image} 
                    alt={automation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{automation.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{automation.description}</p>
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-xl md:text-2xl font-bold text-cyan-400">{automation.price}</span>
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                      Lo quiero
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Seguime</h2>
          
          <div className="flex justify-center space-x-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/jordishifter", name: "Instagram" },
              { icon: Music2, href: "https://www.tiktok.com/@jordishifterok?_t=ZM-8zST9n28wuE&_r=1", name: "TikTok" },
              { icon: Twitter, href: "https://x.com/cryptoarchive88?s=21&t=1HFCohjBN3NZTVXjk2pj_A", name: "Twitter" },
              { icon: Youtube, href: "https://www.youtube.com/@jordishifter/videos", name: "YouTube" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jordi-shifter-22158291/", name: "LinkedIn" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="glass-card w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20"
                title={social.name}
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="p-0 border-0 max-w-4xl bg-transparent shadow-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Imagen ampliada" 
              className="w-full h-auto rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
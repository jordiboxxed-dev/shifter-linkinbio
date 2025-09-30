"use client";

// Minor change to trigger Vercel deployment

import { useState, useEffect } from "react";
import { CardContent } from "@/components/ui/card";
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter,
  Users,
  Video,
  ShoppingCart,
  Music2,
  Handshake,
  Bot,
  Palette,
  Music,
  Calculator
} from "lucide-react";

const Index = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("Buenos días");
    else if (hour < 18) setTimeOfDay("Buenas tardes");
    else setTimeOfDay("Buenas noches");
  }, []);

  // Sample links data
  const communityLinks = [
    {
      id: 1,
      title: "Boxxed AI Hub",
      description: "Comunidad sobre IA y automatizaciones.",
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
      icon: Bot,
      href: "https://botboxxlanding.boxxed.agency/",
      category: "apps"
    },
    {
      id: 2,
      title: "Cuanto Valgo",
      description: "Calculadora de cuánto vales en cosas random.",
      icon: Calculator,
      href: "https://cuantovalgo.vercel.app/",
      category: "apps"
    },
    {
      id: 3,
      title: "Viti AI",
      description: "Mockup Studio Pro - Coming Soon",
      icon: Palette,
      href: "#",
      category: "apps",
      disabled: true
    },
    {
      id: 4,
      title: "Mussi AI",
      description: "Talent Pool for Talent Hunters - Coming Soon",
      icon: Music,
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
      href: "https://www.instagram.com/jordigpt/",
      category: "support"
    }
  ];

  const galleryImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
  ];

  const specializations = [
    "⚡ N8N",
    "🤖 Multi-Agentes",
    "📝 Contenido con IA",
    "🌐 Web Apps - SaaS",
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
        <section className="text-center pt-4 pb-0">
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
            VibeCoder | Infraestructura IA
          </h1>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              Especializado en:
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {specializations.map((skill, index) => (
                <span 
                  key={index}
                  className="glass-card px-3 py-1 rounded-full text-xs font-medium text-gray-200 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            {[
              { icon: Twitter, href: "https://x.com/cryptoarchive88?s=21&t=1HFCohjBN3NZTVXjk2pj_A", label: "Twitter" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jordi-shifter-22158291/", label: "LinkedIn" },
              { icon: Youtube, href: "https://www.youtube.com/@jordishifter/videos", label: "YouTube" },
              { icon: Instagram, href: "https://www.instagram.com/jordigpt", label: "Instagram" },
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
        <section className="py-4 md:py-8 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Comunidad Gratuita</h2>
          
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {communityLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.id}
                    href={link.href}
                    className="glass-card p-4 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 w-full max-w-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="glass-card p-2 rounded-xl bg-white/10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-grow text-center">
                        <h3 className="text-lg font-semibold">{link.title}</h3>
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
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="glass-card p-2 rounded-xl bg-white/10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-grow text-center">
                        <h3 className="text-lg font-semibold text-white">{link.title}</h3>
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
                  src="https://www.youtube.com/embed/kemcb6oLdkU"
                  title="Cree un agente de IA con WHATSAPP en 5 minutos (GRATIS)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2">Agente de IA con WhatsApp en 5 Minutos</h3>
                <p className="text-gray-300 text-sm">Aprende a conectar WhatsApp con la API de OpenAI usando N8N.</p>
              </div>
            </div>
            
            {/* Image Gallery */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-center">Algunas de mis automatizaciones</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-lg object-cover w-full h-full"
                  />
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
                  className="glass-card p-4 rounded-2xl hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="glass-card p-2 rounded-xl bg-white/10 flex-shrink-0">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-grow text-center">
                      <h3 className="text-lg font-semibold">{link.title}</h3>
                      <p className="text-gray-300 text-sm">{link.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-4 md:py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 gradient-text">Seguime</h2>
          
          <div className="flex justify-center space-x-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/jordigpt", name: "Instagram" },
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
    </div>
  );
};

export default Index;
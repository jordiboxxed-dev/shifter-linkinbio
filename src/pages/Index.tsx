"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter,
  Users,
  Video,
  ShoppingCart,
  ExternalLink,
  Music,
  MessageCircle,
  FileText,
  Share2
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

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
      price: "Desde $99/mes",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Creación de Contenido Automático",
      description: "Genera contenido para redes sociales sin intervención manual",
      price: "Desde $149/mes",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Scraping de Redes Sociales",
      description: "Recopila y analiza datos de múltiples plataformas sociales",
      price: "Desde $199/mes",
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
      href: "#",
      category: "community"
    }
  ];

  const appLinks = [
    {
      id: 1,
      title: "Botboxx",
      description: "Instant AI Agent Demo",
      icon: ExternalLink,
      href: "#",
      category: "apps"
    },
    {
      id: 2,
      title: "Viti AI",
      description: "Image Enhancement",
      icon: ExternalLink,
      href: "#",
      category: "apps"
    },
    {
      id: 3,
      title: "Musi AI",
      description: "Investing Pool for Talent Hunters",
      icon: ExternalLink,
      href: "#",
      category: "apps"
    }
  ];

  const quickLinks = [
    {
      id: 1,
      title: "📺 Últimos Videos",
      description: "Mira mi contenido más reciente",
      icon: Video,
      href: "#",
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
      title: "☕ Trabajemos Juntos",
      description: "Consulta por servicios personalizados",
      icon: MessageCircle,
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
            {timeOfDay}, soy Jordi
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
            VibeCoder Experto y desarrollador de automatizaciones y agentes de IA
          </p>
          
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Creo soluciones inteligentes que automatizan procesos y potencian negocios con inteligencia artificial. 
            Especializado en agentes conversacionales, automatizaciones N8N y scraping de datos.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { icon: Github, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Music, href: "#", label: "TikTok" }
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
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Comunidad Gratuita</h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              {communityLinks.map((link) => {
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
          </div>
        </section>

        {/* Apps Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Mis Web Apps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card key={link.id} className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 bg-white/10 border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="glass-card p-3 rounded-xl bg-white/10">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold mb-1 text-white">{link.title}</h3>
                        <p className="text-gray-300">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Links Rápidos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => {
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
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Último Contenido</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* YouTube Video */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-16 h-16 mx-auto text-cyan-400 mb-4" />
                  <p className="text-xl">Video Destacado</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Automatizaciones con N8N y Agentes de IA</h3>
                <p className="text-gray-300">Descubre cómo conectar herramientas y crear flujos de trabajo inteligentes</p>
              </div>
            </div>
            
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="glass-card rounded-xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Galería item ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automations Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Automatizaciones N8N</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automations.map((automation) => (
              <div key={automation.id} className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <img 
                    src={automation.image} 
                    alt={automation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{automation.title}</h3>
                  <p className="text-gray-300 mb-4">{automation.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-400">{automation.price}</span>
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                      Contratar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Seguime</h2>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Instagram, href: "#", name: "Instagram" },
              { icon: Music, href: "#", name: "TikTok" },
              { icon: Twitter, href: "#", name: "Twitter" },
              { icon: Youtube, href: "#", name: "YouTube" },
              { icon: Github, href: "#", name: "GitHub" },
              { icon: Linkedin, href: "#", name: "LinkedIn" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="glass-card w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-white/20"
                title={social.name}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
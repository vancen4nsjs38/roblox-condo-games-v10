"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Gamepad2, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 bg-[url('/cosmic-space-nebula-red-stars.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-red-400" />
              <span className="text-xl font-bold text-white">RobloxCondo</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#games" className="text-gray-300 hover:text-white transition-colors">
                Games
              </a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#community" className="text-gray-300 hover:text-white transition-colors">
                Community
              </a>
              <Button
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Join Now
              </Button>
            </div>
          </nav>

          <div className="mt-4 text-center">
            <div className="inline-flex items-center bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-white font-semibold">Like 2401 Online Horny Players</span>
              <span className="text-red-400 mx-2">•</span>
              <span className="text-white font-semibold">6 Active Games</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main title with 3D effect similar to the image */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 relative">
              <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
                ROBLOX
              </span>
              <br />
              <span className="bg-gradient-to-b from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-2xl">
                CONDO GAMES
              </span>
              {/* Geometric accent similar to the image */}
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-white to-gray-300 rotate-45 opacity-80 hidden lg:block" />
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the ultimate collection of exclusive Roblox condo games. Join thousands of players in immersive
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Play Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Games</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of exclusive Roblox condo games
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Your Sus Gas Station Worker */}
            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1757824191457.jpg-lMfF3C73ZR9DMf43QFxwZi5q2hFUDX.jpeg"
                    alt="Your Sus Gas Station Worker"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Your Sus Gas Station Worker</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Work at the gas station in this interactive roleplay experience
                  </p>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    onClick={() =>
                      window.open(
                        "https://roblox.cd/games/15932212022/your-sus-gas-station-worker?privateServerLinkCode=91215702331006086342674830357018",
                        "_blank",
                      )
                    }
                  >
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI NPC Friends */}
            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1757825135460.jpg-91DUul6qwAYaH9QcRefbEAjc9HPqzo.jpeg"
                    alt="AI NPC Friends"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">AI NPC Friends</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Chat and interact with AI-powered NPCs in this social experience
                  </p>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    onClick={() =>
                      window.open(
                        "https://roblox.cd/games/88848566014743/AI-NPC-Friends?privateServerLinkCode=91215702331006086342674830357018",
                        "_blank",
                      )
                    }
                  >
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Neko Girl Town */}
            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1757825138556.jpg-do79NTHZBVJToxSPcb43q6JvR2qtkc.jpeg"
                    alt="Neko Girl Town"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Neko Girl Town</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Explore a vibrant town filled with neko characters and adventures
                  </p>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    onClick={() =>
                      window.open(
                        "https://roblox.cd/games/126018438287036/Neko-Girl-Town?privateServerLinkCode=91215702331006086342674830357018",
                        "_blank",
                      )
                    }
                  >
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weird Neko Untitled Game */}
            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1757825141239.jpg-nPKsyZxXkFgGRiHlwfWWd5hnFkSJJ5.jpeg"
                    alt="Weird Neko Untitled Game"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Weird Neko Untitled Game</h3>
                  <p className="text-gray-300 text-sm mb-4">A unique and mysterious neko-themed adventure experience</p>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                    onClick={() =>
                      window.open(
                        "https://roblox.cd/games/76106209840076/Weird-Neko-Untitled-Game?privateServerLinkCode=91215702331006086342674830357018",
                        "_blank",
                      )
                    }
                  >
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the best Roblox condo games with premium features and active community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Premium Games</h3>
                <p className="text-gray-300">Access exclusive, high-quality condo games with regular updates</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Active Community</h3>
                <p className="text-gray-300">Join thousands of players in our vibrant gaming community</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast Access</h3>
                <p className="text-gray-300">Quick loading times and instant access to all games</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Playing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community today and discover amazing Roblox condo games
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-semibold">
              Get Started Now
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-red-500/30">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Roblox Condo Games. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

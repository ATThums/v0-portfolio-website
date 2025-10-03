"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Game {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  platform: string
  status: "Published" | "In Development" | "Beta"
  downloads?: string
  gameUrl?: string
  githubUrl?: string
}

export function GamesSection() {
  const { t } = useLanguage()
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)

  const games: Game[] = [
    {
      id: "1",
      title: "Revelação",
      description: "Jogo estilo Walking Simulator, com temática de suspense e terror",
      image: "/revelacao.png",
      tags: ["Unity", "C#", "Horror", "Walking Simulator"],
      platform: "PC",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/jogo-revelao",
    },
    {
      id: "2",
      title: "As Crônicas do Mago Negro",
      description: "As Crônicas do Mago Negro demo - Adventure game with magical elements",
      image: "/as-cronicas-do-mago-negro.jpg",
      tags: ["Unity", "C#", "Adventure", "Fantasy"],
      platform: "Browser/PC",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/as-cronicas-do-mago-negro-demo",
    },
    {
      id: "3",
      title: "Dodge Circle v.1.2",
      description: "Enhanced version of the award-winning platformer game",
      image: "/dodge-circle.png",
      tags: ["Unity", "C#", "Platformer", "Arcade"],
      platform: "PC",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/dodge-circle-v12",
    },
    {
      id: "4",
      title: "Dodge Circle v.1",
      description: "Game developed for Game Jam Plus 2022 - Finalist in the regional category - RS - Brazil",
      image: "/dodge-circle-v1.png",
      tags: ["Unity", "C#", "Game Jam", "Platformer"],
      platform: "PC",
      status: "Published",
      downloads: "1K+",
      gameUrl: "https://andersontt.itch.io/dodge-circle",
    },
    {
      id: "5",
      title: "Quadrimático",
      description: "Jogo desenvolvido para o Projeto de Game Mobile do Curso Tecnólogo em Jogos Digitais da UCS",
      image: "/quadrimatico.png",
      tags: ["Unity", "C#", "Educational", "Mobile"],
      platform: "Mobile",
      status: "Published",
      gameUrl: "https://andersontt.itch.io/quadrimatico",
    },
    {
      id: "6",
      title: "Cross the Road",
      description: "Classic arcade-style road crossing game with modern mechanics",
      image: "/cross-the-road.jpg",
      tags: ["JavaScript", "WebGL", "Browser", "Arcade"],
      platform: "Browser",
      status: "Published",
      downloads: "2K+",
      gameUrl: "https://andersontt.itch.io/cross-the-road",
    },
    {
      id: "7",
      title: "Space Combat",
      description: "A game inspired in Space Invaders with modern graphics and gameplay",
      image: "/space-combat.jpg",
      tags: ["JavaScript", "WebGL", "Space Shooter", "Retro"],
      platform: "Browser",
      status: "Published",
      downloads: "3K+",
      gameUrl: "https://andersontt.itch.io/space-combat",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-600 text-white border-green-600"
      case "In Development":
        return "bg-blue-600 text-white border-blue-600"
      case "Beta":
        return "bg-orange-600 text-white border-orange-600"
      default:
        return "bg-gray-600 text-white border-gray-600"
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("games.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("games.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scale-90 md:scale-100">
          {games.map((game) => (
            <Card
              key={game.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50"
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getStatusColor(game.status)} variant="outline">
                    {game.status}
                  </Badge>
                </div>
                {hoveredGame === game.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2">
                    {game.gameUrl && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(game.gameUrl, "_blank")}
                      >
                        <Play className="w-4 h-4" />
                        {t("games.playGame")}
                      </Button>
                    )}
                    {game.githubUrl && (
                      <Button size="sm" variant="outline" className="bg-background/90">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {game.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{game.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {game.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{game.platform}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className="relative rounded-2xl p-8 border border-primary/20 overflow-hidden"
            style={{
              backgroundImage: "url('/mysterious-man.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">{t("contact.title")}</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t("contact.send")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

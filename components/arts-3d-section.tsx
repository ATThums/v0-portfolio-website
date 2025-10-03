"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface Art3D {
  id: string
  title: string
  description: string
  image: string
  sketchfabUrl: string
}

export function Arts3DSection() {
  const { t } = useLanguage()

  const arts3D: Art3D[] = [
    {
      id: "dino",
      title: "Dino",
      description: "Personagem dinossauro fofo em estilo cartoon com design amigável",
      image: "/dino-3d.png",
      sketchfabUrl: "https://sketchfab.com/3d-models/dinotosketchfab-cea819114fc649839ee7297cf1005c59",
    },
    {
      id: "bestrobot",
      title: "BestRobot",
      description: "Robô futurista com esquema de cores branco e azul",
      image: "/bestrobot-3d.png",
      sketchfabUrl: "https://sketchfab.com/3d-models/bestrobot-df805899931240759e8105cf6a677f3d",
    },
    {
      id: "armybox",
      title: "ArmyBox",
      description: "Caixas de suprimentos militares com marca do exército e detalhes",
      image: "/armybox-3d.png",
      sketchfabUrl: "https://sketchfab.com/3d-models/armybox-3e39ed62a05f4033a1629e2a4df792eb",
    },
    {
      id: "character-final",
      title: "Character Final",
      description: "Personagem humano com camisa verde e texturas detalhadas",
      image: "/character-final-3d.png",
      sketchfabUrl: "https://sketchfab.com/3d-models/character-final-light-packed-e711947301624b959a4fa3c3ec1c6803",
    },
  ]

  return (
    <section id="arts-3d" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t("arts3d.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("arts3d.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scale-90 md:scale-100">
          {arts3D.map((art) => (
            <Card key={art.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={art.image || "/placeholder.svg"}
                  alt={art.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-serif font-bold mb-2">{art.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{art.description}</p>
                <Button asChild size="sm" className="w-full group/btn">
                  <a
                    href={art.sketchfabUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    {t("arts3d.viewModel")}
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group bg-transparent">
            <a
              href="https://sketchfab.com/AnderTThums"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t("arts3d.viewAll")}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

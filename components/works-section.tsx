"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

interface Work {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  year: string
  client?: string
  status: "Completed" | "Ongoing" | "Collaboration"
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function WorksSection() {
  const { t } = useLanguage()

  const works: Work[] = [
    {
      id: "1",
      title: "Plataforma E-commerce",
      description:
        "Solução moderna de e-commerce com filtragem avançada, integração de pagamentos e painel administrativo.",
      image: "/placeholder.svg?key=work1",
      category: "Desenvolvimento Web",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      year: "2024",
      client: "TechStore Inc.",
      status: "Completed",
      liveUrl: "#",
      githubUrl: "https://github.com/ATThums",
      featured: true,
    },
    {
      id: "2",
      title: "App Mobile de Fitness",
      description: "Aplicativo multiplataforma de rastreamento fitness com planos de treino e análise de progresso.",
      image: "/placeholder.svg?key=work2",
      category: "Desenvolvimento Mobile",
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      year: "2024",
      client: "FitLife Studio",
      status: "Completed",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "3",
      title: "Gerador de Arte IA",
      description: "Aplicação web para gerar e editar arte IA com prompts personalizados e estilos.",
      image: "/placeholder.svg?key=work3",
      category: "IA/ML",
      technologies: ["Python", "FastAPI", "Stable Diffusion", "React"],
      year: "2023",
      status: "Ongoing",
      githubUrl: "https://github.com/ATThums",
      featured: true,
    },
    {
      id: "4",
      title: "Site Corporativo",
      description: "Site corporativo profissional com integração CMS e otimização SEO.",
      image: "/placeholder.svg?key=work4",
      category: "Desenvolvimento Web",
      technologies: ["WordPress", "PHP", "MySQL", "SCSS"],
      year: "2023",
      client: "Business Solutions Ltd.",
      status: "Completed",
      liveUrl: "#",
    },
    {
      id: "5",
      title: "Dashboard de Analytics de Jogos",
      description:
        "Dashboard de analytics em tempo real para desenvolvedores de jogos rastrearem comportamento e métricas de jogadores.",
      image: "/placeholder.svg?key=work5",
      category: "Visualização de Dados",
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      year: "2023",
      status: "Collaboration",
      liveUrl: "#",
      githubUrl: "https://github.com/ATThums",
    },
    {
      id: "6",
      title: "Plataforma Educacional",
      description: "Plataforma de aprendizado online com streaming de vídeo, quizzes e rastreamento de progresso.",
      image: "/placeholder.svg?key=work6",
      category: "EdTech",
      technologies: ["Angular", "NestJS", "PostgreSQL", "AWS"],
      year: "2022",
      client: "EduTech Academy",
      status: "Completed",
      liveUrl: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-600 text-white border-green-600"
      case "Ongoing":
        return "bg-blue-600 text-white border-blue-600"
      case "Collaboration":
        return "bg-purple-600 text-white border-purple-600"
      default:
        return "bg-gray-600 text-white border-gray-600"
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("works.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("works.subtitle")}</p>
        </div>

        {/* All Works Grid - Removed featured section, showing all works together */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scale-90 md:scale-100">
          {works.map((work) => (
            <Card
              key={work.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getStatusColor(work.status)} variant="outline">
                    {work.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  {work.liveUrl && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                  {work.githubUrl && (
                    <Button size="sm" variant="outline" className="bg-background/90" asChild>
                      <a href={work.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {work.year}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{work.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {work.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{work.category}</span>
                  {work.client && <span className="text-primary font-medium">{work.client}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

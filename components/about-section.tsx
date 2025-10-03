"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Trophy, Target } from "lucide-react"

export function AboutSection() {
  const { t, language } = useLanguage()

  const highlights = [
    {
      icon: GraduationCap,
      title: t("about.education"),
      description: t("about.educationDesc"),
    },
    {
      icon: Briefcase,
      title: t("about.experience"),
      description: t("about.experienceDesc"),
    },
    {
      icon: Trophy,
      title: t("about.achievement"),
      description: t("about.achievementDesc"),
    },
    {
      icon: Target,
      title: t("about.current"),
      description: t("about.currentDesc"),
    },
  ]

  const passions =
    language === "pt"
      ? ["Tecnologia", "Criatividade", "Games", "Inovação", "Aprendizado Contínuo"]
      : ["Technology", "Creativity", "Games", "Innovation", "Continuous Learning"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Anderson Tonin Thums</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {t("about.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20 hover:border-primary/50 bg-card/80 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Icon */}
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                        <highlight.icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h4>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Tags */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t("about.passions")}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {passions.map((passion) => (
                  <Badge key={passion} variant="outline" className="bg-primary border-primary text-white">
                    {passion}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

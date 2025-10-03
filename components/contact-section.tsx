"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:ander.thums@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">{t("contact.title")}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {language === "pt"
                  ? "Estou sempre animado para discutir novos projetos, ideias criativas ou oportunidades de fazer parte das suas visões. Seja você procurando um desenvolvedor de jogos, artista digital ou colaborador técnico, adoraria ouvir de você."
                  : "I'm always excited to discuss new projects, creative ideas or opportunities to be part of your visions. Whether you're looking for a game developer, digital artist or technical collaborator, I'd love to hear from you."}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t("contact.email")}</h4>
                      <p className="text-muted-foreground">ander.thums@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{language === "pt" ? "Telefone" : "Phone"}</h4>
                      <p className="text-muted-foreground">+55 (54) 99120-9669</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-chart-2" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t("contact.location")}</h4>
                      <p className="text-muted-foreground">
                        {language === "pt" ? "Rio Grande do Sul, Brasil" : "Rio Grande do Sul, Brazil"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-2/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">{t("contact.availability")}</h4>
              <p className="text-muted-foreground text-sm mb-3">
                {language === "pt"
                  ? "Estou atualmente disponível para novos projetos e colaborações. Tempo de resposta é tipicamente dentro de 24 horas."
                  : "I'm currently available for new projects and collaborations. Response time is typically within 24 hours."}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-sm text-accent font-medium">{t("contact.available")}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    {t("contact.name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                    placeholder={language === "pt" ? "Seu nome completo" : "Your full name"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                    placeholder={language === "pt" ? "seu_email@mail.com" : "your_email@mail.com"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                    placeholder={
                      language === "pt"
                        ? "Conte-me sobre seu projeto, ideias ou como podemos trabalhar juntos..."
                        : "Tell me about your project, ideas or how we can work together..."
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            {language === "pt"
              ? "© 2024 Portfólio. Construído com Next.js, TypeScript e Tailwind CSS."
              : "© 2024 Portfolio. Built with Next.js, TypeScript and Tailwind CSS."}
          </p>
        </div>
      </div>
    </section>
  )
}

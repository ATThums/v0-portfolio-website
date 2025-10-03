"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Download, Heart, Filter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface AIArtwork {
  id: string
  title: string
  description: string
  image: string
  category: string
  prompt: string
  model: string
  style: string
  likes: number
  featured?: boolean
}

export function AIGallerySection() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>("Geral")

  const artworks: AIArtwork[] = [
    // Ficção Científica
    {
      id: "sci-fi-1",
      title: "Cidade Cyberpunk Noturna",
      description: "Metrópole futurista com arranha-céus iluminados por neon e veículos voadores",
      image: "/Cyber_City.jpg",
      category: "Ficção Científica",
      prompt:
        "Futuristic metropolis at night, towering skyscrapers illuminated with vibrant neon lights, flying vehicles zooming between buildings, bustling city streets with holographic billboards and glowing signs, reflections on wet surfaces, high-tech architecture blending glass and steel, atmospheric mist and glowing ambient lights, cinematic perspective, ultra-detailed, vibrant colors, cyberpunk aesthetic, dynamic and immersive cityscape, dramatic lighting and depth, futuristic skyline, futuristic vehicles in motion, highly detailed concept art, 8K, digital painting style.",
      model: "Leonardo Lightning XL",
      style: "Arte Conceitual",
      likes: 342,
      featured: true,
    },
    {
      id: "sci-fi-2",
      title: "Estação Espacial Orbital",
      description: "Complexo espacial avançado orbitando um planeta distante",
      image: "/space_station.jpg",
      category: "Ficção Científica",
      prompt: "A massive futuristic space station orbiting a vibrant, Earth-like planet.  The station has intricate, high-tech architecture with glowing lights, docking bays, antennas, and energy panels.  The planet below shows blue oceans, green continents, swirling clouds, and illuminated city lights near the surface.  Perspective: cinematic angle from slightly above and off to the side, emphasizing the scale and grandeur of the station.  Lighting: reflections of the planet on the station’s metallic surfaces, subtle lens flares from nearby stars, and glowing lights from the station.  Style: highly detailed, digitally rendered illustration, immersive sci-fi, futuristic and realistic, with a captivating and epic atmosphere.",
      model: "Leonardo Diffusion XL",
      style: "Arte Conceitual",
      likes: 287,
    },
    {
      id: "sci-fi-3",
      title: "Mulher Futurista",
      description: "Mulher vivendo em um futuro estilo Cyberpunk",
      image: "/Cyber_Girl.jpg",
      category: "Ficção Científica",
      prompt: "Ultra-detailed close-up portrait of a cyberpunk woman standing in a neon-lit futuristic city at night, rain-soaked streets reflecting vibrant pink, blue, and purple neon lights, holographic advertisements and digital billboards glowing in the background, flying vehicles and drones moving through the sky, the woman has cybernetic implants on her face and neck, glowing tattoos, high-tech visor partially covering her eyes, wet strands of hair sticking to her face, confident and intense expression, cinematic lighting with dramatic shadows, reflections on wet surfaces, smoke and mist around, futuristic fashion with armored jacket, glowing accessories and gadgets, gritty urban dystopian atmosphere, highly detailed skin textures, realistic facial features, dynamic composition, cinematic perspective, concept art, digital art, hyper-realistic, 8K resolution, artstation quality, rich color palette with neon contrasts, immersive environment, futuristic technology elements integrated into the scene, detailed reflections and ambient lighting, powerful and mysterious aura, perfect balance between realism and stylized cyberpunk aesthetic",
      model: "Leonardo Lightning XL",
      style: "Fotorrealista",
      likes: 198,
    },
    {
      id: "sci-fi-4",
      title: "Carro Futurista",
      description: "Carro estilo Cyberpunk em uma cidade futurista",
      image: "/cyberpunk_car.jpg",
      category: "Ficção Científica",
      prompt: "cyberpunk cityscape at night, neon lights, futuristic cars, holographic advertisements, rain, cinematic lighting",
      model: "Leonardo Lightning XL",
      style: "Fotorrealista",
      likes: 256,
    },

    // Fantasia
    {
      id: "fantasy-1",
      title: "Necromante",
      description: "Um feiticeiro em um templo",
      image: "/mysterious-man.jpg",
      category: "Fantasia",
      prompt: "A mysterious and visually striking character standing in a dimly lit environment. The character is a wise, experienced figure with sharp, intelligent eyes that reflect deep knowledge and understanding. He has subtle, confident facial expressions, suggesting he has seen much and knows more. Wearing elegant, dark-toned robes or modern minimalist attire with symbolic details (like runes, ancient patterns, or subtle futuristic tech), he exudes a quiet authority. A soft spotlight highlights his face and silhouette, creating contrast and depth. The background is abstract or shadowed, enhancing the sense of mystery. The overall aesthetic should suggest that this is someone who speaks rare but powerful truths, with a calm yet commanding presence.",
      model: "AlbedoBase XL",
      style: "Arte Conceitual",
      likes: 423,
      featured: true,
    },
    {
      id: "fantasy-2",
      title: "Sobrevivência",
      description: "Uma sobrevivente andando pela naturaza a procura de um lugar seguro",
      image: "/Lost_Future.jpg",
      category: "Fantasia",
      prompt: "The post-apocalyptic wilderness of America. Inside the figure, overgrown city ruins, rusted abandoned cars, and distant mountains under a glowing sunset. A lone figure with a bow walks through tall grass, showing resilience and strength. The wild nature slowly overtakes the man-made ruins. Background is a soft gradient of dark green and faded sienna with subtle atmospheric haze. Moody earthy palette of greens, golds, and amber, crisp contours, cinematic, highly detailed. --ar 16:9 --v 6 --q 2",
      model: "Leonardo Lightning XL",
      style: "Pintura Digital",
      likes: 367,
    },
    {
      id: "fantasy-3",
      title: "Cavaleiro da Morte",
      description: "Os Cavaleiros do apocalipse - Morte",
      image: "/Rider.jpg",
      category: "Fantasia",
      prompt: "Death (Pale Horse) - A terrifying rider on a ghostly pale horse, cloaked in shadow, his skeletal hand gripping a long scythe. Skulls and bones litter the ground, and spectral mist surrounds him as the air grows cold. His eyes glow faintly, radiating doom and inevitability. Cinematic, ultra-realistic, dark fantasy, highly detailed.",
      model: "Leonardo Lightning XL",
      style: "Pintura Digital",
      likes: 298,
    },
    {
      id: "fantasy-4",
      title: "Verdadeiro Rei",
      description: "Imagem com dupla esposição de Aragorn, de Senhor dos Anéis",
      image: "/Aragorn.png",
      category: "Fantasia",
      prompt: "Double exposure, Midjourney style, merging, blending, overlay double exposure image, Double Exposure style. An exceptional masterpiece by Yukisakura revealing a fantastic double exposure composition of Aragorn’s silhouette from The Lord of the Rings, harmoniously intertwined with the rugged and mystical landscapes of Middle-earth. Within the figure’s outline, rolling forests, misty mountains, and ancient ruins stretch across a vast horizon under a dramatic sky. Aragorn, clad in ranger armor with sword at his side, stands tall on a rocky hill, embodying courage, leadership, and determination. Beautiful tension builds as the wild natural world weaves through the human-made remnants within the silhouette, while the background maintains razor-sharp contrast, drawing focus to the layered narrative of heroism and adventure. Characterized by its moody earthy palette of deep greens, muted browns, and soft golden highlights, balanced with crisp deliberate contours that trace every line with epic precision. (Detailed:1.45). (Detailed background:1.4). The background is a soft gradient of forest green and faded stone gray with a subtle atmospheric haze — immersive but easy on the eyes, not overly bright, with the left side kept minimal and uncluttered for desktop icons. --ar 16:9 --v 6 --q 2",
      model: "Midjourney v6",
      style: "Arte Fantasia",
      likes: 334,
    },

    // Geral
    {
      id: "general-1",
      title: "Navio",
      description: "Imagem de um navio e sua triputação desembarcando um uma ilha",
      image: "/Ship.jpg",
      category: "Geral",
      prompt: "A dramatic night scene depicting a merchant ship during World War II, visible on the open sea, illuminated by a full moon. The sky is filled with heavy clouds, and there is a light mist over the water. The focus is on the ship, with details of its hull and structure visible.",
      model: "Leonardo Vision XL",
      style: "Pintura Digital",
      likes: 189,
      featured: true,
    },
    {
      id: "general-2",
      title: "Gangster de Londres",
      description: "Um gangster europeu do século 20",
      image: "/London_gangster_walking.png",
      category: "Geral",
      prompt: "A lone gangster walking down a dimly lit street in 1920s Birmingham, wearing a vintage three-piece suit, long overcoat, and flat cap. The scene is cinematic and atmospheric, with smoke from chimneys, wet cobblestone streets reflecting the lantern lights, and an industrial, gritty mood. The man carries himself with confidence and menace, just like in the series. Ultra-realistic, dramatic lighting, highly detailed, film noir style.",
      model: "Sora",
      style: "Fotorrealista",
      likes: 156,
    },
    {
      id: "general-3",
      title: "Família Feliz",
      description: "Pai e filha aproveitando um tempo juntos",
      image: "/happy_family.jpg",
      category: "Geral",
      prompt: "A happy family enjoying time together in a cozy countryside house. Parents and children are laughing and playing in a sunlit living room with wooden beams and rustic furniture. Large windows reveal a lush garden outside, with flowers, trees, and a small vegetable patch. Warm sunlight fills the room, casting soft shadows and creating a cheerful, inviting atmosphere. The family is interacting naturally — hugging, playing board games, or reading books. The scene is detailed, heartwarming, and colorful, with a cozy, rustic, and peaceful vibe. Highly detailed, cinematic, realistic illustration, soft lighting, vibrant colors, warm tones.",
      model: "Leonardo Lightning XL",
      style: "Fotorrealista",
      likes: 134,
    },
    {
      id: "general-4",
      title: "Desenvolvedor",
      description: "Um desenvolvedor em seu ambiente de trabalho",
      image: "/game_developer.jpg",
      category: "Geral",
      prompt: "Create an engaging image of a game developer in your workplace. Imagine him sitting at a desk  with development equipment, such as a computer with two monitors displaying game code and graphics, a mechanical keyboard, and an ergonomic mouse. The room should reflect a creative and inspiring environment, with details like gaming posters, stacks of books on design and programming, and soft lights that create a cozy atmosphere. The developer, focused and inspired, is wearing headphones and typing furiously, with a determined and enthusiastic look, immersed in his creative project.",
      model: "Leonardo Anime XL",
      style: "Illustration",
      likes: 223,
    },
  ]

  const categories = ["Geral", "Ficção Científica", "Fantasia"]

  const filteredArtworks = artworks.filter((art) => art.category === selectedCategory)

  return (
    <section
      className="py-20 relative min-h-screen"
      style={{
        backgroundImage: "url('/the-last-days.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[80%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">{t("gallery.title")}</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary bg-black/50 text-white border-white/20"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Filtered Artworks Grid */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            {selectedCategory} ({filteredArtworks.length} {t("gallery.images")})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 scale-90 md:scale-100">
            {filteredArtworks.map((artwork) => (
              <Dialog key={artwork.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50 bg-black/30 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="text-xs bg-background/90">
                          {artwork.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/70 text-white p-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="font-medium">{artwork.title}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <Heart className="w-3 h-3" />
                            {artwork.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <div className="space-y-4">
                    <Image
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-serif font-bold">{artwork.title}</h3>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-muted-foreground">{artwork.likes} likes</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{artwork.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Modelo:</span> {artwork.model}
                        </div>
                        <div>
                          <span className="font-medium">Estilo:</span> {artwork.style}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <span className="font-medium text-sm">Prompt:</span>
                        <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg font-mono">
                          {artwork.prompt}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          {t("gallery.download")}
                        </Button>
                        <Button variant="outline">
                          <Heart className="w-4 h-4 mr-2" />
                          {t("gallery.like")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm">
            {t("gallery.totalImages")}: {artworks.length} | {t("gallery.currentCategory")}: {selectedCategory}
          </p>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Scale, TrendingUp } from "lucide-react";

export default function Home() {
  const featuredNews = [
    {
      id: 1,
      title: "Novas Diretrizes para Trabalho Remoto em 2024",
      category: "Legislação",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      excerpt: "Confira as principais mudanças na regulamentação do trabalho remoto e híbrido para o próximo ano."
    },
    {
      id: 2,
      title: "Tendências em Benefícios Corporativos",
      category: "RH",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      excerpt: "Descubra quais são os benefícios mais valorizados pelos colaboradores em 2024."
    },
    {
      id: 3,
      title: "Reforma Trabalhista: Principais Impactos",
      category: "Legislação",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      excerpt: "Análise completa sobre as mudanças mais relevantes na legislação trabalhista."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seu Portal de Notícias sobre Direito Trabalhista e RH
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Mantenha-se atualizado com as últimas notícias, mudanças na legislação e
              melhores práticas em recursos humanos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Explorar Notícias
              </Button>
              <Button size="lg" variant="outline">
                Assinar Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Notícias em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary mb-2">{news.category}</div>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>
                  <Button variant="link" className="px-0">
                    Ler mais →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore por Categoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Scale className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Legislação</h3>
                <p className="text-muted-foreground mb-4">
                  Atualizações e análises sobre leis trabalhistas
                </p>
                <Button variant="outline">Explorar</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Recursos Humanos</h3>
                <p className="text-muted-foreground mb-4">
                  Melhores práticas e tendências em RH
                </p>
                <Button variant="outline">Explorar</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Mercado</h3>
                <p className="text-muted-foreground mb-4">
                  Análises e tendências do mercado de trabalho
                </p>
                <Button variant="outline">Explorar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
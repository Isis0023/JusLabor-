import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, FileText, BookOpen } from "lucide-react";
import { legislationData } from "@/lib/data";
import LegislationCard from "@/components/legislation-card";

export default function LegislacaoPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Legislação Trabalhista</h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe as principais atualizações e mudanças na legislação trabalhista brasileira
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {legislationData.categories.map((category) => (
            <Card key={category.id} className="text-center">
              <CardContent className="pt-6">
                <category.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline">Explorar</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Updates */}
        <h2 className="text-3xl font-bold mb-8">Atualizações Recentes</h2>
        <div className="grid grid-cols-1 gap-6">
          {legislationData.updates.map((update) => (
            <LegislationCard key={update.id} legislation={update} />
          ))}
        </div>
      </div>
    </div>
  );
}
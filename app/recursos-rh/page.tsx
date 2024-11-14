import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Download, FileText } from "lucide-react";
import { hrResourcesData } from "@/lib/data";
import ResourceCard from "@/components/resource-card";

export default function RecursosRHPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recursos para RH</h1>
          <p className="text-lg text-muted-foreground">
            Ferramentas, templates e guias para profissionais de Recursos Humanos
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hrResourcesData.featured.map((resource) => (
            <Card key={resource.id} className="relative overflow-hidden group">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <resource.icon className="w-12 h-12 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hrResourcesData.categories.map((category) => (
            <ResourceCard key={category.id} resource={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
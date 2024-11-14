import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ResourceCardProps {
  resource: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    items: string[];
  };
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <resource.icon className="w-10 h-10 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
        <p className="text-muted-foreground mb-4">{resource.description}</p>
        <ul className="space-y-2 mb-6">
          {resource.items.map((item, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              {item}
            </li>
          ))}
        </ul>
        <Button className="w-full">Acessar Recursos</Button>
      </CardContent>
    </Card>
  );
}
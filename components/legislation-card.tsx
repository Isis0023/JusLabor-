import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface LegislationCardProps {
  legislation: {
    id: number;
    title: string;
    description: string;
    date: string;
    type: string;
  };
}

export default function LegislationCard({ legislation }: LegislationCardProps) {
  return (
    <Card>
      <CardContent className="flex items-start gap-4 p-6">
        <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">{legislation.type}</span>
            <span className="text-sm text-muted-foreground">{formatDate(legislation.date)}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{legislation.title}</h3>
          <p className="text-muted-foreground mb-4">{legislation.description}</p>
          <Button variant="outline">Ler na íntegra</Button>
        </div>
      </CardContent>
    </Card>
  );
}
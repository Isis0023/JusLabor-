import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    date: string;
  };
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary">{news.category}</span>
          <span className="text-sm text-muted-foreground">{formatDate(news.date)}</span>
        </div>
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
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import NewsCard from "@/components/news-card";
import { newsData } from "@/lib/data";

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Últimas Notícias</h1>
        
        {/* Search Bar */}
        <div className="relative mb-12 max-w-xl">
          <Input
            type="search"
            placeholder="Buscar notícias..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar mais notícias
          </Button>
        </div>
      </div>
    </div>
  );
}
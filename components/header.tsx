"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Users, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-6 w-6" />
            <span className="text-xl font-bold">JusLabor News</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/noticias" className="hover:text-primary">Notícias</Link>
            <Link href="/legislacao" className="hover:text-primary">Legislação</Link>
            <Link href="/recursos-rh" className="hover:text-primary">Recursos RH</Link>
            <ModeToggle />
            <Button>Newsletter</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link href="/noticias" className="hover:text-primary py-2">Notícias</Link>
              <Link href="/legislacao" className="hover:text-primary py-2">Legislação</Link>
              <Link href="/recursos-rh" className="hover:text-primary py-2">Recursos RH</Link>
              <Button className="w-full">Newsletter</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
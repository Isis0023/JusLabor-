import { Scale } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6" />
              <span className="text-xl font-bold">JusLabor News</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu portal de notícias sobre direito trabalhista, RH e legislação
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/noticias" className="hover:text-primary">Notícias</Link></li>
              <li><Link href="/legislacao" className="hover:text-primary">Legislação</Link></li>
              <li><Link href="/recursos-rh" className="hover:text-primary">Recursos RH</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacidade" className="hover:text-primary">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-primary">Termos de Uso</Link></li>
              <li><Link href="/cookies" className="hover:text-primary">Política de Cookies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>contato@juslabor.news</li>
              <li>+55 (61) 99819-9625</li>
              <li>Brasília, DF</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} JusLabor News. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
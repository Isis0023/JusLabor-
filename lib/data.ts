import { FileText, BookOpen, Users, ClipboardList, Building, Scale, Brain, Target, ChartBar } from 'lucide-react';

export const newsData = [
  {
    id: 1,
    title: "Novas Diretrizes para Trabalho Remoto em 2024",
    category: "Legislação",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    excerpt: "Confira as principais mudanças na regulamentação do trabalho remoto e híbrido para o próximo ano.",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Tendências em Benefícios Corporativos",
    category: "RH",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    excerpt: "Descubra quais são os benefícios mais valorizados pelos colaboradores em 2024.",
    date: "2024-03-14"
  },
  {
    id: 3,
    title: "Reforma Trabalhista: Principais Impactos",
    category: "Legislação",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    excerpt: "Análise completa sobre as mudanças mais relevantes na legislação trabalhista.",
    date: "2024-03-13"
  },
  // Add more news items...
];

export const legislationData = {
  categories: [
    {
      id: 1,
      title: "CLT",
      description: "Consolidação das Leis do Trabalho e suas atualizações",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Normas Regulamentadoras",
      description: "NRs e legislação de segurança do trabalho",
      icon: FileText
    },
    {
      id: 3,
      title: "Jurisprudência",
      description: "Decisões e interpretações dos tribunais",
      icon: Scale
    }
  ],
  updates: [
    {
      id: 1,
      title: "Nova Lei do Teletrabalho",
      description: "Alterações nas regras do trabalho remoto e híbrido",
      date: "2024-03-15",
      type: "Lei Federal"
    },
    {
      id: 2,
      title: "Atualização da NR-17",
      description: "Mudanças nas normas de ergonomia e condições de trabalho",
      date: "2024-03-10",
      type: "Norma Regulamentadora"
    },
    // Add more updates...
  ]
};

export const hrResourcesData = {
  featured: [
    {
      id: 1,
      title: "Kit de Onboarding",
      description: "Templates e checklists para integração de novos colaboradores",
      icon: ClipboardList
    },
    {
      id: 2,
      title: "Avaliação de Desempenho",
      description: "Formulários e guias para feedback e avaliação",
      icon: Target
    },
    {
      id: 3,
      title: "Pesquisa de Clima",
      description: "Modelos de questionários e análise de resultados",
      icon: ChartBar
    }
  ],
  categories: [
    {
      id: 1,
      title: "Desenvolvimento Organizacional",
      description: "Recursos para evolução e cultura organizacional",
      icon: Building,
      items: [
        "Mapeamento de competências",
        "Plano de carreira",
        "Gestão de mudanças"
      ]
    },
    {
      id: 2,
      title: "Treinamento e Desenvolvimento",
      description: "Materiais para capacitação de equipes",
      icon: Brain,
      items: [
        "Programas de mentoria",
        "Trilhas de aprendizagem",
        "Avaliação de resultados"
      ]
    },
    // Add more categories...
  ]
};
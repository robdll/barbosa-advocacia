export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
} as const;

export const WHATSAPP_NUMBER = '5577999999999'; // Replace with actual number
export const WHATSAPP_MESSAGE = 'Olá, gostaria de mais informações sobre os serviços jurídicos.';

export const SERVICES = [
  {
    title: 'Direito Civil',
    description: 'Atuação em questões relacionadas a contratos, propriedade, responsabilidade civil e demais.',
    icon: 'Scale',
  },
  {
    title: 'Direito Trabalhista',
    description: 'Defesa dos direitos trabalhistas, negociações coletivas e assessoria em relações de trabalho.',
    icon: 'Briefcase',
  },
  {
    title: 'Direito de Família',
    description: 'Suporte jurídico em divórcios, guarda de filhos, pensão alimentícia e questões patrimoniais.',
    icon: 'Heart',
  },
  {
    title: 'Direito Empresarial',
    description: 'Consultoria jurídica empresarial, constituição de empresas e assessoria em questões comerciais.',
    icon: 'Building2',
  },
  {
    title: 'Direito Criminal',
    description: 'Defesa criminal com expertise em processos penais e proteção dos direitos fundamentais.',
    icon: 'Shield',
  },
  {
    title: 'Direito Previdenciário',
    description: 'Assessoria em questões previdenciárias, aposentadorias e benefícios do INSS.',
    icon: 'FileText',
  },
] as const;

export const FIRM_NAME = 'Barbosa Advocacia';
export const FIRM_LOCATION = 'Vitória da Conquista, Bahia';
export const CURRENT_YEAR = new Date().getFullYear();


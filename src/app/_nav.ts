interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'cui-home'
  },
  {
    divider: true
  },
  {
    name: 'Cadastros',
    url: '/cadastro',
    icon: 'cui-user-follow',
    children: [
      {
        name: 'Clientes',
        url: '#',
      },
      {
        name: 'Redes',
        url: '#',
      },
      {
        name: 'Usuários',
        url: '#',
      },
      {
        name: 'Fabricantes',
        url: '#',
      },
      {
        name: 'Modelos',
        url: '#',
      }
    ]
  },
  {
    name: 'RDS7',
    url: '#',
    icon: 'cui-bookmark',
    children: [
      {
        name: 'Configurações',
        url: '#',
      },
      {
        name: 'Relatório Gerencial',
        url: '#',
      }
    ]
  },
  {
    name: 'LIC7',
    url: '#',
    icon: 'cui-bookmark',
    children: [
      {
        name: 'Consulta Licenças',
        url: '#',
      },
      {
        name: 'Histórico de Terminais',
        url: '#',
      },
      {
        name: 'Bloqueio/Desbloqueio de Terminais',
        url: '#',
      },
      {
        name: 'Configurações',
        url: '#',
      },
      {
        name: 'Relatório Gerencial',
        url: '#',
      },
      {
        name: 'Lote Licenças',
        url: '#',
      }
    ]
  },
  {
    name: 'TMS7',
    url: '#',
    icon: 'cui-bookmark',
    children: [
      {
        name: 'Moeda',
        url: '#',
      },
      {
        name: 'Meio de Comunicação',
        url: '#',
      },
      {
        name: 'Configurações',
        url: '#',
      },
      {
        name: 'Indicadores de Estatística',
        url: '#',
      }
    ]
  },
  {
    name: 'Relatórios',
    url: '#',
    icon: 'cui-chart',
    children: [
      {
        name: 'Histórico de Acessos',
        url: '#',
      },
      {
        name: 'Auditoria',
        url: '#',
      },
      {
        name: 'Usuários',
        url: '#',
      },
      {
        name: 'Mapa da Rede',
        url: '#',
      }
    ]
  },
  {
    name: 'Faturamentos',
    url: '#',
    icon: 'cui-calculator',
    children: [
      {
        name: 'Processadora',
        url: '#',
      },
      {
        name: 'Gera Fatura',
        url: '#',
      }
    ]
  },
  {
    name: 'Manutenção',
    url: '#',
    icon: 'cui-wrench',
    children: [
      {
        name: 'Usuário Administrativo',
        url: '#',
      },
      {
        name: 'Configuração Adm',
        url: '#',
      },
      {
        name: 'Configurações dos Módulos',
        url: '#',
      },
      {
        name: 'Monitoramento Serviços',
        url: '#',
      },
      {
        name: 'Expurgo de Logs',
        url: '#',
      },
      {
        name: 'Logs',
        url: '#',
      },
      {
        name: 'Cadastro Cidades',
        url: '#',
      }
    ]
  },
  {
    name: 'Ajuda',
    url: '#',
    icon: 'cui-info',
    children: [
      {
        name: 'Sobre a GER7',
        url: '#',
      },
      {
        name: 'Versões',
        url: '#',
      },
      {
        name: 'Manual Administrativo',
        url: '#',
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Sair',
    url: '/',
    icon: 'cui-account-logout'
  }
];

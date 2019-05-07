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
    name: 'Device Manager',
    url: '/device',
    icon: 'cui-wrench',
    children: [
      {
        name: 'Perfil de Terminal',
        url: '/device/profile',
      },
      {
        name: 'Grupo de Terminais',
        url: '/device/group',
      },
      {
        name: 'Terminal',
        url: '/device/terminal',
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

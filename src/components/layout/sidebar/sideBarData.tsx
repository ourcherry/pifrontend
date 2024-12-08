import {
  BookOpen,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

export const sideBarData = {
  user: {
    name: 'Admin',
    email: 'admin@hos21.com',
    avatar: '',
  },
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'home',
          url: '/',
        },
      ],
    },
  ],
};

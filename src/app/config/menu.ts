export default [
  {
    id: 'dashboard',
    icon: 'file',
    name: '控制台',
    router: 'dashboard',
  },
  {
    id: 'security',
    icon: 'schedule',
    name: '安全管理',
    children: [
      {
        id: 'security-org',
        icon: 'book',
        name: '机构管理',
        parentId: 'security',
        router: 'security-org',
      },
      {
        id: 'security-user',
        icon: 'user',
        name: '用户管理',
        parentId: 'security',
        router: 'security-user',
      },
      {
        id: 'security-role',
        icon: 'team',
        name: '角色管理',
        parentId: 'security',
        router: 'security-role',
      },
      {
        id: 'security-func',
        icon: 'switcher',
        name: '菜单管理',
        parentId: 'security',
        router: 'security-func',
      },
    ]
  },
  {
    id: 'gaodemap',
    icon: 'file',
    name: '高德地图',
    router: 'gaodemap',
  },
];

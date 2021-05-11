import React from 'react';
import CImg from '@coreui/icons-react';
import sidebarIcons from '../assets';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Главная',
    to: '/dashboard',
    icon: <CImg src={ sidebarIcons.graph }  fluid alt="Graph" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Транспорт',
    to: '/pages/transport',
    icon: <CImg src={ sidebarIcons.scooter }  fluid alt="scooter" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Поездки',
    to: '/theme/typography',
    icon: <CImg src={ sidebarIcons.place }  fluid alt="place" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Безопасность',
    to: '/theme/typography',
    icon: <CImg src={ sidebarIcons.sequrity }  fluid alt="sequrity" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Пользователи',
    to: '/theme/typography',
    icon: <CImg src={ sidebarIcons.twoPersons }  fluid alt="twoPersons" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Клиенты',
    to: '/theme/typography',
    icon: <CImg src={ sidebarIcons.clients }  fluid alt="clients" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Промокоды',
    to: '/theme/typography',
    icon: <CImg src={ sidebarIcons.persent }  fluid alt="persent" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Настройки',
    to: '/theme/typography',
    icon: <CImg src={ sidebarIcons.settings }  fluid alt="settings" />,
  },
]

export default _nav

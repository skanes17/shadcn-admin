import {
  ChevronsRight,
  Crosshair,
  LayoutDashboard,
  MapPin,
  Rocket,
  ShieldCheck,
  User,
} from 'lucide-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

const size = 22

export const sidelinks: SideLink[] = [
  {
    title: 'Overview',
    label: '', // ! Use label key to add a little notification symbol (could mean nested pages etc)
    href: '/',
    icon: <User size={size} />,
  },
  {
    title: 'Stats',
    label: '', // ! Use label key to add a little notification symbol (could mean nested pages etc)
    href: '/stats',
    icon: <LayoutDashboard size={size} />,
  },
  {
    title: 'Shots',
    label: '',
    href: '/shots',
    icon: <Crosshair size={size} />,
  },
  {
    title: 'Aerials',
    label: '',
    href: '/aerials',
    icon: <Rocket size={size} />,
  },
  {
    title: 'Defense',
    label: '',
    href: '/defense',
    icon: <ShieldCheck size={size} />,
  },
  {
    title: 'Movement',
    label: '',
    href: '/movement',
    icon: <ChevronsRight size={size} />,
  },
  {
    title: 'Positioning',
    label: '',
    href: '/positioning',
    icon: <MapPin size={size} />,
  },
  // {
  //   title: 'Rotations',
  //   label: '',
  //   href: '/rotations',
  //   icon: <RefreshCcw size={size} />,
  // },
  // {
  //   title: 'Extra Components',
  //   label: '',
  //   href: '/extra-components',
  //   icon: <IconComponents size={size} />,
  // },
  // {
  //   title: 'Error Pages',
  //   label: '',
  //   href: '',
  //   icon: <IconExclamationCircle size={size} />,
  //   sub: [
  //     {
  //       title: 'Not Found',
  //       label: '',
  //       href: '/404',
  //       icon: <IconError404 size={size} />,
  //     },
  //     {
  //       title: 'Internal Server Error',
  //       label: '',
  //       href: '/500',
  //       icon: <IconServerOff size={size} />,
  //     },
  //     {
  //       title: 'Maintenance Error',
  //       label: '',
  //       href: '/503',
  //       icon: <IconBarrierBlock size={size} />,
  //     },
  //     {
  //       title: 'Unauthorised Error',
  //       label: '',
  //       href: '/401',
  //       icon: <IconLock size={size} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Settings',
  //   label: '',
  //   href: '/settings',
  //   icon: <IconSettings size={size} />,
  // },
]

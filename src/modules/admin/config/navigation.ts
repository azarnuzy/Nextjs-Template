import { LayoutDashboard, Settings, Users } from 'lucide-react';

export const adminNavigation = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
] as const;

import type { Metadata } from 'next';

import { AdminDashboard } from '@/modules/admin';

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Administration overview.',
};

export default function AdminPage() {
  return <AdminDashboard />;
}

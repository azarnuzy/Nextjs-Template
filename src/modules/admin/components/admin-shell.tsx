import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { adminNavigation } from '../config/navigation';

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-950 lg:grid lg:grid-cols-[16rem_1fr]'>
      <aside className='bg-dark flex flex-col gap-8 p-6 text-white lg:min-h-screen'>
        <Link className='text-xl font-bold' href='/'>
          Starter Admin
        </Link>
        <nav aria-label='Admin navigation' className='flex gap-2 lg:flex-col'>
          {adminNavigation.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              className='hover:bg-primary-600 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors'
              href={href}
            >
              <Icon aria-hidden='true' size={18} />
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className='mt-auto flex items-center gap-3 text-sm text-gray-300 hover:text-white'
          href='/auth/login'
        >
          <LogOut aria-hidden='true' size={18} />
          Sign out
        </Link>
      </aside>

      <div>
        <header className='border-b border-gray-200 bg-white px-6 py-4 sm:px-8'>
          <div className='flex items-center justify-between gap-4'>
            <p className='font-semibold'>Administration</p>
            <div className='bg-primary-100 text-primary-800 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold'>
              AD
            </div>
          </div>
        </header>
        <main className='p-6 sm:p-8'>{children}</main>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className='grid min-h-screen bg-gray-50 lg:grid-cols-2'>
      <section className='bg-dark hidden p-12 text-white lg:flex lg:flex-col lg:justify-between'>
        <Link className='text-xl font-bold' href='/'>
          Starter
        </Link>
        <div>
          <p className='text-primary-300 text-sm font-semibold tracking-widest uppercase'>
            Auth module
          </p>
          <h1 className='mt-3 max-w-xl text-4xl leading-tight'>
            A focused entry point for every protected area.
          </h1>
          <p className='mt-4 max-w-lg text-gray-300'>
            Replace the demo adapter with Auth.js, Clerk, Supabase, or your own
            identity provider without moving route files.
          </p>
        </div>
      </section>

      <section className='flex items-center justify-center p-6 sm:p-12'>
        <div className='w-full max-w-md'>{children}</div>
      </section>
    </main>
  );
}

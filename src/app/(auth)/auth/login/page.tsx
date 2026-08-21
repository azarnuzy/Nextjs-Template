import type { Metadata } from 'next';

import { SignInForm } from '@/modules/auth';

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to access the admin area.',
};

export default function SignInPage() {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8'>
      <p className='text-primary-600 text-sm font-semibold'>Welcome back</p>
      <h2 className='mt-2 text-3xl'>Sign in to your account</h2>
      <p className='mt-2 mb-8 text-sm text-gray-600'>
        This starter validates the form locally. Connect an authentication
        adapter before using it in production.
      </p>
      <SignInForm />
    </div>
  );
}

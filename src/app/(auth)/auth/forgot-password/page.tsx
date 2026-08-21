import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Forgot password',
};

export default function ForgotPasswordPage() {
  return (
    <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8'>
      <p className='text-primary-600 text-sm font-semibold'>Account recovery</p>
      <h2 className='mt-2 text-3xl'>Forgot your password?</h2>
      <p className='mt-3 text-gray-600'>
        Add the recovery flow for your chosen authentication provider here.
      </p>
      <Link
        className='text-primary-600 hover:text-primary-700 mt-8 inline-block font-medium'
        href='/auth/login'
      >
        Back to sign in
      </Link>
    </div>
  );
}

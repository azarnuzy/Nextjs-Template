'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

import Button from '@/components/buttons/Button';

import { signInSchema } from '../schemas/sign-in-schema';

export function SignInForm() {
  const [message, setMessage] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = signInSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
      rememberMe: formData.get('rememberMe') === 'on',
    });

    if (!result.success) {
      setMessage(result.error.issues[0]?.message ?? 'Invalid credentials.');
      return;
    }

    setMessage(
      'Form is valid. Connect your authentication adapter to complete sign in.',
    );
  }

  return (
    <form className='space-y-5' onSubmit={handleSubmit} noValidate>
      <div>
        <label className='mb-1.5 block text-sm font-medium' htmlFor='email'>
          Email
        </label>
        <input
          className='focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300'
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          placeholder='you@example.com'
          required
        />
      </div>

      <div>
        <div className='mb-1.5 flex items-center justify-between gap-4'>
          <label className='text-sm font-medium' htmlFor='password'>
            Password
          </label>
          <Link
            className='text-primary-600 hover:text-primary-700 text-sm font-medium'
            href='/auth/forgot-password'
          >
            Forgot password?
          </Link>
        </div>
        <input
          className='focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border-gray-300'
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          placeholder='At least 8 characters'
          minLength={8}
          required
        />
      </div>

      <label className='flex items-center gap-2 text-sm text-gray-600'>
        <input
          className='text-primary-600 focus:ring-primary-500 rounded border-gray-300'
          name='rememberMe'
          type='checkbox'
        />
        Remember me
      </label>

      {message && (
        <p
          className='rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700'
          role='status'
        >
          {message}
        </p>
      )}

      <Button className='w-full justify-center' type='submit'>
        Sign in
      </Button>
    </form>
  );
}

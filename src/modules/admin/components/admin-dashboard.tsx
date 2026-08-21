const metrics = [
  { label: 'Total users', value: '1,284', change: '+12%' },
  { label: 'Active sessions', value: '342', change: '+8%' },
  { label: 'Conversion', value: '4.8%', change: '+0.6%' },
] as const;

export function AdminDashboard() {
  return (
    <div className='mx-auto max-w-6xl'>
      <p className='text-primary-600 text-sm font-semibold'>Overview</p>
      <h1 className='mt-2'>Admin dashboard</h1>
      <p className='mt-2 text-gray-600'>
        Use this module as the home for protected administration features.
      </p>

      <div className='mt-8 grid gap-4 md:grid-cols-3'>
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'
          >
            <p className='text-sm text-gray-500'>{metric.label}</p>
            <div className='mt-3 flex items-end justify-between gap-4'>
              <p className='text-3xl font-bold'>{metric.value}</p>
              <p className='text-sm font-semibold text-emerald-600'>
                {metric.change}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className='mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5'>
        <h2 className='text-lg'>Authentication guard required</h2>
        <p className='mt-2 text-sm text-amber-900'>
          This route is intentionally open in the starter. Add a guard in
          <code className='mx-1 rounded bg-amber-100 px-1 py-0.5'>
            proxy.ts
          </code>
          after selecting an authentication provider.
        </p>
      </section>
    </div>
  );
}

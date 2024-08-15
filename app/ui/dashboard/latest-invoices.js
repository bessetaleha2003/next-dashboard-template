// /app/ui/dashboard/latest-invoices.jsx
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function LatestInvoices({ latestInvoices }) {
  return (
    <div className="flex flex-col w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex flex-col justify-between p-4 grow rounded-xl bg-gray-50">
<<<<<<< HEAD
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="px-6 bg-white">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate md:text-base">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
=======
        <div className="px-6 bg-white">
          {latestInvoices.map((invoice, i) => (
            <div
              key={invoice.id}
              className={`flex flex-row items-center justify-between py-4 ${i !== 0 ? 'border-t' : ''}`}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate md:text-base">
                    {invoice.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {invoice.email}
                  </p>
>>>>>>> 75c8c1ae91c6fad3449b5f06d25afb046cc13e79
                </div>
              </div>
<<<<<<< HEAD
            );
          })}
=======
              <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                {invoice.amount}
              </p>
            </div>
          ))}
>>>>>>> 75c8c1ae91c6fad3449b5f06d25afb046cc13e79
        </div>
        <div className="flex items-center pt-6 pb-2">
          <ArrowPathIcon className="w-5 h-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}

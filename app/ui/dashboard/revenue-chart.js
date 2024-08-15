import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default function RevenueChart({ revenue }) {
  const chartHeight = 350;

<<<<<<< HEAD
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

=======
  // Aktifkan kode untuk mengenerate label sumbu Y dan topLabel
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  // Tampilkan pesan jika tidak ada data revenue
>>>>>>> 75c8c1ae91c6fad3449b5f06d25afb046cc13e79
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
<<<<<<< HEAD
      {/* NOTE: Uncomment this code in Chapter 7 */}
=======

>>>>>>> 75c8c1ae91c6fad3449b5f06d25afb046cc13e79
      <div className="p-4 rounded-xl bg-gray-50">
        <div className="grid items-end grid-cols-12 gap-2 p-4 mt-0 bg-white rounded-md sm:grid-cols-13 md:gap-4">
          <div
            className="flex-col justify-between hidden mb-6 text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-blue-300 rounded-md"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="text-sm text-gray-400 -rotate-90 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pt-6 pb-2">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}

import CardWrapper from "@/app/ui/dashboard/cards";
<<<<<<< HEAD:app/dashboard/(overview)/page.js
import { Card } from "@/app/ui/dashboard/cards";
=======
>>>>>>> 06be8efe1f157165ab3e355a91c38db870fbc609:app/dashboard/page.js
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices } from "@/app/lib/data";
import { Suspense } from "react";
<<<<<<< HEAD:app/dashboard/(overview)/page.js
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import { CardsSkeleton } from "@/app/ui/skeletons";
import { fetchCardData } from "@/app/lib/data";

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
=======
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton, } from "@/app/ui/skeletons";
 
export default async function Page() {
>>>>>>> 06be8efe1f157165ab3e355a91c38db870fbc609:app/dashboard/page.js
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
<<<<<<< HEAD:app/dashboard/(overview)/page.js
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
      <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices/>
        </Suspense>
=======
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={LatestInvoices} />
>>>>>>> 06be8efe1f157165ab3e355a91c38db870fbc609:app/dashboard/page.js
      </div>
    </main>
  );
}

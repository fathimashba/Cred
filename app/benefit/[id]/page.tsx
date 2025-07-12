'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const benefitDetails = {
  food: {
    title: "50% off Food",
    description: "Get 50% off at select premium restaurants. Applicable only on dine-in. Cannot be clubbed with other offers.",
    expiry: "Expires: July 31, 2025",
    code: "FOOD50",
  },
  amazon: {
    title: "₹1000 Amazon Voucher",
    description: "Flat ₹1000 off on your next Amazon purchase. Apply the code during checkout.",
    expiry: "Expires: August 10, 2025",
    code: "AMZ1000",
  },
  coffee: {
    title: "Free Coffee",
    description: "Enjoy a tall coffee every week from Starbucks or Cafe Coffee Day. Auto-applied on scan.",
    expiry: "Expires: September 15, 2025",
    code: "COFFEELOVE",
  },
};

export default function BenefitDetailPage() {
  const { id } = useParams();
  const benefit = benefitDetails[id as keyof typeof benefitDetails];

  if (!benefit) {
    return <div className="p-6 text-center text-red-500">Benefit not found 😓</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-100 to-purple-100 dark:from-gray-900 dark:to-black">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4">
          {benefit.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          {benefit.description}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
          {benefit.expiry}
        </p>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-400 text-black font-mono text-xl text-center py-3 px-4 rounded-lg tracking-widest shadow-inner">
          CODE: {benefit.code}
        </div>

        <Link href="/" className="block mt-6 text-center text-sm text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    </main>
  );
}

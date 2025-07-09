// components/BenefitsGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
  {
    id: 'food',
    title: '50% off Food',
    icon: '🍽️',
    description: 'Valid at select restaurants for dine-in only.',
    cta: 'Claim',
  },
  {
    id: 'amazon',
    title: '₹1000 Amazon Voucher',
    icon: '🛒',
    description: 'Limited-time offer. Use on your next Amazon purchase.',
    cta: 'View',
  },
  {
    id: 'coffee',
    title: 'Free Coffee',
    icon: '☕',
    description: '1 free tall drink per week at partner cafés.',
    cta: 'Claim',
  },
];

export default function BenefitsGrid() {
  const [loading, setLoading] = useState(true);

  // Simulate fake delay
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-36 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {benefits.map((b, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          className="p-5 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg flex flex-col justify-between"
        >
          <div className="text-3xl">{b.icon}</div>
          <div className="mt-2">
            <h4 className="text-xl font-bold">{b.title}</h4>
            <p className="text-sm">{b.description}</p>
          </div>
          <Link href={`/benefit/${b.id}`}>
            <button className="mt-4 self-start px-4 py-1 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition">
              {b.cta}
            </button>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

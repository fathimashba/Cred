// components/RewardPoints.tsx
'use client';

import { motion } from 'framer-motion';

export default function RewardPoints() {
  const points = 3200;
  const goal = 5000;
  const percentage = (points / goal) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-xl mx-auto mt-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        🎯 Reward Points Progress
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        You've earned <span className="font-bold text-pink-500">{points}</span> out of {goal} XP.
      </p>
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}

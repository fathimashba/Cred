import UserProfile from '../components/UserProfile';
import RewardChart from '../components/RewardChart';
import BenefitsGrid from '../components/BenefitsGrid';
import ThemeToggle from '../components/ThemeToggle';

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 space-y-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <UserProfile />
      <RewardChart />
      <BenefitsGrid />
    </main>
  );
}

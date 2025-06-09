'use client';
import { level1Categories } from '@/lib/constants';
import Level1Category from './components/level1Category';
import SidebarActiveButton from '../components/sidebar/sidebarActiveButton';

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <h1 className="text-4xl font-bold mb-4 mt-4">
        <SidebarActiveButton />
        BBC News
      </h1>
      <div className="p-2 gap-2">
        {level1Categories.map((category) => (
          <Level1Category key={`level1-${category}`} category={category} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

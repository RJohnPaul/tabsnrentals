'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 bg-gray-100">
      <button
        className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white text-2xl rounded-lg shadow-lg transition duration-300"
        onClick={() => router.push('/tabs')}
      >
        Tabs
      </button>
      <button
        className="w-full h-20 bg-green-600 hover:bg-green-700 text-white text-2xl rounded-lg shadow-lg transition duration-300"
        onClick={() => router.push('/rentals')}
      >
        Rentals
      </button>
    </div>
  );
}
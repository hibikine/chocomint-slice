'use client';
import Generator from '@/components/Generator';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-2 xl:p-12 mint-background">
      <Generator />
    </main>
  );
}

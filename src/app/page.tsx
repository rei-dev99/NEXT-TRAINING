import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24 h-screen bg-slate-100">
      <section
        className="flex justify-between items-center"
      >
        <div className="lg:max-w-[40rem]">
          <h2 className="text-2xl font-bold">Rei Codeへようこそ</h2>
          <p className="mt-6">Next.js、shadcn練習中です。</p>
          <div className="flex gap-2 mt-4">
            <Button>こんにちは</Button>
          </div>
        </div>
        <div>
          <Image src="/profile.png" alt="logo" width={200} height={200} />
        </div>
      </section>
    </main>
  );
}

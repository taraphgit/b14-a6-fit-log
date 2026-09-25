import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00] text-black">
          <Dumbbell size={28} strokeWidth={2.5} />
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-[#ccff00]">
          Error 404
        </p>

        <h1 className="mt-3 text-5xl font-black uppercase tracking-tight sm:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-white/50">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wider text-black transition hover:opacity-90"
        >
          <ArrowLeft size={18} />
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}
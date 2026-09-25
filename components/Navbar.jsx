"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const planActive = pathname.startsWith("/my-plan");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ccff00] text-black">
            <Dumbbell size={21} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-black tracking-[0.12em]">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/#library"
            className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition ${
              workoutActive
                ? "bg-[#ccff00] text-black"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition ${
              planActive
                ? "bg-[#ccff00] text-black"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105"
          >
            Plan 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/40 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-white"
          >
            Saved 0
          </Link>
        </div>
      </div>
    </header>
  );
}
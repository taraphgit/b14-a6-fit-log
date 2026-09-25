"use client";

import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { plan, saved } = useFitLog();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const planActive = pathname.startsWith("/my-plan");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ccff00] text-black">
              <Dumbbell size={21} strokeWidth={2.5} />
            </div>

            <span className="text-xl font-black tracking-[0.12em]">
              FITLOG
            </span>
          </Link>

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

          <div className="flex items-center gap-2">
            <Link
              href="/my-plan"
              className="rounded-full bg-[#ccff00] px-3 py-2 text-[11px] font-black uppercase tracking-wider text-black transition hover:scale-105"
            >
              Plan {plan.length}
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full border border-white/40 px-3 py-2 text-[11px] font-black uppercase tracking-wider text-white transition hover:border-white"
            >
              Saved {saved.length}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 py-4 md:hidden">
            <div className="grid gap-2">
              <Link
                href="/#library"
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                  workoutActive
                    ? "bg-[#ccff00] text-black"
                    : "bg-white/5 text-white/70"
                }`}
              >
                Workout
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMenu}
                className={`rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                  planActive
                    ? "bg-[#ccff00] text-black"
                    : "bg-white/5 text-white/70"
                }`}
              >
                My Plan
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
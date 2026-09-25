import Link from "next/link";
import { ArrowDown, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:opacity-90"
          >
            <Dumbbell size={19} />
            Browse Workouts
            <ArrowDown size={18} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          <div className="flex h-[420px] items-center justify-center bg-gradient-to-br from-[#181818] to-[#0d0d0d] sm:h-[520px]">
            <div className="text-center">
              <Dumbbell
                size={100}
                strokeWidth={1.2}
                className="mx-auto text-[#ccff00]"
              />

              <p className="mt-6 text-sm font-black uppercase tracking-[0.3em] text-white/40">
                FitLog Training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import { ArrowDown, Dumbbell } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="border-b border-white/10">
//       <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
//         {/* Left */}
//         <div>
//           <p className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-[#ccff00]">
//             Workout Library
//           </p>

//           <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
//             Train With Intent.
//             <br />
//             Log Every Set.
//           </h1>

//           <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
//             FitLog is a dark, no-nonsense gym companion: pick a lift,
//             lock it into today&apos;s plan, and watch the week&apos;s work
//             add up.
//           </p>

//           <Link
//             href="#library"
//             className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:-translate-y-0.5 hover:bg-[#d7ff33]"
//           >
//             <Dumbbell size={19} />
//             Browse Workouts
//             <ArrowDown size={18} />
//           </Link>
//         </div>

//         {/* Right Visual */}
//         <div className="relative">
//           <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
//             <img
//               src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
//               alt="Workout training"
//               className="h-[420px] w-full object-cover sm:h-[520px]"
//             />
//           </div>

//           <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 shadow-2xl sm:-left-5">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
//               Train
//             </p>
//             <p className="mt-1 text-2xl font-black text-[#ccff00]">
//               Consistently.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
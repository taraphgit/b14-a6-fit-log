export default function Loading() {
  return (
    <div className="flex min-h-60 items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <p className="mt-4 text-sm font-bold uppercase tracking-wider text-white/50">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}
export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  return (
    <section className="mx-auto min-h-[70vh] max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
        Workout Details
      </p>

      <h1 className="mt-3 text-4xl font-black uppercase">
        Workout #{id}
      </h1>

      <p className="mt-4 text-white/50">
        Workout details will be loaded from the FitLog API.
      </p>
    </section>
  );
}
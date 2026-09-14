type PreviewKind = "eduenrich" | "spicegarden";

export function ProjectPreview({ kind }: { kind: PreviewKind }) {
  if (kind === "spicegarden") {
    return (
      <div className="relative h-full min-h-[240px] overflow-hidden bg-[#1a120e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,164,92,0.25),transparent_45%)]" />
        <div className="relative p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.22em] text-[#e8a45c] uppercase">
            Representative interface
          </p>
          <p className="mt-3 font-serif text-3xl text-[#f4e6d4]">Spice Garden</p>
          <p className="mt-2 max-w-xs text-sm text-[#d7c4b0]">
            Authentic Indian cuisine. Menu, ambience, and a reservation-ready
            restaurant experience.
          </p>
          <div className="mt-6 grid max-w-sm grid-cols-3 gap-3">
            {["Thali", "Biryani", "Tandoor"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/30 px-2 py-4 text-center text-xs text-[#f4e6d4]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[240px] overflow-hidden bg-[#0d1520]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(92,200,255,0.18),transparent_40%)]" />
      <div className="relative p-6 sm:p-8">
        <p className="text-[10px] tracking-[0.22em] text-accent uppercase">
          Representative interface
        </p>
        <p className="mt-3 text-2xl font-semibold">EduEnrich</p>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Global education consultancy — programs, services, and student-focused
          guidance.
        </p>
        <div className="mt-6 flex max-w-md gap-3">
          <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs text-muted">Programs</p>
            <p className="mt-1 text-sm">Undergraduate · Masters</p>
          </div>
          <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs text-muted">Focus</p>
            <p className="mt-1 text-sm">Student pathway</p>
          </div>
        </div>
      </div>
    </div>
  );
}

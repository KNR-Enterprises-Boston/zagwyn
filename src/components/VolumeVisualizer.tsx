export function VolumeVisualizer() {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-start">
      <div>
        <div className="eyebrow mb-3">A Full Cord</div>
        <h3 className="font-serif text-2xl md:text-3xl">
          4 ft × 4 ft × 8 ft = 128 cubic feet
        </h3>
        <p className="mt-4 text-charcoal/75">
          A cord is a standard, legally defined volume in Massachusetts — the
          same everywhere. A face cord (sometimes called a rick) is roughly
          one-third of a full cord, measuring 4 ft × 8 ft by whatever length
          the pieces are cut. We deliver full cords and fractions of full
          cords, never face cords, so you always know exactly what you're
          getting.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-charcoal/80">
          <li className="flex gap-2">
            <span className="text-amber">—</span> 1/2 cord: 64 cu ft (roughly a
            pickup bed heaped)
          </li>
          <li className="flex gap-2">
            <span className="text-amber">—</span> 1 cord: 128 cu ft
          </li>
          <li className="flex gap-2">
            <span className="text-amber">—</span> 4 cords: 512 cu ft (a full
            dump-truck load)
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <CordDiagram />
        <TruckDiagram />
      </div>
    </div>
  );
}

function CordDiagram() {
  return (
    <figure className="border border-charcoal/15 bg-offwhite-dark p-6">
      <svg viewBox="0 0 320 160" className="w-full h-auto" aria-hidden>
        <defs>
          <pattern
            id="logPattern"
            x="0"
            y="0"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <rect width="12" height="12" fill="#C8912E" />
            <circle cx="6" cy="6" r="4" fill="#9F7422" />
            <circle cx="6" cy="6" r="1.2" fill="#1C1C1C" />
          </pattern>
        </defs>
        <rect
          x="20"
          y="30"
          width="240"
          height="100"
          fill="url(#logPattern)"
          stroke="#1C1C1C"
          strokeWidth="2"
        />
        <text x="140" y="20" textAnchor="middle" className="fill-charcoal" fontSize="12">
          8 ft
        </text>
        <text
          x="275"
          y="85"
          textAnchor="start"
          className="fill-charcoal"
          fontSize="12"
        >
          4 ft
        </text>
      </svg>
      <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-charcoal/60">
        Full cord — stacked dimensions
      </figcaption>
    </figure>
  );
}

function TruckDiagram() {
  return (
    <figure className="border border-charcoal/15 bg-offwhite-dark p-6">
      <svg viewBox="0 0 320 120" className="w-full h-auto" aria-hidden>
        <rect x="10" y="30" width="140" height="60" fill="#2A3D2E" stroke="#1C1C1C" strokeWidth="2" />
        <rect x="150" y="40" width="50" height="50" fill="#2A3D2E" stroke="#1C1C1C" strokeWidth="2" />
        <rect x="20" y="40" width="120" height="15" fill="#C8912E" />
        <circle cx="40" cy="95" r="10" fill="#1C1C1C" />
        <circle cx="175" cy="95" r="10" fill="#1C1C1C" />
        <text x="80" y="70" textAnchor="middle" className="fill-offwhite" fontSize="10">
          1/2 cord load
        </text>
        {/* full load */}
        <rect x="220" y="30" width="90" height="60" fill="#2A3D2E" stroke="#1C1C1C" strokeWidth="2" />
        <rect x="225" y="15" width="80" height="45" fill="#C8912E" />
        <circle cx="245" cy="95" r="10" fill="#1C1C1C" />
        <circle cx="290" cy="95" r="10" fill="#1C1C1C" />
        <text x="265" y="108" textAnchor="middle" className="fill-charcoal" fontSize="10">
          4 cord load
        </text>
      </svg>
      <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-charcoal/60">
        Approximate truck fill levels
      </figcaption>
    </figure>
  );
}

const items = [
  {
    label: "100% Local Hardwood",
    icon: (
      <path d="M12 2v20M5 9l7-7 7 7M5 15l7-7 7 7" />
    ),
  },
  {
    label: "Kiln-Dried Available",
    icon: (
      <>
        <path d="M12 3c2 3 4 5 4 8a4 4 0 1 1-8 0c0-3 2-5 4-8z" />
      </>
    ),
  },
  {
    label: "Screened for Cleanliness",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },
];

export function TrustBar() {
  return (
    <div className="bg-offwhite-dark border-y border-charcoal/10">
      <div className="container-wide py-2.5 sm:py-3">
        <ul className="flex items-center justify-start sm:justify-center gap-4 sm:gap-10 text-[0.65rem] sm:text-xs uppercase tracking-[0.16em] text-charcoal/75 overflow-x-auto scrollbar-hide whitespace-nowrap">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
              >
                {item.icon}
              </svg>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

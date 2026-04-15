export function DeliveryMap() {
  // Google Maps embed centered on Shirley, MA. No API key required for the
  // public embed endpoint.
  const src =
    "https://www.google.com/maps?q=Shirley,+MA&z=10&output=embed";
  return (
    <div className="relative w-full aspect-[16/10] border border-charcoal/15 bg-offwhite-dark">
      <iframe
        title="Zagwyn Firewood delivery area centered on Shirley, Massachusetts"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

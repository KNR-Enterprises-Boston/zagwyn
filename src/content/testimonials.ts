export type Testimonial = {
  quote: string;
  name: string;
  town: string;
};

// TODO: Replace with real, client-approved testimonials pulled from Google
// Business Profile reviews or collected directly from repeat customers.
// Current quotes are based on themes from actual public reviews but the
// names and towns are placeholders — do not publish without real attribution.
export const testimonials: Testimonial[] = [
  {
    quote:
      "They were super helpful with placement — worked around a tight driveway and put the wood exactly where I needed it.",
    name: "Google Review",
    town: "Middlesex County",
  },
  {
    quote:
      "Clean wood, cut to a consistent length. Every piece fit my stove without resplitting.",
    name: "Google Review",
    town: "Worcester County",
  },
  {
    quote:
      "Quick turnaround and good communication. Would order again.",
    name: "Google Review",
    town: "Middlesex County",
  },
];

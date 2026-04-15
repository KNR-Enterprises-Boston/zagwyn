export type Testimonial = {
  quote: string;
  name: string;
  town: string;
};

// TODO: Replace with real, client-approved testimonials pulled from Google
// Business Profile reviews or collected directly from repeat customers.
export const testimonials: Testimonial[] = [
  {
    quote:
      "The crew was super helpful with placement — they worked around a tight driveway and stacked the wood exactly where I wanted it.",
    name: "Mike R.",
    town: "Groton, MA",
  },
  {
    quote:
      "Clean, dry, and cut to a consistent length. First load I've gotten in years where every piece fit my stove without resplitting.",
    name: "Sarah T.",
    town: "Westford, MA",
  },
  {
    quote:
      "Called on a Tuesday, delivered on a Thursday. Alex kept me in the loop the whole way.",
    name: "Dan K.",
    town: "Ayer, MA",
  },
];

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-charcoal text-offwhite">
      <div className="container-wide py-32 text-center">
        <div className="eyebrow mb-3">404</div>
        <h1 className="font-serif text-5xl md:text-6xl">
          That page didn't split.
        </h1>
        <p className="mt-6 text-offwhite/70 max-w-md mx-auto">
          The page you're looking for isn't here. Head back to the yard and
          try again.
        </p>
        <div className="mt-10">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

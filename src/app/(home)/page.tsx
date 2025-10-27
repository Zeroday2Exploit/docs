import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">rt-framework Docs</h1>
      <p className="text-fd-muted-foreground">
        Learn how to use rt-framework —{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          read the documentation
        </Link>
        .
      </p>
    </main>
  );
}

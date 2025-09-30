import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">rt-framework Docs</h1>
      <p className="text-fd-muted-foreground">
        Know about how to use rt-framewor, see the{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          documentation!
        </Link>{' '}
      </p>
    </main>
  );
}

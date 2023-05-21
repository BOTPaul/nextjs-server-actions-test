"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main>
      <h2>Add new location</h2>
      <p>Unable to add a new location</p>
      <p>Server returned: {error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}

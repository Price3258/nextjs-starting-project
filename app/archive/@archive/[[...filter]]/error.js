"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h1>An Filter error occurred!</h1>
      <p>{error.message}</p>
    </div>
  );
}

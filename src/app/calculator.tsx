"use client";

import { useState } from "react";

const VALUES = [0.5, 1, 2, 3, 4] as const;

export default function Calculator() {
  const [total, setTotal] = useState(0);

  const add = (n: number) => setTotal((t) => t + n);
  const reset = () => setTotal(0);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <h1 className="text-left text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
        EC Cafeteria
      </h1>
      <div className="rounded-2xl bg-zinc-100 px-6 py-8 text-right text-5xl font-semibold tabular-nums text-black dark:bg-zinc-900 dark:text-zinc-50">
        {total}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {VALUES.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => add(v)}
            className="aspect-square rounded-2xl bg-zinc-200 text-5xl font-semibold text-black transition-colors hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
          >
            {v}
          </button>
        ))}
        <button
          type="button"
          onClick={reset}
          className="aspect-square rounded-2xl bg-red-500 text-2xl font-semibold text-white transition-colors hover:bg-red-600 active:bg-red-700"
        >
          reset
        </button>
      </div>
    </div>
  );
}

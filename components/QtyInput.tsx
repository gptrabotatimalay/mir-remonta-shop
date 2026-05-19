"use client";

import { Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  value: number;
  onChange: (v: number) => void;
  unit?: string;
  step?: number;
  max?: number;
  size?: "sm" | "md";
};

export default function QtyInput({
  value,
  onChange,
  unit,
  step = 1,
  max,
  size = "md",
}: Props) {
  const [text, setText] = useState(String(value));

  useEffect(() => setText(String(value)), [value]);

  const commit = (raw: string) => {
    const cleaned = raw.replace(/[^\d]/g, "");
    const n = parseInt(cleaned || "0", 10);
    const next = Math.max(0, max ? Math.min(n, max) : n);
    onChange(next);
    setText(String(next));
  };

  const h = size === "sm" ? "h-11" : "h-12";
  const btn = size === "sm" ? "w-10 h-10" : "w-11 h-11";
  const fontSize = size === "sm" ? "text-base" : "text-lg";

  return (
    <div
      className={`flex items-center ${h} rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] p-1 select-none`}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - step))}
        aria-label="Меньше"
        className={`${btn} flex items-center justify-center rounded-full hover:bg-[var(--color-cream)]/10 active:scale-95 transition-transform`}
      >
        <Minus size={16} />
      </button>
      <div className="flex-1 flex items-baseline justify-center gap-1 px-1.5">
        <input
          inputMode="numeric"
          pattern="[0-9]*"
          value={text}
          onChange={(e) => setText(e.target.value.replace(/[^\d]/g, ""))}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
          className={`w-12 bg-transparent text-center font-display ${fontSize} focus:outline-none focus:text-[var(--color-ochre)]`}
          aria-label="Количество"
        />
        {unit && (
          <span className="text-[12px] text-[var(--color-cream)]/65">
            {unit}
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={() =>
          onChange(max ? Math.min(max, value + step) : value + step)
        }
        aria-label="Больше"
        className={`${btn} flex items-center justify-center rounded-full hover:bg-[var(--color-cream)]/10 active:scale-95 transition-transform`}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const LETTERS = "coach".split("");

type TapCtx = { tapCount: number; triggerJump: () => void };
const TapContext = createContext<TapCtx>({ tapCount: 0, triggerJump: () => {} });

export function CoachTapProvider({ children }: { children: ReactNode }) {
  const [tapCount, setTapCount] = useState(0);
  const triggerJump = () => setTapCount(c => c + 1);
  return (
    <TapContext.Provider value={{ tapCount, triggerJump }}>
      {children}
    </TapContext.Provider>
  );
}

export function useCoachTap() {
  return useContext(TapContext);
}

export function InteractiveWatermark() {
  const { tapCount } = useCoachTap();
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
    >
      <span
        style={{
          fontWeight: 900,
          fontSize: "clamp(260px, 42vw, 620px)",
          letterSpacing: "-0.08em",
          lineHeight: 0.8,
          color: "#b13915",
          mixBlendMode: "multiply",
          opacity: 0.55,
          whiteSpace: "nowrap",
          display: "inline-flex",
        }}
      >
        {LETTERS.map((l, i) => (
          <span
            key={`${tapCount}-${i}`}
            className={tapCount === 0 ? "coach-drop" : "coach-jump"}
            style={{
              display: "inline-block",
              animationDelay:
                tapCount === 0 ? `${i * 120}ms` : `${i * 45}ms`,
            }}
          >
            {l}
          </span>
        ))}
      </span>
    </div>
  );
}

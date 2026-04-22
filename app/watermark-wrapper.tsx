"use client";

import type { ReactNode } from "react";
import {
  CoachTapProvider,
  InteractiveWatermark,
  useCoachTap,
} from "./watermark";

export { CoachTapProvider, InteractiveWatermark };

export function CoachTapHotspot({ children }: { children: ReactNode }) {
  const { triggerJump } = useCoachTap();
  return (
    <div
      onClick={triggerJump}
      className="absolute inset-0 z-0 cursor-pointer select-none"
      aria-label="Tap to make the coach jump"
      role="button"
    >
      <div className="pointer-events-none size-full">{children}</div>
    </div>
  );
}

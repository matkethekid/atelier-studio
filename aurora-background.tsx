"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

const auroraStyles = `
  @keyframes auroraShift {
    0%   { background-position: 0% 50%, 0% 50%; }
    50%  { background-position: 120% 60%, 80% 40%; }
    100% { background-position: 0% 50%, 0% 50%; }
  }

  @keyframes auroraAfterShift {
    0%   { background-position: 60% 40%; opacity: 0.6; }
    35%  { background-position: 10% 70%; opacity: 0.9; }
    70%  { background-position: 100% 30%; opacity: 0.7; }
    100% { background-position: 60% 40%; opacity: 0.6; }
  }

  @keyframes auroraBreathe {
    0%, 100% { opacity: 0.25; transform: scale(1); }
    45%       { opacity: 0.40; transform: scale(1.03); }
  }

  .aurora-layer {
    animation:
      auroraShift  38s ease-in-out infinite,
      auroraBreathe 20s ease-in-out infinite;
  }

  .aurora-layer::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        100deg,
        #fff 0%, #fff 7%,
        transparent 10%, transparent 12%,
        #fff 16%
      ),
      repeating-linear-gradient(
        100deg,
        #7c2d12 10%, #c2410c 15%,
        #f59e0b 20%, #fcd34d 25%,
        #78350f 30%
      );
    background-size: 200%, 180%;
    background-attachment: fixed;
    mix-blend-mode: difference;
    animation: auroraAfterShift 52s ease-in-out infinite;
  }
`;

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: auroraStyles }} />

      <div
        className={cn(
          "transition-bg relative flex w-full h-[65vh] flex-col items-center bg-zinc-50",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "aurora-layer pointer-events-none absolute -inset-2.5 blur-[10px] invert filter will-change-transform",
              showRadialGradient &&
                "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
            )}
            style={{
              backgroundImage: [
                "repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)",
                "repeating-linear-gradient(100deg, #7c2d12 10%, #c2410c 15%, #f59e0b 20%, #fcd34d 25%, #78350f 30%)",
              ].join(", "),
              backgroundSize: "300%, 200%",
            }}
          />
        </div>

        {children}
      </div>
    </main>
  );
};

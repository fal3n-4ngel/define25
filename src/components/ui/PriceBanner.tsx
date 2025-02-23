import React, { useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  isHovering: boolean;
}

interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement> {
  clientX: number;
  clientY: number;
}

export default function PriceBanner(): React.JSX.Element {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    isHovering: false,
  });

  const handleMouseMove = (e: MouseMoveEvent): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true,
    });
  };

  const handleMouseLeave = (): void => {
    setMousePosition((prev) => ({
      ...prev,
      isHovering: false,
    }));
  };

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden py-20 text-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-1/2 h-[1px] w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8fab] to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 h-[1px] w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8f3c] to-transparent"></div>

      <img
        className="absolute top-0 right-1/2 animate-pulse"
        src="/dot_matrix.png"
        aria-hidden="true"
        alt=""
      />
      <img
        className="absolute bottom-0 left-1/2 animate-pulse"
        src="/dot_matrix.png"
        aria-hidden="true"
        alt=""
      />

      <div className="absolute flex h-full w-full overflow-hidden">
        <div className="h-full w-full rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,134,199,0.18)_0deg,rgba(9,53,196,0.10)_360deg)] blur-[80px]"></div>
        <div className="h-full w-full rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,134,199,0.18)_0deg,rgba(9,53,196,0.10)_360deg)] blur-[90px]"></div>
        <div className="h-full w-full rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,134,199,0.18)_0deg,rgba(9,53,196,0.10)_360deg)] blur-[80px]"></div>
      </div>

      {mousePosition.isHovering && (
        <div
          className="pointer-events-none absolute h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-200"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
          }}
        ></div>
      )}

      <div className="absolute -top-1/2 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full bg-radial from-white/10 to-transparent blur-[80px]"></div>
      <div>
        <p className="text-xl font-extralight sm:text-3xl">Prizes worth</p>
        <h1 className="text-4xl font-extrabold sm:text-7xl">2.5 Lakhs</h1>
      </div>
    </div>
  );
}

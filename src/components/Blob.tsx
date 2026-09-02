"use client";

interface BlobProps {
  variant?: "warm" | "sage";
  path: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Blob({
  variant = "warm",
  path,
  className = "",
  style,
}: BlobProps) {
  return (
    <div
      className={`blob blob--${variant} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 600">
        <path d={path} />
      </svg>
    </div>
  );
}

export const BLOB_PATHS = {
  clay: "M80,120 C180,40 420,20 520,140 C590,230 560,420 430,500 C300,560 120,520 70,380 C30,260 40,170 80,120 Z",
  sage: "M140,80 C280,30 480,90 540,220 C580,340 500,500 340,540 C180,560 60,440 50,280 C40,160 70,100 140,80 Z",
  clayAlt: "M100,90 C250,40 470,80 530,210 C570,340 490,490 330,530 C160,550 50,420 60,260 C70,150 70,110 100,90 Z",
  sageAlt: "M90,160 C200,50 450,40 530,170 C590,290 540,470 380,520 C220,560 70,480 50,320 C40,220 50,190 90,160 Z",
};

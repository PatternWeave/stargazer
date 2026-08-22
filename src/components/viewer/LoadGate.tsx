import { useProgress } from "@react-three/drei";
import { artwork } from "@/lib/artwork";

export function LoadGate() {
  const { active, progress } = useProgress();
  const hidden = !active && progress === 100;
  if (hidden) return null;

  return (
    <div className="absolute inset-0 z-20 grid place-items-center bg-bg">
      <div className="text-center">
        <p className="font-display text-3xl italic tracking-[-0.03em] text-fg">
          {artwork.shortTitle}
        </p>
        <p className="mt-2 text-xs tracking-[0.2em] text-fg-subtle uppercase">
          Loading mesh {Math.round(progress)}%
        </p>
        <div className="mx-auto mt-5 h-px w-40 overflow-hidden bg-border">
          <div
            className="h-full bg-fg transition-[width] duration-150"
            style={{ width: `${Math.max(progress, 8)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

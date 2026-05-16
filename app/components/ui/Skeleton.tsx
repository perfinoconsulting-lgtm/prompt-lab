interface SkeletonProps {
  className?: string;
  count?: number;
}

export default function Skeleton({ className = "", count = 1 }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`bg-hairline rounded-[6px] animate-pulse ${className}`}
          style={{ minHeight: "20px" }}
        />
      ))}
    </>
  );
}

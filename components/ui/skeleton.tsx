interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export default function Skeleton({
  className = "",
  variant = "rectangular",
}: SkeletonProps) {
  const variantStyles = {
    text: "h-4 w-full rounded",
    circular: "h-12 w-12 rounded-full",
    rectangular: "h-24 w-full rounded-lg",
  };

  return (
    <div
      className={`bg-surface/50 animate-pulse ${variantStyles[variant]} ${className}`}
    />
  );
}

import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

export default function Avatar({
  src,
  alt,
  size = "md",
  fallback,
}: AvatarProps) {
  const sizeStyles = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-xl",
  };

  const getFallbackText = () => {
    if (fallback) return fallback;
    return alt.charAt(0).toUpperCase();
  };

  return (
    <div
      className={`bg-surface relative flex items-center justify-center overflow-hidden rounded-full ${sizeStyles[size]}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <span className="text-muted font-semibold">{getFallbackText()}</span>
      )}
    </div>
  );
}

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const hoverStyles = hover
    ? "hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
    : "";

  return (
    <div
      className={`bg-surface rounded-xl p-6 shadow-lg transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

import { ReactNode } from "react";
import Container from "./container";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="border-border bg-surface/30 border-b py-12">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="text-muted mt-2 text-lg">{description}</p>
            )}
          </div>
          {children && (
            <div className="flex items-center gap-4">{children}</div>
          )}
        </div>
      </Container>
    </div>
  );
}

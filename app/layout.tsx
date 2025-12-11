import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Root layout - minimal setup for i18n
export default function RootLayout({ children }: Props) {
  return children;
}

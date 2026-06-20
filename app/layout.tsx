import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAY | Ձեր բիզնեսը կարող է այսպես երևալ",
  description: "Premium demonstration web experience for ambitious businesses.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hy" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

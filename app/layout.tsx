import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rida Javaid | Portfolio",
  description: "Software Engineering Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
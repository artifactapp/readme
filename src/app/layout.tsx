import type { Metadata } from "next";

import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Artifact",
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
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiri Sein | Data Science Portfolio",
  description:
    "Explore Thiri Sein's portfolio, machine learning projects, data analysis skills and predictive modelling work.",
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

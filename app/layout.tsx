import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchCode | One Prompt. Full Product.",
  description: "Describe what you want. Get a deployed SaaS with billing, users, and support — not just code.",
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

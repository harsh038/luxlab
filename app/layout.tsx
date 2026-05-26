import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aureluxe Estates | Luxury Property Marketplace",
    template: "%s | Aureluxe Estates"
  },
  description:
    "A premium marketplace for luxury villas, penthouses, farmhouses, beach houses, and high-end homes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

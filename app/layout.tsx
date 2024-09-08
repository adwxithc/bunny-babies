import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  subsets: ["latin"], // Specify the subset 
  weight: "400", // Righteous only has one weight, which is 400
  display: "swap", // Optional: 'swap' ensures text is visible during loading
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={righteous.className}>{children}</body>
    </html>
  );
}

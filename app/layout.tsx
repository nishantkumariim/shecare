import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SheCare - Daily Gummies for Women",
  description: "Natural gummies to relieve period pain in the long run."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 text-gray-900">{children}</body>
    </html>
  );
}

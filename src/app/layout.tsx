import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import AuthProvider from "@/components/auth/AuthProvider";

// Define the fonts
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Companion",
  description: "Your personal gym companion app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${bebasNeue.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen font-manrope">
        <AuthProvider>
          <Navbar />
          <main className="max-w-7xl mx-auto p-4 md:p-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

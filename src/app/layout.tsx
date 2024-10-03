
import AuthProvider from "@/components/AuthProvider";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import {AppWrapper} from './context/ContextProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Momentum 2024",
  description: "Momentum is a 2-day long festival organized in the month of October. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2024, the 26th Edition is planned for 24th - 25th October.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AppWrapper>
            <NavBar/>
            {children}
          </AppWrapper>
        </AuthProvider>
        <Analytics/>
      </body>
    </html>
  );
}

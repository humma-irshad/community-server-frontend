"use client"
// import "./globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@emotion/react";
import { theme } from "@/theme/theme";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Community App",
  description:
    "A student community app for resource sharing, connecting with alumni, and discussions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Sidebar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

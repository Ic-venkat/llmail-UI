import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider"
import Navbar from "@/components/navBar"
import { Footerdemo } from "@/components/ui/footer-section";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { dark } from '@clerk/themes'




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "melone.ai",
  description: "Your job search made easy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system" 
            enableSystem
            disableTransitionOnChange
          >
            {/* Navbar now includes Clerk buttons */}
            <Navbar />
            {children}
          </ThemeProvider>

          <div className="flex flex-col min-h-screen">
            <Footerdemo />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/ui/layout/NavBar";
import { ThemeProvider } from "@/components/theme-provider"
import Container from "@/components/ui/container";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stay Savvy",
  description: "Book a hotel of your choice",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider 
         attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <ClerkProvider>
          <main className="flex flex-col min-h-screen bg-secondary">
            <NavBar />
            <section className="flex-grow">
              <Container>
              {children}  
              </Container>
              </section>
          </main>
        </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header"
import Background from "@/components/Background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soufiane AIT ALI",
  description: "Self-taught frontend developer based in Agadir, Morocco.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Background />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

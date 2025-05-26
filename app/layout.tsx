import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban Board | QuickSell Assignment",
  description: "A powerful Kanban board application that helps you organize and manage your tasks efficiently. Built with Next.js and TypeScript.",
  keywords: "kanban board, task management, project management, agile, scrum, quicksell",
  authors: [{ name: "QuickSell" }],
  creator: "QuickSell",
  publisher: "QuickSell",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Kanban Board | QuickSell Assignment",
    description: "A powerful Kanban board application that helps you organize and manage your tasks efficiently.",
    siteName: "QuickSell Kanban Board",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanban Board | QuickSell Assignment",
    description: "A powerful Kanban board application that helps you organize and manage your tasks efficiently.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification", // You'll need to add this later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 
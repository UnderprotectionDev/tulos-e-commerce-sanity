import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

const raleway = localFont({
  src: "../../public/fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tulos E-Commerce - Your Ultimate Shopping Destination",
  description:
    "Experience a modern, user-friendly e-commerce platform designed for both learning and seamless shopping. Browse through an extensive range of products and enjoy a secure, hassle-free shopping journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

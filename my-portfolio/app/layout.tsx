import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrei Soares - Desenvolvedor Front-End",
  description:
    "Conheça meus trabalhos e projetos como desenvolvedor front-end, e saiba um pouco mais sobre mim e minhas habilidades técnicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${space_Grotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

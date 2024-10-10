import "@/app/ui/global.css";

import { inter, lusitana } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${inter.variable} ${lusitana.variable} antialiased`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}

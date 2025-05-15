import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Zane - UI Designer",
  description: "Portfolio website of Daniel Zane, a creative UI Designer and Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Avenir+Next:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-antic: 'Antic Didone', serif;
            --font-avenir: 'Avenir Next', sans-serif;
          }
          body {
            font-family: var(--font-avenir);
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-antic);
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

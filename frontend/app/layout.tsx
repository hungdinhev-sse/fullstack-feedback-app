import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback App",
  description: "Fullstack JS learning project",
};

// This root layout provides shared HTML structure for the frontend app.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          padding: "2rem",
        }}
      >
        {children}
      </body>
    </html>
  );
}
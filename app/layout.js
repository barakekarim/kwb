import "./globals.css";

export const metadata = {
  title: "Karim W. Barake — On a mission to build a world that sees better",
  description:
    "Personal site of Karim W. Barake. On a mission to build a world that sees better.",
  metadataBase: new URL("https://karimbarake.com"),
  openGraph: {
    title: "Karim W. Barake",
    description: "On a mission to build a world that sees better.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a07",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

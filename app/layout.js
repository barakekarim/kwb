import "./globals.css";

export const metadata = {
  title: "Karim Barake — Music · Research · Bio · Vision Care",
  description:
    "Personal site of Karim Barake. Building bridges between sound, science, storytelling, and sight.",
  metadataBase: new URL("https://karimbarake.com"),
  openGraph: {
    title: "Karim Barake",
    description:
      "Building bridges between sound, science, storytelling, and sight.",
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

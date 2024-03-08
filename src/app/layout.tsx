import type { Metadata } from "next";
import {Providers} from '../store/provider'

export const metadata: Metadata = {
  title: "Shades with style",
  description: "Shades with style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/elegant-icons.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/slicknav.min.css" type="text/css" />
        <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
      </head>
      <body>
        <Providers>{children}</Providers></body>
    </html>
  );
}

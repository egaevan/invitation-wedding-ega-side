import Link from 'next/link';
import React from 'react'
import "../utils/global.css";
import Icon from '../../public/cincin.png'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href='/cincin.png'></link>
      <title>Wedding Ega ♥ Ica</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, maximum-scale=1.0, user-scalable=no" />
      <body>
        {children}
      </body>
    </html>
  );
}
import React from 'react';

export const metadata = {
  title: 'My Next.js Vercel App',
  description: 'Deployed easily on Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, backgroundColor: '#09090b', color: '#ededed' }}>
        {children}
      </body>
    </html>
  );
}
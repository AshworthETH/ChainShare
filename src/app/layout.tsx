import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChainShare - Decentralized File Sharing',
  description: 'Share files securely on the blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
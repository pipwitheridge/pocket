import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pocket Bible Study',
  description: 'Free, Quality, Simple.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/icon.png"></link> 
    <meta name="theme-color" content="#fff" ></meta>
    </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

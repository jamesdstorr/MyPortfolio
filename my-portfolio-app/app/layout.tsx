import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James Storr',
  description: 'Portfolio and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
       <Nav/>
      </nav>
      <main>{children}</main>
      <footer>
        {/* Footer goes here */}
      </footer>
    </>
  );
}

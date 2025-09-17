
import '@/styles/globals.css'
import { bwGradual } from './fonts'
import Navbar from '@/components/layout/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bwGradual.variable} font-sans min-w-[320px] bg-white text-black antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

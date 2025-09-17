import '@/styles/globals.css'
import { bwGradual } from './fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bwGradual.variable} font-sans min-w-[320px] bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}

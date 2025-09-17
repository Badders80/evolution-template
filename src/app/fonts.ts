import localFont from 'next/font/local'

export const bwGradual = localFont({
  src: [
    {
  path: './fonts/BwGradual-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
  path: './fonts/BwGradual-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-bw-gradual',
})

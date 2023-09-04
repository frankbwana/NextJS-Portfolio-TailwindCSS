import './globals.css'


export const metadata = {
  title: 'Bwana Portfolio',
  description: 'Bwana JavaScript Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import '../styles/globals.css'
// import '@styles/globals.css'
import Header from '@components/header'
import Footer from '@components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HK Software',
  description: 'Consulting, services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <main className='app'>
        <Header/>
        {children}
        <Footer/>
      </main>
      </body>
    </html>
  )
}

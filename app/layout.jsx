import Footer       from "/components/Footer.jsx"
import Header       from "/components/Header.jsx"
import CartProvider from "/components/CartProvider.jsx"
import { Toaster }  from "/components/ui/toaster.jsx"

import { Rajdhani } from "next/font/google"
import "./globals.css"

const rajdhani = Rajdhani({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "700"],
  variable: '--font-rajdhani',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={rajdhani.variable}>
    <CartProvider>
      <Header/>
      {children}
      <Toaster/>
      <Footer/>
    </CartProvider>
    {/*<div className={`h-[2000px]`}></div>*/}
    </body>
    </html>
  )
}
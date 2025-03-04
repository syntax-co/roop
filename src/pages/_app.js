import Footer from "@/components/misc/footer";
import Navbar from "@/components/navbar/navbar";
import SideMenu from "@/components/navbar/side-menu";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [showSide,setShowSide] = useState(false)
  const [scrollLock,setScrollLock] = useState(false)


  return (
    <div className="app-body
    relative
    overflow-x-hidden
    hide-scrollbar
    "

    style={{
      overflowY: showSide ? 'hidden' : 'scroll'
    }}
    >


      <Navbar 
      onClick={() => setShowSide(!showSide)}
      />

      <SideMenu 
      showSide={showSide}
      close={() => setShowSide(false)}
      />

      <div className="w-full h-fit flex flex-col

      sm:px-0
      md:px-10
      lg:px-32
      xl:px-52
      "
      >
        <AnimatePresence mode="wait">
          <Component key={router.asPath}
          {...pageProps} 
          />
        </AnimatePresence>
      </div>


      <Footer />
    </div>
  ) 
}

import Navbar from "@/components/navbar/navbar";
import SideMenu from "@/components/navbar/side-menu";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [showSide,setShowSide] = useState(false)


  return (
    <div className="app-body
    relative
    overflow-x-hidden"
    >


      <Navbar 
      onClick={() => setShowSide(!showSide)}
      />

      <SideMenu 
      showSide={showSide}
      close={() => setShowSide(false)}
      />


      <div className="w-full h-[80vh] flex"
      >
        <Component {...pageProps} />
      </div>
      
    
    
    </div>
  ) 
}

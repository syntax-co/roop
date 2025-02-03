import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full h-[100vh]
    px-40
    flex flex-col justify-center"
    >

      <Navbar />

      <div className="w-full h-[80vh] flex"
      >
        <Component {...pageProps} />
      </div>
      
    
    
    </div>
  ) 
}

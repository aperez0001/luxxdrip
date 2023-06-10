import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits"
import OurProducts from "@/scenes/ourProducts"
import ContactUs from "@/scenes/contactUs"

import Featured from "@/scenes/featured"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import ComingSoon from "./scenes/temp"
import Footer from "@/scenes/footer"
import MailChimp from "./shared/MailChimp"




function App() {

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <div className="app bg-gray-20">
      {/* <MailChimp /> */}
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      
      <Home setSelectedPage = {setSelectedPage} />
      <Benefits setSelectedPage = {setSelectedPage} />
      <OurProducts setSelectedPage = {setSelectedPage} />
      <ContactUs setSelectedPage = {setSelectedPage} />
      {/* <Footer /> */}
      
      {/* <ComingSoon setSelectedPage = {setSelectedPage} /> */}
    </div>
  )
}

export default App

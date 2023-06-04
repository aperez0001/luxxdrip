import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButtonExternal from "@/shared/ActionButtonExternal"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"


// Need to create and add the images to the assets folder

import HomePage from "@/assets/HeroText.png"
import HomePageGraphic from "@/assets/HomePageImage.png"




type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

const flexBetween = "flex items-center justify-between"

  return (
    <section
        id="home"
        className="gap-16 bg-main-hero bg-no-repeat bg-cover bg-center block py-10 h-full"
    >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
            className="flex mx-10 items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            <div className="mt-32">
                {/* HEADINGS */}
                <motion.div 
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <div className="mx-auto">
                        <div className="">
                            <img className="" alt="home-page-text" src={HomePage} />
                        </div>
                    </div>
                    

                    
                </motion.div>

                {/* ACTIONS */}
                <motion.div 
                    className="mt-8 flex items-center flex-wrap md-max:justify-center max-w-[920px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className="">
                        <p className="text-lg md-max:px-8 md-max:text-base md-max:text-center text-white">
                        Luxx Drip Therapy offers a premier IV therapy experience designed to enhance your well-being and elevate your health. Our expertly formulated IV treatments are meticulously crafted to provide targeted nutrients, hydration, and rejuvenation, allowing you to optimize your wellness from the inside out.
                        </p> 
                    </div>
                    <div className="mt-8">
                        <ActionButtonExternal>
                                Book Now
                        </ActionButtonExternal>
                    </div>
                </motion.div>

            </div>

        </motion.div>
    </section>
  )
}

export default Home
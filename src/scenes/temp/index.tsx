import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import { motion } from "framer-motion"

// Need to create and add the images to the assets folder

import comingSoon from "@/assets/comingSoon.png"
// import HomePageText from "@/assets/HomePageText.png"
// import HomePageGraphic from "@/assets/HomePageGraphic.png"
// import SponsorRedBull from "@/assets/SponsorRedBull.png"
// import SponsorForbes from "@/assets/SponsorForbes.png"
// import SponsorFortune from "@/assets/SponsorFortune.png"



type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ComingSoon = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
>
    {/* IMAGE AND MAIN HEADER */}
    <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <motion.div 
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 }
                }}
            >

                <div className="relative">
                    <div className="before:absolute before:-top-20">
                        <p className="text-5xl">Coming Soon!</p>
                    </div>
                </div>
                
                <p className="mt-8 text-sm">
                    Our IV Hydration therapies deliver the highest quality vitamins and hydration directly to your bloodstream, circumventing the gut, to completely absorb essential nutrients.
                </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div 
                className="mt-8 flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div>
                    <a href="https://intakeq.com/booking/tuggnu" target="_blank" rel="noopener noreferrer">
                        <button className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'>Book Now</button>
                    </a>
                </div>
            </motion.div>

        </div>

        {/* IMAGE */}
        <div
            className="flex basis-3/5 justify-center md:z-10 mt-20 md:ml-40 md:mt-20 md:justify-items-end"
        >
            <img alt="coming-soon" src={comingSoon}/>

        </div>
    </motion.div>
</section>
  )
}

export default ComingSoon
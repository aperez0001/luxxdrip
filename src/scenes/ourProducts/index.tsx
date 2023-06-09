import HText from '@/shared/HText';
import { SelectedPage, ProductType } from '@/shared/types'
import { motion } from 'framer-motion';
import Product from "./Product"


import basic from "@/assets/basic_blend_revA.png"
import energy from "@/assets/energy_boost_revE.png"
import immune from "@/assets/immune_boost_revA.png"
import performance from "@/assets/performance_revA.png"
import useMediaQuery from '@/hooks/useMediaQuery';

const products: Array<ProductType> = [
    {
        name: "Basic Blend",
        description: "Includes a classic combination of IV fluids, vitamins, electrolytes, and antioxidants that may help improve a wide range of conditions.",
        image: basic
    },
    {
        name: "Energy Boost",
        description: "Includes a classic combination of IV fluids, vitamins, electrolytes, and antioxidants that may help improve a wide range of conditions.",
        image: energy
    },
    {
        name: "Immunity Boost",
        description: "Includes a blend of IV fluids, vitamins, and antioxidants that can help cleanse your body and supercharge your immune system to fight off illness.",
        image: immune
    },
    {
        name: "Performance Blend",
        description: "Recover from workouts and illness quickly with an IV that can help boost immune function, reduce inflammation, and support faster muscle healing.",
        image: performance
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurProducts = ({ setSelectedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
        id="ourproducts"
        className="mx-auto min-h-full w-5/6 pt-32"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}
        >
            <motion.div
                className=''
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                
                    <HText>Our Products</HText>
                    <p className='py-5'>
                            Experience the transformative power of our IV therapy products. From hydration boosters to immune defense, energy revitalization to performance recovery, and beauty and wellness treatments, our range of carefully crafted infusions is designed to optimize your health and well-being. With personalized blends and a focus on safety and efficacy, our IV therapy products deliver immediate and lasting results. Discover the ultimate wellness solution and unlock your full potential with our exceptional line of IV therapy treatments.
                        </p>
                    <div className='relative mt-20 flex-cols items-center'>
                        <p className='mx-auto text-center text-3xl'>Featured Items
                        
                        </p>
                        <hr className="w-48 h-1 my-4 mx-auto bg-black border-0 rounded  dark:bg-gray-700"/>
                    </div>
            </motion.div>

            {/* PRODUCTS SCROLLER */}
            {isAboveMediumScreens ? (
                <div className='bg-white mx-auto mt-10 h-[450px] max-w-[1400px] w-5/6 overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[1400px] whitespace-nowrap'>
                        {products.map((item: ProductType, index) => (
                            <Product 
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                overlay={true}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                < div 
                className="flex flex-wrap mt-5 md:grid grid-cols-2 items-center justify-center gap-4"
                >
                    {products.map((item: ProductType, index) => (
                        <Product
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            overlay={false}
                        />
                    ))}
                </div>
            )}

        </motion.div>
     </section>   
  )
}

export default OurProducts
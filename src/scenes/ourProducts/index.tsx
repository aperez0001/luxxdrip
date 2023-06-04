import HText from '@/shared/HText';
import { SelectedPage, ProductType } from '@/shared/types'
import { motion } from 'framer-motion';
import Product from "./Product"

import basic from "@/assets/basic_blend_revA.png"
import energy from "@/assets/energy_boost_revE.png"
import immune from "@/assets/immune_boost_revA.png"
import performance from "@/assets/performance_revA.png"

const products: Array<ProductType> = [
    {
        name: "Basic Blend",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta rem provident nemo cumque libero! Accusamus, in. Eaque architecto laborum temporibus culpa ea nulla sed veritatis quasi aliquid, labore repellat!",
        image: basic
    },
    {
        name: "Energy Boost",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta rem provident nemo cumque libero! Accusamus, in. Eaque architecto laborum temporibus culpa ea nulla sed veritatis quasi aliquid, labore repellat!",
        image: energy
    },
    {
        name: "Immunity Boost",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta rem provident nemo cumque libero! Accusamus, in. Eaque architecto laborum temporibus culpa ea nulla sed veritatis quasi aliquid, labore repellat!",
        image: immune
    },
    {
        name: "Performance Blend",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta rem provident nemo cumque libero! Accusamus, in. Eaque architecto laborum temporibus culpa ea nulla sed veritatis quasi aliquid, labore repellat!",
        image: basic
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurProducts = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="ourproducts"
        className="h-screen mt-20 bg-black"
    >
        <motion.div
        className=''
            onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}
        >
            <motion.div
                className='mx-auto w-5/6 '
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className='pt-32 text-white md:w-3/5'>
                    <HText>Our Products</HText>
                    <p className='py-5'>
                        Experience the transformative power of our IV therapy products. From hydration boosters to immune defense, energy revitalization to performance recovery, and beauty and wellness treatments, our range of carefully crafted infusions is designed to optimize your health and well-being. With personalized blends and a focus on safety and efficacy, our IV therapy products deliver immediate and lasting results. Discover the ultimate wellness solution and unlock your full potential with our exceptional line of IV therapy treatments.
                    </p>
                </div>
            </motion.div>

            {/* PRODUCTS SCROLLER */}
            <div className='bg-white mx-auto mt-10 h-[450px] max-w-[1400px] w-5/6 overflow-x-auto overflow-y-hidden'>
                <ul className='w-[1400px] whitespace-nowrap'>
                    {products.map((item: ProductType, index) => (
                        <Product 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>

        </motion.div>
     </section>   
  )
}

export default OurProducts
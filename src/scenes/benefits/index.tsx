import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, Battery100Icon, CpuChipIcon, FingerPrintIcon, SparklesIcon, SunIcon, WrenchScrewdriverIcon, ShieldCheckIcon, PowerIcon, PlusCircleIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit";

import IntakeQWidget from "@/shared/IntakeQWidget"



const benefits: Array<BenefitType> = [
    {
        icon: <PowerIcon className="h-6 w-6"/>,
        title: "Enhanced Hydration",
        description:
            "IV therapy provides direct hydration to your body, delivering fluids and essential nutrients directly into your bloodstream. This helps to replenish fluids quickly, making it an efficient solution for dehydration caused by intense workouts, travel fatigue, or illness."
    },
    {
        icon: <Battery100Icon className="h-6 w-6"/>,
        title: "Increased Energy Levels",
        description:
            "Whether you're battling jet lag, recovering from a late-night event, or simply feeling drained, IV therapy can revitalize your energy levels. The infusion of vitamins, minerals, and electrolytes helps combat fatigue, leaving you feeling refreshed and recharged."
    },
    {
        icon: <PlusCircleIcon className="h-6 w-6"/>,
        title: "Improved Nutritional Support",
        description:
            "IV therapy offers a direct and efficient way to deliver vital nutrients that your body needs. By bypassing the digestive system, the nutrients are readily absorbed and utilized by your cells, enhancing overall nutrient absorption and promoting optimal health."
    },
    {
        icon: <ShieldCheckIcon className="h-6 w-6"/>,
        title: "Immune System Boost",
        description:
            "IV therapy can give your immune system a powerful boost. With the infusion of immune-supporting vitamins and antioxidants, such as vitamin C, zinc, and glutathione, you can strengthen your body's natural defense mechanisms, potentially reducing the risk of illness and supporting faster recovery."
    },
    {
        icon: <CpuChipIcon className="h-6 w-6"/>,
        title: "Faster Recovery and Muscle Repair",
        description:
            "Athletes and fitness enthusiasts can benefit from IV therapy as it aids in post-workout recovery and muscle repair. The infusion of amino acids and minerals helps to reduce muscle soreness and inflammation, speeding up the recovery process and promoting optimal performance."
    },
    {
        icon: <SunIcon className="h-6 w-6"/>,
        title: "Stress Relief and Relaxation",
        description:
            "IV therapy can provide a sense of relaxation and stress relief. Certain formulations may include vitamins and minerals known for their calming effects, such as magnesium and B vitamins, which can help alleviate anxiety and promote a sense of well-being."
    },
    {
        icon: <SparklesIcon className="h-6 w-6"/>,
        title: "Beauty and Skin Benefits",
        description:
            "IV therapy can contribute to healthier skin, hair, and nails. The infusion of vitamins, such as biotin and collagen-boosting nutrients, can enhance skin elasticity, promote a youthful complexion, and strengthen hair and nails."
    },
    {
        icon: <FingerPrintIcon className="h-6 w-6"/>,
        title: "Customized Treatments",
        description:
            "IV therapy is highly customizable to suit your specific needs. Whether you require hydration, immune support, vitamin replenishment, or a combination of benefits, a qualified healthcare professional can tailor the IV infusion to address your unique requirements."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 pt-32"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
                className=" md:w-3/5:"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText>Experience the Benefits of <span className="text-secondary-300">IV Therapy</span></HText>
                <p className="my-5 text-md">
                    Experience the convenience and immediate effects of IV therapy, as our team of experienced professionals ensures a safe and comfortable experience throughout your session. Discover the transformative benefits and optimize your wellness journey with IV therapy.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="mt-5 md:grid grid-cols-2 justify-center gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div>
                {/* GRAPHIC */}
                <img />

                {/* DESCRIPTION */}
                <div>
                      
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;
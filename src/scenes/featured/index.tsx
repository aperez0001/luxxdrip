import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Featured = ({setSelectedPage}: Props) => {
  return (
    <section
        id="featured"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Featured)}
        >
            <div>
                
            </div>
        </motion.div>
    </section>
  )
}

export default Featured;
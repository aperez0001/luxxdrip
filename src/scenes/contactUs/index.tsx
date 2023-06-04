import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  
    const inputStyles = `mt-10 w-full rounded-lg bg-secondary-500 px-5 py-3 placeholder-black` 

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e: any) => {

        const isValid = await trigger();

        if(!isValid) {
            e.preventDefault()
        }
    }

    return (
    <section
        id="contactus"
        className='h-screen mx-auto w-5/6 pt-32'
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
                className='md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText>
                    <span className='text-secondary-300'>
                        JOIN NOW 
                    </span> TO GET YOUR BODY HEALTHY
                </HText>
            </motion.div>

            {/* FORM */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div
                    className='mt-10 basis-3/5 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/f675a68b8e5703e368a1a1bfa9f840f6"
                        method="POST"
                    >
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder='NAME'
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-secondary-300'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max lenght is 100 characters."}
                            </p>
                        )}
                        
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder='EMAIL'
                            {...register("email", {
                                required: true,
                                pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                            })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-secondary-300'>
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className={inputStyles}
                            placeholder='MESSAGE'
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className='mt-1 text-secondary-300'>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max lenght is 2000 characters."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className='mt-5 rounded-md bg-secondary-300 px-10 py-2 hover:bg-primary-500 hover:text-white'
                        >
                            SUBMIT
                        </button>

                    </form>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs
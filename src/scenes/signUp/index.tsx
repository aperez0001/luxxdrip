import useMediaQuery from '@/hooks/useMediaQuery'
import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const MailchimpForm = ({ setSelectedPage }: Props) => {
  
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

    return (
    
    <section 
        className="mx-auto min-h-full w-5/6 py-32"
        id="joinnow">
        
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.JoinNow)}>
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
                <hr className='h-1 mb-12 bg-gray-200 border-0 dark:bg-gray-700'/>
                <HText>
                    <span className='text-secondary-300'>
                        JOIN NOW 
                    </span> TO GET YOUR BODY HEALTHY
                </HText>
                <p className='py-5'>
                Join Our Email List Now for Exclusive Benefits and Wellness Insights!

                Ready to embark on a journey towards enhanced well-being? Join our email list today and gain access to exclusive benefits, special promotions, and valuable insights to support your wellness goals.
                </p>
                
                {isAboveMediumScreens ? (
                <p>By becoming a part of our email community, you'll receive: 
                <ul className='py-5 space-y-1 list-inside'>
                <li className="flex items-start">
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Exclusive Promotions: Be the first to know about our limited-time offers, seasonal discounts, and special deals on our premium IV therapy treatments. Save money while prioritizing your health and enjoying the luxurious experience of Luxx Drip Therapy.
                </li>
                <li className="flex items-start">
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Wellness Tips and Insights: Stay informed with our expertly curated content. Receive wellness tips, nutritional guidance, and the latest insights on how to optimize your well-being. Discover new approaches to self-care and learn about the benefits of IV therapy in achieving a healthier, more vibrant life.
                </li>
                <li className="flex items-start">
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Giveaways and Contests: Participate in exciting giveaways and contests exclusive to our email subscribers. Get a chance to win complimentary IV therapy sessions, luxury wellness packages, and other amazing prizes designed to uplift your mind, body, and spirit.
                </li>
                <li className="flex items-start">
                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    Events and News: Stay in the loop with Luxx Drip Therapy events, workshops, and community initiatives. Be the first to hear about new treatment offerings, additions to our team, and other exciting updates happening in our luxurious wellness space.
                </li>
                </ul>
                    Sign up today to start receiving the benefits and knowledge that Luxx Drip Therapy has to offer.
                </p>
                ) : (
                    <p>Sign up today to start receiving the benefits and knowledge that Luxx Drip Therapy has to offer.</p>
                )}
            </motion.div>

            {/* FORM */}
            <motion.div 
                className="flex flex-col items-center justify-center px-6  mx-auto pb-32 lg:py-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Join Now
                        </h1>
                        <form 
                            className="space-y-4 md:space-y-6"
                            action="https://luxxdrip.us21.list-manage.com/subscribe/post?u=e01919a7baafa2016354fe5f6&amp;id=44d003f703&amp;f_id=00a725e7f0"
                            method="post"
                            target="_blank"
                        >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    name="EMAIL" 
                                    id="mce-EMAIL"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@company.com" 
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input 
                                    type="name" 
                                    name="FNAME" 
                                    id="mce-FNAME" 
                                    placeholder="First Name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input 
                                    type="name" 
                                    name="LNAME" 
                                    id="mce-LNAME" 
                                    placeholder="Last Name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    required
                                />
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input 
                                        id="terms" 
                                        aria-describedby="terms" 
                                        type="checkbox" 
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the 
                                        <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div> */}
                            <button 
                                type="submit" 
                                name="subscribe"
                                value="Subscribe"
                                className="w-full bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Join Now
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>

    
  )
}

export default MailchimpForm
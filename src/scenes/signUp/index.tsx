import HText from '@/shared/HText'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const MailchimpForm = ({ setSelectedPage }: Props) => {
  
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
        id="joinnow"
        className='mx-auto min-h-full w-5/6 pt-32'
    >
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.JoinNow)}>
            {/* HEADER */}
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
                <HText>
                    <span className='text-secondary-300'>
                        JOIN NOW 
                    </span> TO GET YOUR BODY HEALTHY
                </HText>
                <p className='py-5'>
                Join Our Email List Now for Exclusive Benefits and Wellness Insights!

                Ready to embark on a journey towards enhanced well-being? Join our email list today and gain access to exclusive benefits, special promotions, and valuable insights to support your wellness goals.

                By becoming a part of our email community, you'll receive:
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
            </motion.div>

            {/* FORM */}
            <div className=' justify-between gap-8 md:flex'>
                <motion.div
                    className='basis-3/5 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div id="mc_embed_shell">
                        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                        <style>{`
                            #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
                            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                        `}</style>
                        <div id="mc_embed_signup">
                            <form
                            action="https://luxxdrip.us21.list-manage.com/subscribe/post?u=e01919a7baafa2016354fe5f6&amp;id=44d003f703&amp;f_id=00a725e7f0"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            >
                            <div id="mc_embed_signup_scroll">
                                
                                <div className="indicates-required">
                                <span className="asterisk">*</span> indicates required
                                </div>
                                <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">
                                    First Name <span className="asterisk">*</span>
                                </label>
                                <input type="text" name="FNAME" className="required text" id="mce-FNAME" value="" required />
                                </div>
                                <div className="mc-field-group">
                                <label htmlFor="mce-LNAME">
                                    Last Name <span className="asterisk">*</span>
                                </label>
                                <input type="text" name="LNAME" className="required text" id="mce-LNAME" value="" required />
                                </div>
                                <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">
                                    Email Address <span className="asterisk">*</span>
                                </label>
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" value="" required />
                                </div>
                                <div id="mce-responses" className="clearfalse">
                                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                                </div>
                                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                <input type="text" name="b_e01919a7baafa2016354fe5f6_44d003f703" tabIndex={-1} value="" />
                                </div>
                                <div className="clear">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                </div>
                            </div>
                            </form>
                        </div>
                        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                        <script
                            type="text/javascript"
                            dangerouslySetInnerHTML={{
                            __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='merge';fnames[2]='LNAME';ftypes[2]='merge';fnames[0]='EMAIL';ftypes[0]='merge';fnames[3]='ADDRESS';ftypes[3]='merge';fnames[4]='PHONE';ftypes[4]='merge';fnames[5]='BIRTHDAY';ftypes[5]='merge';fnames[6]='REFERRAL';ftypes[6]='merge';false}(jQuery));var $mcj = jQuery.noConflict(true);`,
                            }}
                        />
    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default MailchimpForm
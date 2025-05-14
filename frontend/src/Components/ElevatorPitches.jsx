import { motion } from "framer-motion";



const ElevatorPitches = () => {
return (
    <div>

            <motion.div
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="p-6 bg-white rounded-lg max-w-5xl mx-auto mt-8"
            >
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            Empowering Small Businesses
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                            At Madrigal IT Web Solutions, we are dedicated to empowering small
                            businesses by offering custom and scalable websites designed with security
                            best practices in mind. As a small business owner, you want to focus on
                            what you do best—serving your customers and growing your company. We take
                            the burden of website design and development off your shoulders, ensuring
                            your site ranks high in Search Engine Optimization (SEO) scores. With
                            meticulous encoding and support for Google Business Profile, your business
                            can achieve visibility on the first page of Google. Additionally, our
                            monthly payment plans make it easier for you to budget for your website
                            without compromising on quality. Continuous updates and security monitoring
                            mean that your website remains secure and up-to-date, allowing you to
                            concentrate on your core business activities.
                    </p>
            </motion.div>
            <motion.div
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="p-6 bg-white rounded-lg max-w-5xl mx-auto mt-8"
            >
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            Supporting Startups
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                            For startups, a strong digital presence is crucial for attracting investors and customers. 
                            We specialize in building websites that not only look great but perform exceptionally well 
                            in search rankings. Startups can benefit from our expert SEO encoding, which boosts visibility 
                            and drives traffic to the site. With a focus on scalable solutions, your website grows with your 
                            business. We also offer monthly website management services that include fixing bugs, updating 
                            website dependencies, and enhancing SEO efforts. This proactive approach ensures that your 
                            website is always functioning at its best, allowing you to pursue innovative ideas 
                            and expand your market reach without worrying about the technical aspects.
                    </p>
            </motion.div>
            <motion.div
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="p-6 bg-white rounded-lg max-w-5xl mx-auto mt-8"
            >
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            Showcasing Artists
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                            Artists need a platform that reflects their unique creativity and helps them reach a wider audience. 
                            We understand this and offer tailor-made websites that showcase artistic work while scoring high on SEO. 
                            By leveraging security best practices and ongoing SEO management, artists can ensure their website is not 
                            only beautiful but also easy to find online. Our team handles all the intricate aspects of web development, 
                            from initial design to continuous optimization, freeing artists to focus on their craft. With the added 
                            benefit of retainer services for established websites, we provide ongoing support to keep your website 
                            current and secure, maintaining its relevance in the constantly evolving digital landscape.
                    </p>
            </motion.div>
    </div>
)
}

export default ElevatorPitches
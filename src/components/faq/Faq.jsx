import React from 'react';
import './faq.css';


const Faq = () => {
  return (
    <div className='faq'>
        <div className="faq_title">
        <spam>FAQs</spam>(Frequently Asked Questions)
        </div>
        <details open>
            <summary>
                What types of websites does METALOGIC specialize in developing?
            </summary>
            <div>
                METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals. 
            </div>
        </details>
        <details>
            <summary>
                What programming languages and technologies does METALOGIC use for web development?
            </summary>
            <div>
                Our team is proficient in a variety of programming languages such as HTML, CSS, JavaScript, as well as popular web development frameworks and technologies. We choose the stack based on the requirements of each project.
            </div>
        </details>
        <details>
            <summary>
                How do you ensure that the websites you develop are mobile-responsive?
            </summary>
            <div>
                We prioritize responsive design principles during development to ensure that websites adapt seamlessly to various screen sizes and devices. This guarantees an optimal user experience across desktops, tablets, and mobile devices.
            </div>
        </details>
        <details>
            <summary>
                Can METALOGIC integrate third-party services or APIs into a website?
            </summary>
            <div>
                Yes, we have experience integrating third-party services, APIs, and plugins to enhance the functionality of your website. Whether it's payment gateways, social media integrations, or other external services, we can seamlessly incorporate them into your web solution.
            </div>
        </details>
        <details>
            <summary>
                What steps does METALOGIC take to ensure website security during and after development?
            </summary>
            <div>
                Security is a top priority for us. We follow industry best practices, use secure coding techniques, and implement measures such as SSL certificates to ensure the security of your website. We also provide ongoing support and updates to address any potential security vulnerabilities.
            </div>
        </details>
        <details>
            <summary>
                Can METALOGIC work with an existing website or redesign an outdated one?
            </summary>
            <div>
                Absolutely. We offer website redesign services to modernize outdated websites or improve their functionality. If you have an existing site, we can work with your current content and structure to enhance the user experience and overall design.
            </div>
        </details>
        <details>
            <summary>
                What is the typical process for web development with METALOGIC?
            </summary>
            <div>
                Our web development process involves initial consultations, requirements gathering, planning, design, development, testing, deployment, and ongoing support. We keep you involved at each stage to ensure that the final product aligns with your vision and goals.
            </div>
        </details>
        <details>
            <summary>
                Does METALOGIC provide ongoing maintenance and support for websites after launch?
            </summary>
            <div>
                Yes, we offer ongoing maintenance and support services to address any issues, implement updates, and provide assistance as needed. This ensures the long-term success and functionality of your website.
            </div>
        </details>
        <details>
            <summary>
                How does METALOGIC approach SEO (Search Engine Optimization) for websites?
            </summary>
            <div>
                We follow SEO best practices during development, such as optimizing site structure, implementing clean and semantic code, and providing meta tags. Additionally, we can offer guidance on content and further SEO strategies to improve your website's visibility on search engines.
            </div>
        </details>
        <details>
            <summary>
                What factors influence the cost of web development with METALOGIC?
            </summary>
            <div>
                The cost is influenced by factors such as project complexity, features, customizations, and ongoing support. We provide transparent pricing based on a thorough understanding of your requirements during the initial consultation.
            </div>
        </details>
    </div>
  )
}

export default Faq

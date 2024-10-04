import React from 'react'
import './Services.css'
import innovative_technology_solutions from '../Assets/innovative_technology_solutions.png'
import customized_it_strategies from '../Assets/customized_it_strategies.png'
import scalable_growth_solutions from '../Assets/scalable_growth_solutions.png'
import strategic_partnership from '../Assets/strategic_partnership.png'
import robust_security_measures from '../Assets/robust_security_measures.png'
import commitment_to_excellence from '../Assets/commitment_to_excellence.png'
import agile_and_adaptive from '../Assets/agile_and_adaptive.png'



const Services = () => {
    return (
        <div className='services'>
            <h2> <span className='b-c'>What sets</span> <span className='l-c'>PCL Infotech </span> <span className='b-c'>Apart</span></h2>
            <div className="services-web-container">
                <div className="innovative-technology-solutions">
                    <img src={innovative_technology_solutions} alt="" />
                    <h3>Innovative Technology Solutions</h3>
                    <p>Stay ahead in a rapidly evolving digital world with our
                        cutting-edge IT services. We leverage the latest technologies to ensure your business
                        remains at the forefront of innovation and efficiency.</p>
                </div>
                <div className="customized-it-strategies">
                    <img src={customized_it_strategies} alt="" />
                    <h3>Customized IT Strategies</h3>
                    <p>We recognize that your business is unique, and so are your
                        challenges. That’s why we deliver tailored IT solutions that align perfectly with your specific
                        needs and objectives, ensuring maximum impact.</p>
                </div>
                <div className="scalable-growth-solutions">
                    <img src={scalable_growth_solutions} alt="" />
                    <h3>Scalable Growth Solutions</h3>
                    <p>As your business grows, so do your IT needs. Our solutions are designed to scale with your business, providing the flexibility and adaptability required to thrive in a dynamic market.</p>
                </div>
                <div className="strategic-partnership">
                    <img src={strategic_partnership} alt="" />
                    <h3>Strategic Partnership</h3>
                    <p>We don’t just provide services; we build partnerships. We work closely with you to understand your business goals and craft IT strategies that support your long-term vision.</p>
                </div>
            </div>
            <div className="services-host-container">
                <div className="robust-security-measures">
                    <img src={robust_security_measures} alt="" />
                    <h3>Robust Security Measures</h3>
                    <p>In an age where cybersecurity is paramount, we prioritize the safety and security of your data. Our comprehensive security solutions protect your business from threats, giving you peace of mind.</p>
                </div>
                <div className="commitment-to-excellence">
                    <img src={commitment_to_excellence} alt="" />
                    <h3>Commitment To Excellence</h3>
                    <p>At PCL Infotech, we don’t just meet expectations—we exceed them. Our unwavering commitment to quality, innovation, and customer satisfaction sets us apart as a trusted IT partner.</p>
                </div>
                <div className="agile-and-adaptive">
                    <img src={agile_and_adaptive} alt="" />
                    <h3>Agile And Adaptive</h3>
                    <p>In today’s fast-paced environment, agility is key. We pride ourselves on our ability to quickly adapt to changes and deliver solutions that keep your business responsive and resilient.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
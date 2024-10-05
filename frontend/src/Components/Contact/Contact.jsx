import React from 'react'
import './Contact.css'
import digital_innovation from '../Assets/digital_innovation.png'
import passionate_approach from '../Assets/passionate_approach.png'
import transparent_business from '../Assets/transparent_business.png'
import technical_support from '../Assets/technical_support.png'
import reliable_clients_service from '../Assets/reliable_clients_service.png'
import delivery_on_time from '../Assets/delivery_on_time.png'
import customized_solutions from '../Assets/customized_solutions.png'
import cost_effective_services from '../Assets/cost_effective_services.png'

const Contact = () => {




    return (
        <div className='contact'>
            <h2>Why We're Your Best Fit</h2>
            <div className="contact-left-container">
                <div className="digital-innovation">
                    <img src={digital_innovation} alt="" />
                    <p>Digital Innovation</p>
                </div>
                <div className="passionate-approach">
                    <img src={passionate_approach} alt="" />
                    <p>Passionate Approach</p>
                </div>
                <div className="transparent-business">
                    <img src={transparent_business} alt="" />
                    <p>Transparent Business</p>
                </div>
                <div className="customized-solutions">
                    <img src={customized_solutions} alt="" />
                    <p>Customized Solutions</p>
                </div>
            </div>
            <div className="contact-left-down-container-1">
                <div className="technical-support">
                    <img src={technical_support} alt="" />
                    <p>Technical Support</p>
                </div>
                <div className="reliable-clients-service">
                    <img src={reliable_clients_service} alt="" />
                    <p>Reliable Clients Service</p>
                </div>
                <div className="delivery-on-time">
                    <img src={delivery_on_time} alt="" />
                    <p>Delivery On Time</p>
                </div>
                <div className="cost-effective-services">
                    <img src={cost_effective_services} alt="" />
                    <p>Cost-Effective Services</p>
                </div>
            </div>
        </div>
    )
}

export default Contact

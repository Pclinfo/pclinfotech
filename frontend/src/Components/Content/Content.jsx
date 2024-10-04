import React from 'react'
import './Content.css'
import internship_banner from '../Assets/internship_banner.jpg'
import elevate_your_business from '../Assets/elevate_your_business.png'
import our_mission from '../Assets/our_mission.png'
import vision_into_reality from '../Assets/vision_into_reality.png'


const Content = () => {
    return (
        <div className='content'>
            <div className="internship-topic">
            </div>
            <div className="internship-banner">
                <img src={internship_banner} alt="" />
                <div className="internship-ctn">
                <h2><span className='l-c'>Pioneering Future Technologies at</span> <span className='b-c'>PCL Infotech (R & D)</span></h2>
                <p>At PCL Infotech, we are not only focused on delivering cutting-edge IT solutions but are also committed to exploring and advancing future technologies. Our Research and Development (R&D) division actively investigates emerging fields such as Quantum Computing, Artificial Intelligence (AI), Blockchain, and more. We strive to stay ahead of the curve by innovating and experimenting with these transformative technologies, aiming to shape the digital landscape of tomorrow.</p>
                <p>We believe that true innovation comes from collaboration. That’s why we are open to collaborative R&D opportunities with businesses, academic institutions, and tech pioneers. By working together, we can push the boundaries of technology, unlock new possibilities, and create solutions that will define the future.</p>
            </div>
            </div>
            <div>
            <div className="elevate-your-business">
                <h2>Ready to Elevate Your <span className='b-c'>Business</span></h2>
                <img src={elevate_your_business} alt="" />
                <p>At PCL Infotech, we believe that the right digital strategy can transform your business and fuel unprecedented growth. Our expert team is committed to crafting tailored solutions that not only meet your current needs but also anticipate future challenges. Let us partner with you to create a roadmap for success that leverages cutting-edge technology and innovative practices.</p>
                
            </div>
            <div className='our-mission'>
                <h2>Your Success is <span className='b-c'>Our Mission</span></h2>
                <img src={our_mission} alt="" />
                <p>We don’t just deliver IT services—we build lasting partnerships based on trust, excellence, and shared goals. With PCL Infotech, you gain a strategic ally dedicated to driving your business forward. Whether you’re looking to streamline operations, enhance security, or expand your digital presence, we’re here to guide you every step of the way.</p>
            </div>
            <div className="vision-into-reality">
                <h2>Transform Your Vision into <span className='b-c'>Reality</span> </h2>
                <img src={vision_into_reality} alt="" />
                <p>Harness the power of technology with PCL Infotech and unlock new opportunities for your business. Let’s collaborate to create a future where your business thrives in an ever-evolving digital landscape.</p>
            </div>
            </div>
        </div>
    )
}

export default Content
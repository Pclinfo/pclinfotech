import React from 'react'
import './Consultant.css'
import business_operations from '../Assets/business_operations.png'
import customer_marketing from '../Assets/customer_marketing.png'
import enterprise_technology_performance from '../Assets/enterprise_technology_performance.png'
import strategy_analytics from '../Assets/strategy_analytics.png'
import product_design from '../Assets/product_design.png'
import management from '../Assets/management.png'

const Consultant = () => {
  return (
    <div className='consultant'>
      <h2>Your Goals <span className='b-c'>Our Vision</span></h2>
      <p>Our consulting services are designed to help you optimize your business operations, leverage technology, and make data-driven decisions. We offer strategic insights and practical solutions to drive your business forward.</p>
      <div className="consultant-business-container">
        <div className="business-opertions">
          <img src={business_operations} alt="" />
          <h3>Business Opertions</h3>
          <p>Streamline your operations with our business consulting services. We help you identify inefficiencies, implement strategies that improve productivity, and reduce costs.</p>
        </div>
        <div className="customer-marketing">
          <img src={customer_marketing} alt="" />
          <h3>Customer Marketing</h3>
          <p>Enhance your customer experience and marketing efforts with our consulting services. We provide insights and strategies that help you attract, engage, and retain customers.</p>
        </div>
        <div className="enterprise-technology-performance">
          <img src={enterprise_technology_performance} alt="" />
          <h3> Enterprise Technology Performance</h3>
          <p>Optimize your IT infrastructure and improve performance with our enterprise technology consulting. We help you implement the right technologies to drive efficiency and growth.</p>
        </div>
      </div>
      <div className="consultant-strategy-container">
        <div className="strategy-analytics">
          <img src={strategy_analytics} alt="" />
          <h3>Strategy Analytics</h3>
          <p>Make data-driven decisions with our strategy and analytics consulting services. We help you analyze data, identify trends, and develop strategies that align with your business goals.</p>
        </div>
        <div className="product-design">
          <img src={product_design} alt="" />
          <h3>Product Design</h3>
          <p>Bring your ideas to life with our product design consulting services. We help you design and develop products that meet customer needs and stand out in the market. </p>
        </div>
        <div className="management">
          <img src={management} alt="" />
          <h3> Management</h3>
          <p>Our experts work closely with you to understand your business challenges and develop solutions that deliver measurable results.</p>
        </div>
      </div>

    </div>
  )
}

export default Consultant
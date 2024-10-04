import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import web_development_icon from '../Assets/web_development_icon.png'
import mobile_app_development from '../Assets/mobile_app_development.png'
import web_design_icon from '../Assets/web_design_icon.png'
import software_products from '../Assets/software_products.png'
import ecommerce_website_development from '../Assets/ecommerce_website_development.png'
import email_templates from '../Assets/email_templates.png'
import cms_website from '../Assets/cms_website.png'
import open_source_development from '../Assets/open_source_development.png'
import payment_gateway_integration from '../Assets/payment_gateway_integration.png'
import content_writing from '../Assets/content_writing.png'
import search_engine_marketing_SEM from '../Assets/search_engine_marketing_SEM.png'
import social_media_marketing_SMM from '../Assets/social_media_marketing_SMM.png'
import social_media_marketing from '../Assets/social_media_marketing.png'
import domain_registration from '../Assets/domain_registration.png'
import vps_hosting from '../Assets/vps_hosting.png'
import wordpress_hosting from '../Assets/wordpress_hosting.png'
import cloud_server from '../Assets/cloud_server.png'
import strategy_analytics from '../Assets/strategy_analytics.png'
import product_design from '../Assets/product_design.png'
import job_portal from '../Assets/job_portal.png'
import internships from '../Assets/internships.png'
import training_placement from '../Assets/training_placement.png'
import digital_marketing from '../Assets/digital_marketing.png'
import branding from '../Assets/branding.png'
import contact_info from '../Assets/contact_info.png'
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {

    const [menu, setMenu] = useState("Home");
    const [toggleMenu, setToggleMenu] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState("");

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleSubmenuToggle = (menuName) => {
        setSubmenuOpen(submenuOpen === menuName ? "" : menuName);
    };

    const handleMenuItemClick = (menuItem) => {
        setMenu(menuItem);
        setToggleMenu(false); // Close the menu
        setSubmenuOpen(""); // Close any open submenus
    };


    return (
        <div className='navbar'>
            <div className="nav-logo">
               <Link to="/" onClick={() => handleMenuItemClick("Home")}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="menu-toggle" onClick={handleMenuToggle}>
                {toggleMenu ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-menu ${toggleMenu ? 'nav-menu-active' : ''}`}>
                <li onClick={() => handleMenuItemClick("Home")}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>{menu === "Home" ? <hr /> : null}
                </li>
                <li>
                    <div className="main-menu" onClick={() => handleSubmenuToggle("Services")}>
                        Services
                    </div>
                    <ul className={`submenu ${submenuOpen === "Services" ? 'submenu-open' : ''}`}>
                        <li>
                            <span><img src={web_development_icon} alt="" />Web Development</span>
                            <ul className="submenu1">
                                <li onClick={() => { handleMenuItemClick("Web Development") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/web-development'> <img src={web_development_icon} alt="" />Web Application </Link>{menu === "web-development" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Mobile App Development") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/mobile-app-development'> <img src={mobile_app_development} alt="" /> Mobile App Development </Link>{menu === "mobile-app-development" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Web Design") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/web-design'> <img src={web_design_icon} alt="" /> Web Design  </Link>{menu === "web-design" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("ECommerce Website Development") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/eCommerce-website-development'> <img src={ecommerce_website_development} alt="" />eCommerce Website Development   </Link>{menu === "eCommerce-website-development" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Email Templates") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/email-templates'> <img src={email_templates} alt="" />Email Templates </Link>{menu === "email-templates" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("CMS Website Development") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/cms-website-development'> <img src={cms_website} alt="" />CMS Website Development   </Link>{menu === "cms-website-development" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Open Source Development") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/open-source-development'> <img src={open_source_development} alt="" />Open Source Development </Link>{menu === "open-source-development" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Payment Gateway Integration") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/payment-gateway-integration'> <img src={payment_gateway_integration} alt="" />Payment Gateway Integration </Link>{menu === "payment-gateway-integration" ? <hr /> : <></>}</li>
                            </ul>
                        </li>
                        <li>
                            <span><img src={digital_marketing} alt="" />Digital Marketing</span>
                            <ul className="submenu1">
                                <li onClick={() => { handleMenuItemClick("Search Engine Marketing- SEM ") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/search-engine-marketing-sem '> <img src={search_engine_marketing_SEM} alt="" />Search Engine Marketing- SEM  </Link>{menu === "search-engine-marketing-sem" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Social Media Marketing- SMM") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/social-media-marketing-smm'> <img src={social_media_marketing_SMM} alt="" />Social Media Marketing- SMM  </Link>{menu === "social-media-marketing-smm" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Search Engine Optimization -SEO") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/search-engine-optimization-seo'> <img src={social_media_marketing} alt="" />Search Engine Optimization -SEO  </Link>{menu === "search-engine-optimization-seo" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Content writing") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/content-writing'> <img src={content_writing} alt="" />Content writing / Creator </Link>{menu === "content-writing" ? <hr /> : <></>}</li>
                                <li onClick={() => { handleMenuItemClick("Branding") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/branding'> <img src={branding} alt="" />Branding  </Link>{menu === "branding" ? <hr /> : <></>}</li>
                            </ul>
                        </li>
                        <li>
                            <span><li onClick={() => { handleMenuItemClick("Software Products") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/software-products'> <img src={software_products} alt="" /> Software Products </Link>{menu === "software-products" ? <hr /> : <></>}</li></span>
                        </li>
                        <li>
                            <span><li onClick={() => { handleMenuItemClick("Products Designs") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/product-designs'> <img src={product_design} alt="" />Product Designs </Link>{menu === "product-designs" ? <hr /> : <></>}</li></span>
                        </li>
                    </ul>
                </li>
                <li>
                    Hosting / Server
                    <ul className="submenu">
                        <li onClick={() => { handleMenuItemClick("Domain Registration") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/domain-registration'> <img src={domain_registration} alt="" />Domain Registration </Link>{menu === "domain-registration" ? <hr /> : <></>}</li>
                        <li onClick={() => { handleMenuItemClick("VPS hosting") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/vps-hosting'> <img src={vps_hosting} alt="" />VPS hosting </Link>{menu === "vps-hosting" ? <hr /> : <></>}</li>
                        <li onClick={() => { handleMenuItemClick("WordPress hosting") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/wordpress-hosting'> <img src={wordpress_hosting} alt="" />WordPress hosting </Link>{menu === "wordpress-hosting" ? <hr /> : <></>}</li>
                        <li onClick={() => { handleMenuItemClick("Cloud server") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/cloud-server'> <img src={cloud_server} alt="" />Cloud server</Link>{menu === "cloud-server" ? <hr /> : <></>}</li>
                    </ul>
                </li>
                <li>
                    Training and Placement
                    <ul className="submenu">
                        <li onClick={() => { handleMenuItemClick("Software Trainings") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/software-trainings'> <img src={training_placement} alt="" />Courses
                        </Link>{menu === "software-trainings" ? <hr /> : <></>}</li>
                        <li onClick={() => { handleMenuItemClick("Internships") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/internships'> <img src={internships} alt="" />Internships </Link>{menu === "internships" ? <hr /> : <></>}</li>
                    </ul>
                </li>
                <li>
                    Consulting
                    <ul className="submenu">
                        <li onClick={() => { handleMenuItemClick("Data Analytics") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/data analytics'> <img src={strategy_analytics} alt="" />Management Consultant</Link>{menu === "data analytics" ? <hr /> : <></>}</li>
                    </ul>
                </li>
                <li>
                    Careers
                    <ul className="submenu">
                        <li onClick={() => { handleMenuItemClick("Job Portal") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/job-portal'> <img src={job_portal} alt="" /> Careers </Link>{menu === "job-portal" ? <hr /> : <></>}</li>
                    </ul>
                </li>
                <li>
                    Contact Us
                    <ul className="submenu">
                        <li onClick={() => { handleMenuItemClick("Contact Info") }}> <Link style={{ textDecoration: 'none', color: 'black' }} to='/contact-info'> <img src={contact_info} alt="" />Contact Info </Link>{menu === "contact-info" ? <hr /> : <></>}</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;
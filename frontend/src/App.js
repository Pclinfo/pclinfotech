import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import WebDevelopment from './Pages/WebDevelopment';
import MobileAppDevelopment from './Pages/MobileAppDevelopment';
import Webdesign from './Pages/Webdesign';
import SoftwareProducts from './Pages/SoftwareProducts';
import ECommerceWebsiteDevelopment from './Pages/ECommerceWebsiteDevelopment';
import EmailTemplates from './Pages/EmailTemplates';
import CMSWebsiteDevelopment from './Pages/CMSWebsiteDevelopment';
import OpenSourceDevelopment from './Pages/OpenSourceDevelopment';
import PaymentGatewayIntegration from './Pages/PaymentGatewayIntegration';
import WebsiteWhatsAppIntergration from './Pages/WebsiteWhatsAppIntergration';
import ContentWriting from './Pages/ContentWriting';
import SearchEngineMarketing from './Pages/SearchEngineMarketing';
import SocialMediaMarketing from './Pages/SocialMediaMarketing';
import SearchEngineOptimization from './Pages/SearchEngineOptimization';
import GoogleMyBusiness from './Pages/GoogleMyBusiness';
import ECommerceSEO from './Pages/ECommerceSEO';
import LogoDesigns from './Pages/LogoDesigns';
import PosterDesigns from './Pages/PosterDesigns';
import Artwork from './Pages/Artwork';
import ProductPackaging from './Pages/ProductPackaging';
import Domain from './Pages/Domain';
import SSL from './Pages/SSL';
import VPSHosting from './Pages/VPSHosting';
import WordpressHosting from './Pages/WordpressHosting';
import CloudServer from './Pages/CloudServer';
import SoftwareTrainings from './Pages/SoftwareTrainings';
import DataAnalytics from './Pages/DataAnalytics'
import ProductsDesign from './Pages/ProductsDesign';
import Management from './Pages/Management';
import JobPortal from './Pages/JobPortal';
import Internship from './Pages/Internship';
import Outsourcing from './Pages/Outsourcing';
import DigitalMarketingPrice from './Pages/DigitalMarketingPrice';
import Branding from './Pages/Branding';
import HostingServerPrice from './Pages/HostingServerPrice';
import ConsultingPrice from './Pages/ConsultingPrice';
import ContactInfo from './Pages/ContactInfo';
import LoginSignup from './Pages/LoginSignup';





function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/web-development' element={<WebDevelopment />} />
          <Route path='/mobile-app-development' element={<MobileAppDevelopment />} />
          <Route path='/web-design' element={<Webdesign />} />
          <Route path='/software-products' element={<SoftwareProducts />} />
          <Route path='/eCommerce-website-development' element={<ECommerceWebsiteDevelopment />} />
          <Route path='/email-templates' element={< EmailTemplates />} />
          <Route path='/cms-website-development' element={< CMSWebsiteDevelopment />} />
          <Route path='/open-source-development' element={< OpenSourceDevelopment />} />
          <Route path='/payment-gateway-integration' element={< PaymentGatewayIntegration />} />
          <Route path='/website-whatsApp-integration' element={< WebsiteWhatsAppIntergration />} />
          <Route path='/content-writing' element={<ContentWriting />} />
          <Route path='/search-engine-marketing-sem' element={<SearchEngineMarketing />} />
          <Route path='/social-media-marketing-smm' element={< SocialMediaMarketing />} />
          <Route path='/search-engine-optimization-seo' element={<SearchEngineOptimization />} />
          <Route path='/google-my-business-local-seo' element={< GoogleMyBusiness />} />
          <Route path='/e-commerce-seo' element={< ECommerceSEO />} />
          <Route path='/logo-designs' element={< LogoDesigns />} />
          <Route path='/poster-designs' element={< PosterDesigns />} />
          <Route path='/artwork' element={< Artwork />} />
          <Route path='/product-packaging-designs' element={< ProductPackaging />} />
          <Route path='/domain-registration' element={<Domain />} />
          <Route path='/ssl-certificates' element={< SSL />} />
          <Route path='/vps-hosting' element={< VPSHosting />} />
          <Route path='/wordpress-hosting' element={< WordpressHosting />} />
          <Route path='/cloud-server' element={< CloudServer />} />
          <Route path='/software-trainings' element={< SoftwareTrainings />} />
          <Route path='/data analytics' element={< DataAnalytics />} />
          <Route path='/product-designs' element={< ProductsDesign />} />
          <Route path='/management' element={< Management />} />
          <Route path='/job-portal' element={< JobPortal />} />
          <Route path='/internships' element={< Internship />} />
          <Route path='/outsourcing' element={< Outsourcing />} />
          <Route path='/digital-marketing' element={< DigitalMarketingPrice />} />
          <Route path='/branding' element={< Branding />} />
          <Route path='/hosting-/-server' element={< HostingServerPrice />} />
          <Route path='/consulting' element={< ConsultingPrice />} />
          <Route path='/contact-info' element={< ContactInfo />} />
          <Route path='/loginsignup' element={< LoginSignup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

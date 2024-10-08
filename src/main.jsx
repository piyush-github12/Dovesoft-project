import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SMSpage from './SMS page/SMSpage.jsx'
import Whatsapp from './WhatsappPage/Whatsapp.jsx'
import RCSpage from './RCSpage/RCS.jsx'
import Instagram from './instagrampage/Instagram.jsx'
import Chatbot from './Chatbot/Chatbot.jsx'
import Integration from './Integration/Integration.jsx'
import Automation from './Automation/Automation.jsx'
import Email from './Email service/Email.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Filegpt from './FileGpt/Filegpt.jsx'
import Linkshortner from './Linkshortner/Linkshortner.jsx'
import Filehosting from './File hosting/Filehosting.jsx'
import Otp from './OTP/Otp.jsx'
import Encry from './Encry Content/Encry.jsx'
import Voice from './Voice/Voice.jsx'
import Aboutus from './Aboutus/Aboutus.jsx'
import Contact from './Contactus/Contact.jsx'
import Careers from './Careers/Careers.jsx'
import Team from './Team/Team.jsx'
import Certificate from './Certificatepage/Certificate.jsx'
import Ir from './Investorrelation/ir.jsx'
import Committees from './Committees/Committees.jsx'
import Privacy from './Privacy/Privacy.jsx'
import Termscondition from './Termscondition/Termscondition.jsx'



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sms" element={<SMSpage />} />
      <Route path="/whatsapp" element={<Whatsapp />} />
      <Route path="/rcs" element={<RCSpage />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/integration" element={<Integration />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/email" element={<Email />} />
      <Route path="/fileGPT" element={<Filegpt />} />
      <Route path="/linkShortner" element={<Linkshortner />} />
      <Route path="/filehosting" element={<Filehosting />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/encryptedcontent" element={<Encry />} />
      <Route path="/voice" element={<Voice />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/team" element={<Team />} />
      <Route path="/certificates" element={<Certificate />} />
      <Route path="/investor_relation" element={<Ir />} />
      <Route path="/Committees" element={<Committees />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/termscondition" element={<Termscondition />} />

    </Routes>
  </BrowserRouter>
);

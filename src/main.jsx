import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SMSpage from './SMS page/SMSpage.jsx'
import Whatsapp from './WhatsappPage/Whatsapp.jsx'
import RCSpage from './RCSpage/RCS.jsx'
import Instagram from './instagrampage/Instagram.jsx'
import Chatbot from './Chatbot/Chatbot.jsx'
import Intigration from './Intigration/Intigration.jsx'
import Automation from './Automation/Automation.jsx'
import Email from './Email service/Email.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
   <Routes>

    <Route path='/' element={<App/>}/>
    <Route path='/sms' element={<SMSpage/>}/>
    <Route path='/whatsapp' element={<Whatsapp/>}/>
    <Route path='/rcs' element={<RCSpage/>}/>
    <Route path='/instagram' element={<Instagram/>}/>
    <Route path='/chatbot' element={<Chatbot/>}/>
    <Route path='/intigration' element={<Intigration/>}/>
    <Route path='/automation' element={<Automation/>}/>
    <Route path='/email' element={<Email/>}/>

   </Routes>
  </BrowserRouter>,
)

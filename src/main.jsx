import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SMSpage from './SMS page/SMSpage.jsx'
import Whatsapp from './WhatsappPage/Whatsapp.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/sms' element={<SMSpage/>}/>
    <Route path='/whatsapp' element={<Whatsapp/>}/>
   </Routes>
    
  </BrowserRouter>,
)

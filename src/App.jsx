import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Notfound";
import Success from "./Pages/Success";
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;

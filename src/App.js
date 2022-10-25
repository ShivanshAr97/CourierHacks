import { Route, Routes } from 'react-router-dom';

import Navbar2 from './components/Navbar2.js';
import Home2 from './components/Home2.js';
import FitnessNav from './nav_components/FitnessNav.js';
import EatingNav from './nav_components/EatingNav.js';
import WeightNav from './nav_components/WeightNav.js';
import WellnessNav from './nav_components/WellnessNav.js';
import HealthyNav from './nav_components/HealthyNav.js';
import EngineeringNav from './nav_components/EngineeringNav.js';
import NewBlog from './components/NewBlog.js';
import Blog from './components/Blog.js';
import Email from './nav_components/Email.js';
import NavbarComponents from './nav_components/NavbarComponents.js';
import banner8 from '../src/banner/banner8.jpg';


function App() {
  return (
    <>
      <Navbar2></Navbar2>
      <NewBlog></NewBlog>
      
      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/fitness' element={<FitnessNav />} />
        <Route path='/weightloss' element={<WeightNav />} />
        <Route path='/healthyeating' element={<EatingNav />} />
        <Route path='/healthymind' element={<HealthyNav />} />
        <Route path='/wellness' element={<WellnessNav />} />
        <Route path='/behindscenes' element={<NavbarComponents category="Behind the scenes" img1={banner8} img2={"https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61a5c5bd8fd76219dff5e445_1300x860.jpg"}/>} />
        <Route path='/healthyeating' element={<HealthyNav />} />
        <Route path='/engineering' element={<EngineeringNav />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/email' element={<Email/>} />
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lavabg } from './components/export';

//views
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";
import Partner from "./views/Partner/Partner";
import Blogs from './views/Blog/Blogs';
import Blog_sub from './views/Blog/containers/Blog_sub';
import Projects from './views/Project/Projects';
import Projects_sub from './views/Project/containers/Projects_sub';
import Events from './views/Event/Events';
import Event_sub from './views/Event/containers/Event_sub';

import Shop from './views/Shop/Shop';
import Contact from './views/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';


import { Navbar } from "./components/export";
import { Footer } from "./components/export";

// import Scroll from '../../design-project-group-9-ett-website/src/components/SmoothScroll';

function App({ requestService }) {

  return (
    <Router>
      {/* <Navbar /> */}
      <ScrollToTop/>
      <Routes>
        {/* add route with path and element. Element is a js file you made in pages directory */}
        
          <Route path='/' element={<Home requestService={requestService}/> } />
          <Route path='/teams' element={<Team requestService={requestService}/>} />
          <Route path='/partners' element={<Partner requestService={requestService} />}/>
          <Route path='/blogs' element={<Blogs requestService={requestService}/>}/>
          <Route path='/blog/:id' element={<Blog_sub requestService={requestService}/>}/>
          <Route path='/projects' element={<Projects requestService={requestService}/>}/>
          <Route path='/project/:id' element={<Projects_sub requestService={requestService}/>}/>
          <Route path='/events' element={<Events requestService={requestService}/>}/>
          <Route path='/event/:id' element={<Event_sub requestService={requestService}/>}/>
          <Route path='/shop' element={<Shop requestService={requestService}/>}/>
          <Route path='/contact' element={<Contact requestService={requestService}/>}/>
          
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
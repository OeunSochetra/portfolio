import { useEffect } from 'react';
import Aos from "aos";
import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import {Services} from './components/Services';
import {Portfolio} from './components/Portfolio';

function App() {

    useEffect( ()=>{
      Aos.init();
    },[])

  return <>

    <Header/>
    <main>
      <Hero/>
      <Services/>
      {/* <Portfolio/> */}
    </main>
    <Footer/>

  </>
}

export default App;

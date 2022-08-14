import './App.css';
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'

import HomeBanner from './Components/Banner/HomeBanner';

import DemoPages from './Components/Home/DemoPages';
import Seo from './Components/Home/Seo';

import About from './Components/Home/About';

import LightMode from './Components/Home/LightMode';


function App() {
  return (
    <>
    <Header />
    <HomeBanner />
    <DemoPages />
    {/* <DemoPages2 /> */}
    <Seo />
    <About />
    <LightMode />
    <Footer />
   </>
  );
}

export default App;

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import { Helmet } from "react-helmet";

class App extends React.Component  {
  render(){
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar/>
    <div className="max-w-screen-xl mx-auto">
    <Helmet>
                <meta charSet="utf-8" />
                <title> Lawson Matutu Portfolio Website</title>
                <link rel="canonical" href="https://symphonious-axolotl-8f4bde.netlify.app/" />
            </Helmet>


  
    <Banner/>
  <Features/>
    <Projects/>
    <Resume/>
    {/*<Testmonial/>*/}
    <Contact/>
    <Footer/>
    <FooterBottom/>
    </div>
      
    </div>
  );
}
}
export default App;

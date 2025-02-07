import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import ReactGA from 'react-ga'; // Import ReactGA
import { useEffect,useState } from "react";
import Preloader from "./components/Preloader";
const TRACKING_ID = "G-2PSHT2P6P0"; // Replace with your Google Analytics Tracking ID
function App () {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID); // Initialize GA
    ReactGA.pageview(window.location.pathname + window.location.search); // Record initial page view
  }, []);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Preloader shows for 2 seconds

    return () => clearTimeout(timer);
  }, []);
    return (
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
        {isLoading ? <Preloader /> : <Banner/>}
          <Features />
          <Projects />
          <Resume />
          {/*<Testmonial/>*/}
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
    );
  }

export default App;

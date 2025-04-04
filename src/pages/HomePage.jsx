
import Services from '../components/Services';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Achievements from '../components/Achievements';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import TeamSection from '../components/TeamSection';

import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import Mission from '../components/Mission';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Warning from '../components/Warning';
const HomePage = () => {


  return (
    <div className="bg-gray-50">
  
      <Navbar/>
      <Warning/>
      <Hero/>
      <Services/>
      <Marquee/>
      <Mission/>
      <TeamSection/>
      <Achievements/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
   
     
    </div>
  );
};

export default HomePage;

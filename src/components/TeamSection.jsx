import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Ensures the animation runs once per scroll
      offset: 100, // Adjusting offset slightly for smoother trigger
    });
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 md:py-30">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-black mb-8"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          Our <span className="text-gray-500">Leadership Team</span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-anchor-placement="top-bottom"
        >
Our leadership is composed of visionary professionals with extensive experience in IT consultancy, software engineering, business operations, and global delivery.

        </p>
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-anchor-placement="top-bottom"
        >
CEO & Co-Founder – Sets strategic direction and oversees overall business growth.

        </p>
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-anchor-placement="top-bottom"
        >
Chief Technology Officer (CTO) – Leads product innovation and technical excellence.
        </p>
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-anchor-placement="top-bottom"
        >
Director of Client Success – Ensures exceptional client experiences and successful delivery.

        </p>
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-anchor-placement="top-bottom"
        >
Technical Delivery Leads – Oversee project execution, quality, and agile delivery.


        </p>
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-anchor-placement="top-bottom"
        >
Together, our leaders champion Solura’s mission to deliver outstanding results through technology and talent.

        </p>


      </div>
    </section>
  );
};

export default TeamSection;

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
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          Our <span className="text-gray-500">Leadership Team</span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4 text-center"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-anchor-placement="top-bottom"
        >
          Our leaders bring experience and expertise from various industries to
          drive innovation and strategic growth.
        </p>
        <p
          className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center"
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-anchor-placement="top-bottom"
        >
          With a shared commitment to excellence, they ensure our mission is
          achieved with integrity and forward-thinking vision.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;

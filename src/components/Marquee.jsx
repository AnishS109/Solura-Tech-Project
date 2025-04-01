import React from "react";
import "../index.css"


const servicesTop = ["Service1", "Service2", "Service3", "Service4", "Service5"];
const servicesBottom = ["Service6", "Service7", "Service8", "Service9", "Service10"];

const Marquee = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden py-6">
      {/* Upper Marquee (Right to Left) */}
      <div className="marquee">
        <div className="marquee-content animate-marquee-left">
          {[...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop, ...servicesTop].map((service, index) => (
            <span key={index} className="marquee-item md:mx-6 mx-1">
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Lower Marquee (Left to Right) */}
      <div className="marquee mt-6 mb-28">
        <div className="marquee-content animate-marquee-right">
          {[...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom, ...servicesBottom].map((service, index) => (
            <span key={index} className="marquee-item md:mx-6 mx-1">
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;






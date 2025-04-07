import { useState } from "react";
import { Code, Database, Server, CheckCircle, ArchiveRestore, Cloud, ShieldCheck, Cuboid  } from "lucide-react"; // Ya kisi aur icon library se
import "./Services.css"


const services = [
  { 
    icon: <Code className="w-12 h-12 text-blue-600" />, 
    title: "IT Staffing Solutions", 
    description: "Connect with skilled developers and IT experts tailored to your business needs.",
    features: [
      "Contract-Based Staffing",
      "Dedicated Development Teams",
      "Remote IT Talent"
    ],
    color: "blue"
  },
  { 
    icon: <ArchiveRestore className="w-12 h-12 text-green-600" />, 
    title: "Custom Software Development", 
    description: "Build reliable, scalable, and secure software tailored to your operations.",
    features: [
      "Web & Mobile Application Development",
      "Enterprise Solutions",
      "API & System Integration      "
    ],
    color: "green"
  },
  { 
    icon: <Server className="w-12 h-12 text-purple-600" />, 
    title: "SaaS Product Development", 
    description: "Develop and launch cloud-based software products for recurring value.",
    features: [
      "Multi-Tenant SaaS Platforms",
      "Subscription & User Management",
      "Scalable Product Architecture"
    ],
    color: "purple"
  },
  { 
    icon: <Database className="w-12 h-12 text-green-600" />, 
    title: "Data Analytics", 
    description: "Transform data into actionable insights with advanced analytics.",
    features: [
      "Predictive Modeling",
      "Business Intelligence",
      "Data Visualization"
    ],
    color: "purple"
  },
  { 
    icon: <Cloud  className="w-12 h-12 text-blue-600" />, 
    title: "Cloud Solutions    ", 
    description: "Enable agility and scalability through modern cloud infrastructure.",
    features: [
      "Cloud Migration      ",
      "DevOps & Automation      ",
      "Managed Cloud Services"
    ],
    color: "purple"
  },
  { 
    icon: <ShieldCheck  className="w-12 h-12 text-green-600" />, 
    title: "Quality Assurance & Testing", 
    description: "Ensure the functionality, security, and performance of your software.    ",
    features: [
      "Manual & Automated Testing      ",
      "Performance Testing      ",
      "Security & Compliance      "
    ],
    color: "purple"
  },
  { 
    icon: <Cuboid   className="w-12 h-12 text-purple-600" />, 
    title: "UI/UX Design Services    ", 
    description: "Deliver intuitive and engaging digital experiences.    ",
    features: [
      "Wireframing & Prototyping      ",
      "User-Centered Design      ",
      "Responsive Interface Design      "
    ],
    color: "purple"
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="bg-white py-30 px-6 mx-auto flex flex-col items-center justify-center">

      <div>
      <h2 className="text-4xl font-extrabold text-center text-black mb-16">
        Our <span className="text-gray-500">Services</span>
      </h2>
      </div>

      {/* View container for the service cards */}
      <div className="view flex justify-center">
        {services.map((service, index) => (
          <div
  key={index}
  onMouseEnter={() => setHoveredService(index)}
  onMouseLeave={() => setHoveredService(null)}
  className={`block bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform 
    ${hoveredService === index
      ? "border-2 border-sky-400 scale-105 shadow-lg shadow-blue-300/50"
      : "border-2 border-transparent shadow-md shadow-blue-200/40"}`}
  style={{ willChange: "transform, box-shadow, border" }}
>

            <div
              className={`flex justify-center mb-4 transform transition-transform duration-500 ${hoveredService === index ? "rotate-12 scale-110" : ""}`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-sky-900">
              {service.title}
            </h3>
            <p className="text-gray-700 text-center mb-4">{service.description}</p>
            <div
              className={`space-y-2 text-sm text-gray-800 transition-all duration-500 ${hoveredService === index ? "opacity-100" : "opacity-80"}`}
            >
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


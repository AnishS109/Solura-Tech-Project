import { Globe, Users, Trophy } from "lucide-react";
import "./Services.css"

const achievements = [
  { 
    icon: <Globe className="w-16 h-16 text-blue-500" />, 
    number: "50+", 
    title: "Global Clients" 
  },
  { 
    icon: <Users className="w-16 h-16 text-green-500" />, 
    number: "500+", 
    title: "Team Members" 
  },
  { 
    icon: <Trophy className="w-16 h-16 text-yellow-500" />, 
    number: "25", 
    title: "Industry Awards" 
  }
];

const Achievements = () => {
  return (
    <section className="bg-gray-100 py-40">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-black mb-16">
   Our<span className="text-gray-500"> Global Impact</span>
        </h2>
       
        
        <div className="flex justify-center flex-wrap">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="block bg-white p-8 rounded-xl shadow-md text-center 
              hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-3 group"
            >
              <div 
                className="flex justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
              >
                {achievement.icon}
              </div>
              <h3 
                className="text-4xl font-bold text-gray-800 mb-2 transition-colors duration-500 group-hover:text-blue-600"
              >
                {achievement.number}
              </h3>
              <p className="text-gray-600">{achievement.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Solura Technologies proudly serves clients across North America, Europe, Asia, and the Middle East. Our global network of consultants and development teams enables us to provide around-the-clock services, rapid scaling, and local market understanding.
From helping startups build their MVPs to supporting Fortune 500 enterprises with enterprise-grade solutions, our impact spans industries including fintech, healthcare, retail, and more. Through our global footprint and client-centric approach, we continue to empower businesses everywhere to achieve their digital potential.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="bg-black text-white p-4 shadow-[0px_4px_10px_white] mb-[0.5px]">

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Solura Technologies</div>

      </div>
    </nav>
  );
};

export default Navbar;

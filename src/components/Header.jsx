import { useNavigate } from "react-router-dom";
import LOGO_URL from "../assets/QCG_Banner_auto_x2-removebg-preview.png"
import { useEffect } from "react";

const Header = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    document.title = "Home | QCG";
  }, [])

  return (
    <div className="h-14 sm:h-16 md:h-20 lg:h-24 bg-black fixed w-full z-50 px-3 sm:px-4 md:px-6">
      <img src={LOGO_URL} alt="QCG Logo" className="cursor-pointer h-full py-1 max-w-[70%] sm:max-w-none object-contain" onClick={()=>{navigate("/")}}/>
    </div>
  );
};

export default Header;

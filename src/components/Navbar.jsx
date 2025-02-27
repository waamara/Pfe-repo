import Iocne1 from "../assets/Group 170.png";
import Iocne2 from "../assets/profile 1.png";
import Iocne3 from "../assets/Rectangle 89.png"; 
import Iocne4 from "../assets/Vector1.png";
import Iocne5 from "../assets/Vector2.png";


const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center  w-full h-[80px] px-6">
      <div className="relative shadow-[0_4px_10px_rgba(0,0,0,0.08),0_-4px_10px_rgba(0,0,0,0.08)] border-none rounded-lg">
        <img
          src={Iocne1}
          alt="Search-Icon"
          className="absolute  left-4 top-1/2 transform -translate-y-1/2 w-[16px] h-[16px] opacity-60"
        />
        <input
          type="text"
          placeholder="Rechercher"
          className="w-[600px] border-none h-[50px] pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:mygray"
        />
      </div>
      <div className="flex flex-row items-center ">
        <img src={Iocne3} alt="message-icone" className="w-[14px] h-[15px] mr-3" />
        <img src={Iocne5} alt="notif-icone" className="w-[15px] h-[16px] mr-3" />
        <img src={Iocne2} alt="profile-icone" className="w-[35px] h-[35px] mr-3" />
        <img src={Iocne4} alt="icone" className="w-[14px] h-[14px] mr-3" />
      </div>
    </div>
  );
};

export default Navbar;

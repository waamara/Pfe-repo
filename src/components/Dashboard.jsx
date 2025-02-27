import { Link } from "react-router-dom";
import Homeimg from "../assets/Vector (7).png";
import Fimg from "../assets/Vector (8).png";
import Simg from "../assets/Vector (9).png";
import Bimg from "../assets/Vector (10).png";
import Gimg from "../assets/Vector (11).png";
import S2img from "../assets/Vector (12).png";
import Mimg from "../assets/Vector (13).png";
import F2img from "../assets/Vector (15).png";
import Himg from "../assets/Vector (16).png";
import S3img from "../assets/Vector (17).png";

const Dashboard = () => {
    const menuItems = [
        { name: "Dashboard", icon: Homeimg, path: "/" },
        { name: "Fournisseurs", icon: Fimg, path: "/fournisseurs" },
        { name: "Structures", icon: Simg, path: "/structures" },
        { name: "Banques", icon: Bimg, path: "/banques" },
        { name: "Garanties", icon: Gimg, path: "/garanties" },
        { name: "Soumissions", icon: S2img, path: "/soumissions" },
        { name: "Monnaie", icon: Mimg, path: "/monnaie" },
        { name: "Favourite", icon: F2img, path: "/favourite" },
        { name: "Historique", icon: Himg, path: "/historique" },
        { name: "Signout", icon: S3img, path: "/signout" },
    ];

    return (
        <div className="w-[250px] p-6">
            {menuItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    className="m-8 p-3 flex items-center rounded-lg w-[150px] h-[40px] bg-white hover:bg-myblue text-mygray hover:text-white"
                >
                    <img src={item.icon} alt={item.name} className="w-[12px] h-[12px] mr-3 ml-3" />
                    <p>{item.name}</p>
                </Link>
            ))}
        </div>
    );
};

export default Dashboard;

import Homeimg from "../assets/Vector (7).png"
import Fimg from "../assets/Vector (8).png"
import Simg from "../assets/Vector (9).png"
import Bimg from "../assets/Vector (10).png"
import Gimg from "../assets/Vector (11).png"
import S2img from "../assets/Vector (12).png"
import Mimg from "../assets/Vector (13).png"
import B2img from "../assets/Vector (14).png"
import F2img from "../assets/Vector (15).png"
import Himg from "../assets/Vector (16).png"
import S3img from "../assets/Vector (17).png"


const Dashboard = () => {
    return (
        <div className="w-[250px] p-6 ">
            <button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-myblue flex flex-row text-white">
                <img src={Homeimg} alt="Home.png" className="w-[12px] h-[12px] mr-3 ml-3  " />
                <p>Dashboard</p>
            </button>
            <button className=" m-8 p-3 items-center rounded-lg w-[150px] h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={Fimg} alt="Fournisseurs.png" className="w-[12px] h-[12px]  mr-3 ml-3  " />
                <p>Fournisseurs</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px] h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={Simg} alt="Home.png" className="w-[12px] h-[12px]  mr-3  ml-3 " />
                <p>Structures</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={Bimg} alt="Home.png" className="w-[12px] h-[12px] mr-3 ml-3   " />
                <p>Banques</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={Gimg} alt="Home.png" className="w-[14px] h-[14px] mr-3  ml-3  " />
                <p>Garanties</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={S2img} alt="Home.png" className="w-[12px] h-[12px]  mr-3 ml-3  " />
                <p>Soummision</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={Mimg} alt="Home.png" className="w-[12px] h-[12px]  mr-3 ml-3  " />
                <p>Monnaie</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={B2img} alt="Home.png" className="w-[12px] h-[12px] mr-3  ml-3  " />
                <p>Bonne exe</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={F2img} alt="Home.png" className="w-[12px] h-[12px]  mr-3  ml-3 " />
                <p>Favourite</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={Himg} alt="Home.png" className="w-[12px] h-[12px]  mr-3 ml-3 " />
                <p>Historique</p>
            </button><button className=" m-8 p-3 items-center rounded-lg w-[150px]  h-[40px] bg-white  hover:bg-myblue flex flex-row text-mygray hover:text-white">
                <img src={S3img} alt="Home.png" className="w-[12px] h-[12px] mr-3 ml-3  " />
                <p>Signout</p>
            </button>
        </div>
    )
}

export default Dashboard
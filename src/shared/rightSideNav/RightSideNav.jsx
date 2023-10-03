import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div className="px-4">
        {/* 1 login with google and git */}
      <div className="">
        <h2 className="text-2xl mb-5">Login With</h2>
        <button className="btn w-full btn-outline hover:btn-info">
          <FaGoogle></FaGoogle>
          LogIn with Google
        </button>
        <button className="btn w-full btn-outline hover:btn-info mt-3">
          <FaGithub></FaGithub>
          LogIn with Github
        </button>
      </div>

    {/* 2 find on us */}

    <div className="mt-10">
        <h2 className="text-2xl mb-4">Find On Us</h2>
       <div className="">
       <Link className="flex items-center text-lg gap-4 p-4 border rounded-t-md">
        <FaFacebook></FaFacebook>
        Facebook
        
        </Link>
       <Link className="flex items-center text-lg gap-4 p-4 border-x">
        <FaTwitter></FaTwitter>
        Twitter
        
        </Link>
       <Link className="flex items-center text-lg gap-4 p-4 border rounded-b-md">
        <FaInstagram></FaInstagram>
        Instagram
        </Link>
       </div>
    </div>


  {/* Q zone */}

  <div className="mt-10">
        <h2 className="text-2xl mb-4">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
       
    </div>

    </div>
  );
};

export default RightSideNav;

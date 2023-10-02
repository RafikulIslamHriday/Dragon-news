 import logo from "../../assets/logo.png"
 import moment from "moment/moment";

const Header = () => {
    return (
        <div>
             <div className="mt-10">
                <img src={logo} alt="" className="mx-auto" />
             </div>
             <p className="text-xl text-center mt-5 mb-2">Journalism Without Fear or Favour</p>
             <p className="text-center">{moment().format("dddd, MMMM DD YYYY ")}</p>
        </div>
    );
};

export default Header;
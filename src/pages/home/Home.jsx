import Header from "../../shared/header/Header";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import Navber from "../../shared/navber/Navber";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";
import BrackingNews from "./BrackingNews";

 

const Home = () => {
    return (
        <div >
            <Header></Header>
            <BrackingNews></BrackingNews>
            <Navber></Navber>

            <p className="font-popins text-5xl">this is home page</p>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border">
                    <h2 className="text-2xl">
                        News Comming soon  
                    </h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
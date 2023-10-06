import { useLoaderData } from "react-router-dom";
import Header from "../../shared/header/Header";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import Navber from "../../shared/navber/Navber";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";
import BrackingNews from "./BrackingNews";
import NewsCard from "./NewsCard";

 

const Home = () => {
    const news = useLoaderData();
     
    return (
        <div >
            <Header></Header>
            <BrackingNews></BrackingNews>
            <Navber></Navber>

            <p className="font-popins text-5xl">this is home page</p>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
              {/* news container */}
              <div className="lg:col-span-2 border">
                     {
                        news.map(item => <NewsCard key={item._id} news = {item}></NewsCard>)
                     }
                </div>
                {/* right side navber */}
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
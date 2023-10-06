import Header from "../../shared/header/Header";
import Navber from "../../shared/navber/Navber";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";
import NewsDetails from "./NewsDetails";

 

const News = () => {
    return (
        <div>
             <Header></Header>
             <Navber></Navber>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <NewsDetails></NewsDetails>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrackingNews = () => {
  return (
    <div className="flex bg-slate-200 py-2 rounded-md mt-4 px-5 items-center">
      <button className="btn btn-secondary">Bracking News</button>
      <Marquee>
         <Link to="/">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, expedita.</Link>
      </Marquee>
    </div>
  );
};

export default BrackingNews;

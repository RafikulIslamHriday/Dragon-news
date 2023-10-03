import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categoreys, setCategoreys] = useState([]);
  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoreys(data));
  }, []);

  return (
    <div>
      <div className="">
        <h2 className="text-2xl">All Categoery</h2>
        <div className="space-y-3 mx-3 mt-4">
          {categoreys.map((categoery) => (
            <Link
              key={categoery.id}
              to={`/categoery/${categoery.id}`}
              className="block text-left px-6 py-3 hover:bg-slate-200 rounded-md text-xl font-semibold"
            >
              {categoery.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;

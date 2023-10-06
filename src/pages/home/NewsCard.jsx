import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { image_url, title, details,_id } = news;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl mt-3">
        <figure>
          <img src={image_url} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="">
            {details.length > 150 ? (
              <p>
                {details.slice(0, 150)}.....{" "}
                <Link to={`/news/${_id}`} className="text-sky-500">Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

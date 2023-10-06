import { useParams } from "react-router-dom";

 

 

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
           
            <h3>news details</h3>
            <p>{id}</p>
        </div>
    );
};

export default NewsDetails;
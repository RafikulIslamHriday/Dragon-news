import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

 
const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const loaction = useLocation()
    
    if(user){
      return  children
    }

    return <Navigate to='/login' replace state={{from:loaction}}></Navigate>
};

export default PrivateRoute;
import { createBrowserRouter } from "react-router-dom";
 
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
 import News from "../pages/newsDetails/News";
import PrivateRoute from "./PrivateRoute";
 

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch("/news.json")
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><News></News></PrivateRoute>
            }
            ,
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            }
        ]
    }
])

export default router
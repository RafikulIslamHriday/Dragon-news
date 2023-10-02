import { createBrowserRouter } from "react-router-dom";
 
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
 

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default router
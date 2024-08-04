import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/home"
import Explore from "../pages/explore"
import MainLayout from '../layouts/main';
import Notification from '../pages/notiffications';
const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/explore',
                element:<Explore/>
            },
            {
                path:'/notification',
                element:<Notification/>
            }
        ]
    }
    
])

export default routes;
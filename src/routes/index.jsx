import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/home"
import Explore from "../pages/explore"
import MainLayout from '../layouts/main';
import Notification from '../pages/notiffications';
import NotFund from'../pages/notfound'
import Profile from '../pages/profile';
import Messages from '../pages/messages';
import Bookmarks from '../pages/bookmarks';
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
            },
            {
                path:':slug',
                element:<Profile/>
            },
            {
                path:'*',
                element:<NotFund/>
            },
            {
                path:'/messages',
                element:<Messages/>
            },
            {
                path:'/bookmarks',
                element:<Bookmarks/>
            }
        ]
    }
    
])

export default routes;
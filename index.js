import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, MenuCommand } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RouterError from './src/components/errorpage/RouterError';
import Help from './src/pages/help/help';
import Home from './src/pages/home/Home';
import Cart from './src/pages/cart/Cart';
import Offers from './src/pages/offers/Offers';
import App from './App';
import Parent from './src/components/class-base/Parent';
import Menu from './src/pages/menu/Menu';
import MenuCard from './src/pages/menu/menu-card/MenuCard';


const About = lazy(()=>import("./src/pages/about/About"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <RouterError/>,
    },
    {
        path: '/about',
        element: <Suspense fallback={<h2>Loading</h2>}><About/></Suspense>,
        errorElement: <RouterError/>
    },
    {
        path: '/offers',
        element: <Offers/>,
        errorElement: <RouterError/>
    },
    {
        path: '/help',
        element: <Help/>,
        errorElement: <RouterError/>
    },
    {
        path: '/cart',
        element: <Cart/>,
        errorElement: <RouterError/>
    },
    {
        path: '/menu/:id',
        element: <Menu/>,
        errorElement: <RouterError/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ChakraProvider>
       <RouterProvider router={router}/>
   </ChakraProvider> 
)
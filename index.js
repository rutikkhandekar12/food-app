import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import RouterError from './src/components/errorpage/RouterError';
import About from './src/pages/about/About';
import Help from './src/pages/help/help';
import Home from './src/pages/home/Home';
import Cart from './src/pages/cart/Cart';
import Offers from './src/pages/offers/Offers';
import App from './App';
import Parent from './src/components/class-base/Parent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Parent/>,
        errorElement: <RouterError/>,
    },
    {
        path: '/about',
        element: <About/>,
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
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ChakraProvider>
       <RouterProvider router={router}/>
   </ChakraProvider> 
)
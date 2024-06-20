import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./src/pages/help/Help";
import Home from "./src/pages/home/Home";
import Cart from "./src/pages/cart/Cart";
import Menu from "./src/pages/menu/Menu";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import { store } from "./store";
import VariableProvider from "./context/VariableProvider";
import Privateroute from "./src/components/privateroute/Privateroute";

const About = lazy(() => import("./src/pages/about/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<h2>Loading</h2>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/cart",
    element: <Privateroute><Cart /></Privateroute>,
  },
  {
    path: "/menu/:id",
    element: <Menu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <VariableProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </VariableProvider>
    </PersistGate>
  </Provider>
);

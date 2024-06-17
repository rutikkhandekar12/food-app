import { Children, useState } from "react";
import  locationContext from "./LocationContext";
import Home from "../pages/home/Home";

const LocationProvider = ({children}) => {
  const [location, setLocation] = useState({
    lat: 12.89960,
    long: 80.22090,
  });

  return (
    <locationContext.Provider value={{ location, setLocation }}>
      {children}
    </locationContext.Provider>
  );
};

export default LocationProvider;
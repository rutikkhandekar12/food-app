import { createContext } from "react";

const MenuContext = createContext({
  user: {
    name: "rutik khandekar",
    email: "rutik123@gmail.com",
  },
});
console.log("contextme kya hai: ", MenuContext);

MenuContext.displayName = "MenuContext"

export default MenuContext;

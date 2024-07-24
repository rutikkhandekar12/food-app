import { BrowserRouter } from "react-router-dom"
import Menubody from "../Menubody"


it("testing menubody component",()=>{

    const {getByText} = render(
        <BrowserRouter>
           <Menubody/>
        </BrowserRouter>
    )
})
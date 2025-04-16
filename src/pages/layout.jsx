

import TopNav from "../component/topnav";
import TopBanner from "../component/topbanner";
import { Outlet } from "react-router";
import Footer from "../component/footer";

const Layout=()=>{
    return(
        <>
           <TopNav/>
           <TopBanner/>
           <Outlet/>
          <Footer/>

        </>
    )
}

export default Layout;
import Layout from "./pages/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Insert from "./pages/insert";
import Display from "./pages/display";
import Search from "./pages/search";
import Update from "./pages/update";
import Contact from "./pages/contact";
import MyEdit from "./pages/myedit";

const App=()=>{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>} />
          <Route path="insert" element={<Insert/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="contact" element={<Contact/>} />
          <Route path="myedit/:id" element={<MyEdit/>} />
          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;
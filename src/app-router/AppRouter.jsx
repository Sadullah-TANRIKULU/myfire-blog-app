import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";

const AppRouter = () => {
    return ( 
        <div className="appRouter">
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="details" element={<Details/>} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="updateblog" element={<UpdateBlog />} />
                <Route path="profile" element={<Profile />} />
                <Route path="newblog" element={<NewBlog />} />
                <Route path="about" element={<About />} />
            </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default AppRouter;
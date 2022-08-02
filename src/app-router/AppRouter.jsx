import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div className="appRouter relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="updateblog" element={<UpdateBlog />} />
        <Route path="profile" element={<Profile />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

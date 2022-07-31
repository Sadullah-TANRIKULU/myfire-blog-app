import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
    return ( 
        <div className="appRouter">
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default AppRouter;
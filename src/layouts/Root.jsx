import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div className="ui-container">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;

import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddChocolate from "../pages/AddChocolate";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/add-chocolate",
                element: <AddChocolate/>
            }
        ]
    }
])

export default Routes
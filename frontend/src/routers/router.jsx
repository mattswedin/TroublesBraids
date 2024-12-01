import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home"
import Team from "../pages/team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/team",
            element: <Team />
        },
        {
            path: "/services",
            element: <div>Services Page</div>
        },
        {
            path: '/about',
            element: <div>About Page</div>
        },
        {
            path: '/policies',
            element: <div>Policies Page</div>
        },
        {
            path: '/shop',
            element: <div>Shop</div>
        }
    ]
  },
]);

export default router;
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home"
import Team from "../pages/team/Team";
import Services from "../pages/services/Services";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";

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
            element: <Services />
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
        },
        {
            path: '/categories/:categoryName', element: <CategoryPage />
        },
        {
            path: '/search', element: <Search/>
        }
    ]
  },
]);

export default router;
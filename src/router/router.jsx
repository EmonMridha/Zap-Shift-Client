import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcle from "../Pages/SendParcel/SendParcle";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        // Outlet routes
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'coverage',
                loader: () => fetch('./serviceCenter.json'),
                Component: Coverage
            },
            {
                path:'/sendParcel',
                element: <PrivateRoute><SendParcle></SendParcle></PrivateRoute>
            }
        ]
    },
    {
        path:'/',
        Component: AuthLayout,
        //Outlet routes
        children: [
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/register', 
                Component: Register
            }
        ]
    }
]);
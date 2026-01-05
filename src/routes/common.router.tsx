import { Home, Register, Products, NotFound, Login } from "../pages/common"
// import { Home } from "../pages/common"
// import { Register } from "../pages/common"
// import { Products } from "../pages/common"
// import { NotFound } from "../pages/common"
// import { Login } from "../pages/common"

export default [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/404",
        element: <NotFound />,
    },
]
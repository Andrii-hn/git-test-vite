import { Outlet } from "react-router-dom"

import { Navigation } from "../components/"

const PageTemplate = () => {
    return <>
        <Navigation />
        <Outlet />
    </>
}

export default PageTemplate
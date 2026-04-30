import { Outlet, Link } from "react-router-dom"

const Header = () => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add_creator">Add Creator</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Header;
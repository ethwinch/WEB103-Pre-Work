import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <h1>404: PAGE NOT FOUND</h1>
            <Link to="/">Return Home</Link>
        </>
    )
}

export default NotFound;
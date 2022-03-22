import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="d-flex justify-content-around">
            <Link to="/"> Home</Link>
            <Link to="/films">View Films</Link>
            <Link to="/people">View People</Link>

        </div>
    )
}

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid  d-flex justify-content-end ">
                    <Link to="/" className="btn btn-outline-info m-2"> Home</Link>
                    <Link to="/films" className="btn btn-outline-info m-2">View Films</Link>
                    <Link to="/people" className="btn btn-outline-info m-2">View People</Link>

                
            </div>
        </nav>



    )
}

export default Navbar;
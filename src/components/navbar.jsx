/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {

    return ( 

        <nav className="navbar navbar-expand-lg mb-3">

            <div className="container-fluid">

                <a className="navbar-brand" href="#"><img src={ require("../images/logo.svg") } alt="Logo" /></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="navbar-item mx-3">
                            <a href="#" className="nav-link">Home</a>
                        </li>

                        <li className="navbar-item mx-3">
                            <a href="#" className="nav-link">New</a>
                        </li>

                        <li className="navbar-item mx-3">
                            <a href="#" className="nav-link">Popular</a>
                        </li>

                        <li className="navbar-item mx-3">
                            <a href="#" className="nav-link">Trending</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="nav-link">Categories</a>
                        </li>

                    </ul>

                </div>
            </div>

        </nav>

     );

}
 
export default Navbar;
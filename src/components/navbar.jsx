/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {

    return ( 

        <nav className="navbar navbar-expand-lg mb-3">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">Navbar w/ Text</a>

                <div>

                    <ul className="navbar-nav">

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
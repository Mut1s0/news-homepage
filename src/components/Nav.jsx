import { logo, iconMenu, iconMenuClose } from "../images";
import { navigation } from "../constants";
import { useState } from "react";

function Nav() {

    const [ toggle, setToggle ] = useState(false);

    return(

        <nav className="flex items-center justify-between">

            <img src={logo} alt="logo" />

            <div className="hidden sm:flex items-center justify-end gap-[50px]">

                {navigation.map((nav) => (

                    <ul key={nav.id}>

                        <li><a href="#" className="font-regular hover:text-softRed">{nav.navLink}</a></li>

                    </ul>

                ))}

            </div>

            <div className="sm:hidden block">

                <img 
                    src={iconMenu} 
                    alt="Menu" 
                    className="cursor-pointer"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'block' : 'hidden'} absolute top-0 right-0 min-w-[300px] h-screen bg-offWhite p-9`}>

                    <div className="flex items-center justify-end pb-[50px]">

                        <img 
                            src={iconMenuClose} 
                            alt="menu close"
                            className="cursor-pointer"
                            onClick={() => setToggle((prev) => !prev)}
                        />

                    </div>

                    {navigation.map((nav) => (
                        <ul key={nav.id} className="pb-8">
                            <li><a href="#" className="font-regular hover:text-softRed">{nav.navLink}</a></li>
                        </ul>
                    ))}

                </div>

            </div>

        </nav>

    )
}

export default Nav;
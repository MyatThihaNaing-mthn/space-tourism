import { useEffect, useRef, useState } from "react";
import getImageUrl from "../utils";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    const appLogo = getImageUrl('logo.svg');
    const menuIcon = getImageUrl("fa-bar.svg");
    const closeIcon = getImageUrl("icon-close.svg");
    const [menuOpen, setMenuOpen] = useState(false);
    const drawerRef = useRef(null);
    const menuIconRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target) && menuIconRef.current !== event.target) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [drawerRef]);

    return (
        <header className="w-full  px-8 z-30 bg-transparent fixed top-0 left-0 text-white pt-6 pb-4">
            <nav className="flex items-center justify-between">
                <div>
                    <Link to={"/"}>
                        <img src={appLogo}
                            alt="logo"
                            className="w-10 h-10 fill-white hover:cursor-pointer"
                        />
                    </Link>
                </div>
                <ul className="hidden sm:flex sm:text-sm lg:text-base px-4 py-6 text-xl font-bold w-3/5 justify-between backdrop-blur bg-sky-700/10">
                    <li className="shrink">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="shrink">
                        <Link to={`/destination`}>
                            Destination
                        </Link>
                    </li>
                    <li className="shrink">
                        <Link to={`/crews`}>
                            Crews
                        </Link>
                    </li>
                    <li className="shrink">
                        <Link to={`/technology`}>
                            Technology
                        </Link>
                    </li>
                </ul>
                <div className=" sm:hidden">
                    <img src={menuIcon} alt="menu icon"
                        className="w-8 h-8 fill-white"
                        onClick={() => setMenuOpen(true)}
                        ref={menuIconRef} />
                </div>
                <div className={`absolute top-0 right-0 px-10 pt-8 text-lg flex flex-col transform ${menuOpen ? "-translate-x-0" : "translate-x-full"} backdrop-blur bg-sky-950/50 h-screen w-2/3 z-40 transition duration-500 ease-in-out`}
                    ref={drawerRef}>
                    <img src={closeIcon}
                        className="w-8 h-5 ml-auto mt-4 fill-white"
                        alt="close icon"
                        onClick={() => setMenuOpen(false)} />

                    <ul className="flex flex-col gap-4 mt-4 hover:cursor-pointer">
                        <li className="mr-6" onClick={() => setMenuOpen(false)}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="mr-6" onClick={() => setMenuOpen(false)}>
                            <Link to={`/destination`}>
                                Destination
                            </Link>
                        </li>
                        <li className="mr-6" onClick={() => setMenuOpen(false)}>
                            <Link to={`/crews`}>
                                Crews
                            </Link>
                        </li>
                        <li className="mr-6" onClick={() => setMenuOpen(false)}>
                            <Link to={`/technology`}>
                                Technology
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Navbar;
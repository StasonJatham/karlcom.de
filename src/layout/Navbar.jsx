import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 text-indigo-800 font-semibold"
            >
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : "hover:font-semibold"
                    }
                >
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                color="blue-gray"
                className="p-1 text-indigo-800 font-semibold"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Services
                </a>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 text-indigo-800 font-semibold"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Über Uns
                </a>
            </Typography>
            <Typography
                as="li"
                variant="paragraph"
                className="p-1 text-indigo-800 font-semibold"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Blog
                </a>
            </Typography>
        </ul>
    );
}

export default function NavbarSimple() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="sticky top-0 z-10 bg-white rounded-b-xl">
            <Navbar color="" className="rounded-xl bg-yellow-600 mx-auto max-w-screen-xl h-max px-4 py-2 lg:px-8 lg:py-4" >
                <div className=" flex items-center justify-between text-indigo-800">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="flex mr-4 cursor-pointer py-1.5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <span className="ml-1">KARLCOM</span>
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar >
        </div >

    );
}
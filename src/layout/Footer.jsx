import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="mt-2">
            <div className="mx-auto max-w-screen-xl rounded-t-xl sm:rounded-xl bg-yellow-600 px-8 pt-8 dark:bg-gray-700">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12text-center md:justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6 text-indigo-800 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>


                    <ul className="text-indigo-800  flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Kontakt
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Privatsphäre
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                <NavLink
                                    to="/impressum"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline" : "hover:font-semibold"
                                    }
                                >
                                    Impressum
                                </NavLink>

                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="mt-6 mb-8 border-indigo-800" />
                <Typography className="text-center font-normal text-indigo-800 ">
                    &copy; 2023 Karl Machleidt Consulting
                </Typography>

                <div className="mt-4 mb-0 sm:mb-2 md:mb-4 pb-2">
                    <Typography variant="small" className="text-center  text-indigo-800 ">
                        Mit ❤️ aus Berlin.
                    </Typography>
                </div>
            </div>
        </footer>
    );
}
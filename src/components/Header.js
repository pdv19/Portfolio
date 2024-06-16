import React, { useContext } from "react";
import Socials from "./Socials";
import Logo from "../img/header/Logo.png";
import Logo2 from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="fixed w-full lg: z-30 flex items-center">
      <nav className="w-full bg-[#F1F2F2] border-b border-gray-300 px-4 lg:px-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              to={"/"}
            >
              <img src={Logo} alt="logo" className="mr-3 h-16 sm:h-20" />
            </Link>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              THE MYTH VISUALS
            </span>
          </div>

          <div className="flex items-center lg:order-2">
            {/* Socials */}
            <Socials />
            {/* mobile nav */}
            <MobileNav />
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-[#B18845] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 pr-4 pl-3 text-[#B18845] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="block py-2 pr-4 pl-3 text-[#B18845] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-[#B18845] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

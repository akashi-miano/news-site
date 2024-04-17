import { useState } from "react";
import { logo, menuIcon, closeIcon} from "../assets";

const Nav = () => {
  const [nav, setNav] = useState(false)
  return (
    <nav className="py-14">
      <div className="container flex justify-between items-center">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="text-lg hidden md:flex items-center gap-4">
          <li>
            <a
              href=""
              className="text-gray-400 hover:text-zinc-700 duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-400 hover:text-zinc-700 duration-300"
            >
              New
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-400 hover:text-zinc-700 duration-300"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-400 hover:text-zinc-700 duration-300"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-400 hover:text-zinc-700 duration-300"
            >
              Categories
            </a>
          </li>
        </ul>
        <button className="mobile-toggle md:hidden" onClick={() => setNav(!nav)}>
            <img src={menuIcon} alt="mobile menu icon" />
        </button>
        <ul className={nav ? "fixed top-0 bottom-0 right-0 flex flex-col items-center justify-center gap-4 translate-x-0 duration-300 bg-white z-[999]  text-zinc-800 w-full sm:w-[35%]" : "fixed inset-0 flex flex-col items-center justify-center gap-4 translate-x-[100%] duration-300 "}>
        <button className="close-menu absolute top-10 right-12" onClick={() => {setNav(!nav)}}>

          <img src={closeIcon} alt="Mobile menu close icon" />

        </button>
          <li>
            <a
              href=""
              className="hover:text-cyan-500 duration-300 text-4xl"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-cyan-500 duration-300 text-4xl"
            >
              New
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-cyan-500 duration-300 text-4xl"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-cyan-500 duration-300 text-4xl"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-cyan-500 duration-300 text-4xl"
            >
              Categories
            </a>
          </li>
        

        </ul>
      </div>
    </nav>
  );
};

export default Nav;

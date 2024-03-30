import { logo } from "../assets";

const Nav = () => {
  return (
    <nav className="py-14">
      <div className="container flex justify-between items-center">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="text-lg flex items-center gap-4">
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
      </div>
    </nav>
  );
};

export default Nav;

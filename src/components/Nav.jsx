//react
import { useState } from "react";

//assets
import { headerLogo } from "../assets/images";
import { hamburger, closeMenu } from "../assets/icons";

//constants
import { navLinks } from "../constants";

const Nav = () => {
  //variables de estado
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            className="pointer-events-none"
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={toggle ? closeMenu : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } flex-col p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-green-90`}
          >
            <ul className="list-none flex-col justify-end items-center flex-1 mb-4">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`text-menu cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

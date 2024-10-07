// Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MobileMenu } from "./index";
import { IoIosSearch  } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  const links = [
    { label: "Kiosks", path: "/" },
    { label: "Dispensers", path: "/dispensers" },
    { label: "Ingredients", path: "/ingredients" },
    { label: "Recipe", path: "/recipes" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };
  return (
    <header className="fixed top-0 left-0 w-full flex bg-[#141414] items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292929] px-10 py-3">
      <div className="flex items-center gap-1 text-[#FFFFFF]">
        <h2 className="text-[#6EE7B7] text-lg font-bold">Epicure</h2>
        <h2 className="text-[#ffffff] text-lg font-bold">Robotics</h2>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8 ">
        <ul className="flex items-center gap-9">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#6EE7B7] "
                    : "text-white "
                } text-sm font-medium cursor-pointer`
              }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 bg-[#292929] text-white min-w-0 px-2">
            <IoIosSearch   size={25}/>
          </button>

          <button className="flex max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 bg-[#292929] text-white min-w-0 px-2">
          <IoMdNotificationsOutline size={25}/>
          </button>
        </div>

        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rGksoTRvjYRTj6vjOfKnJq7TQmCEvjejSw&s")',
          }}
        ></div>
      </div>

      {/* Hamburger Icon */}
      <div className="block md:hidden">
        <button onClick={toggleMobileMenu}>
          {showMobileMenu ? (
            <IoClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color="white" />
          )}
        </button>
        <MobileMenu
          className={`${
            showMobileMenu ? "block" : "hidden"
          } absolute right-4 top-[3.5rem] md:right-28 `}
          isOpen={showMobileMenu}
          links={links}
        />
      </div>
    </header>
  );
};

export default Header;

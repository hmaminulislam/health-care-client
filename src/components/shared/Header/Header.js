import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItem = (
      <>
        <li className="flex">
          <Link to='/' className="flex items-center dark:border-transparent">
            Home
          </Link>
        </li>
        <li className="flex">
          <Link to='/services' className="flex items-center dark:border-transparent">
            Services
          </Link>
        </li>
        <li className="flex">
          <Link className="flex items-center dark:border-transparent">
            My Reviews
          </Link>
        </li>
        <li className="flex">
          <Link className="flex items-center dark:border-transparent">
            Blog
          </Link>
        </li>
      </>
    );
    const mobileMenuItem = (
      <>
        <li><Link to='/'><span>Home</span></Link></li>
        <li><Link to='/services'><span>Services</span></Link></li>
        <li><Link><span>My Reviews</span></Link></li>
        <li><Link><span>Blog</span></Link></li>
      </>
    );
    return (
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link className="flex items-center p-2 text-2xl font-bold">
            Helth Care
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">{menuItem}</ul>
          <button className="flex justify-end p-4 md:hidden">
            {isOpen ? (
              <GrClose
                className="cursor-pointer text-3xl"
                onClick={() => setIsOpen(!isOpen)}
              ></GrClose>
            ) : (
              <AiOutlineMenu
                className="cursor-pointer text-3xl"
                onClick={() => setIsOpen(!isOpen)}
              ></AiOutlineMenu>
            )}
          </button>
          {
            <div
              className={`flex flex-col h-full p-3 w-60 bg-gray-900 text-gray-100 absolute ${
                isOpen ? "left-[-1px] top-0" : "left-[-250px]"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between"></div>
                <div className="flex-1">
                  <ul className="pt-2 pb-4 space-y-4 text-sm">
                    {mobileMenuItem}
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="w-12 h-12 rounded-lg dark:bg-gray-500"
                />
                <div>
                  <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                  <span className="flex items-center space-x-1">
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline dark:text-gray-400"
                    >
                      View profile
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          }
        </div>
      </header>
    );
};

export default Header;
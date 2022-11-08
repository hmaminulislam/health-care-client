import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, loader, logOut } = useContext(AuthContext);

    //loading
    if(loader) {
      return <div>Loading...</div>
    }

    //logOut button handle
    const logOutBtnHandle = () => {
      logOut()
      .then(() => {
        toast.success('Log out successfull')
      })
      .catch(error => console.log(error))
    }

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
          <Link to='/my-reviews' className="flex items-center dark:border-transparent">
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
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link to="/my-reviews">
            <span>My Reviews</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>Blog</span>
          </Link>
        </li>
      </>
    );
    return (
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link className="flex items-center p-2 text-2xl font-bold">
            Helth Care
          </Link>
          <ul className="items-stretch hidden space-x-7 md:flex">{menuItem}</ul>
          <div className="hidden md:block">
            {user?.uid ? (
              <>
                {user?.photoURL ? (
                  <img
                    className="w-12 h-12 rounded-full mb-2"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-12 h-12 rounded-full mb-2"
                    src={
                      "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
                    }
                    alt=""
                  />
                )}
                <button
                  onClick={logOutBtnHandle}
                  className="text-red-500 font-semibold"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button className="bg-emerald-500 py-3 px-8 rounded text-white font-semibold mt-2">
                  <Link to="/login">Login</Link>
                </button>
              </>
            )}
          </div>
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
              {user?.uid ? (
                <>
                  <div className="flex items-center p-2 mt-2 space-x-4 justify-self-end">
                    {user?.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-lg dark:bg-gray-500"
                      />
                    ) : (
                      <img
                        src={
                          "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095205-stock-illustration-businessman-profile-icon.jpg"
                        }
                        alt=""
                        className="w-12 h-12 rounded-lg dark:bg-gray-500"
                      />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold">
                        {user?.displayName}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={logOutBtnHandle}
                    className="bg-red-500 py-2 rounded w-20 mt-5"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="">
                    Login
                  </Link>
                </>
              )}
            </div>
          }
        </div>
      </header>
    );
};

export default Header;
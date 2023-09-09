import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  // handle scroll change header
  const headerChange = () => {
    if (window.scrollY > 10) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };
  window.addEventListener("scroll", headerChange);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  const links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 4,
      name: "Profile",
      url: "/profile",
    },
  ];

  return (
    <div
      className={`${
        headerFixed ? "fixed bg-white py-2 z-30  shadow-lg" : "z-30 bg-color"
      } min-w-full transition-all delay-75 ease-in-out py-2`}
    >
      <div className="container">
        <div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <h1 className="text-[24px]">Test Task</h1>
              </Link>
            </div>
            {!showMenu && (
              <button
                aria-label="open menu"
                onClick={() => setShowMenu(true)}
                className={`${
                  !headerFixed && "text-black"
                } outline-none rounded ease-in-out duration-300 focus:ring-gray-600 lg:hidden`}
              >
                <AiOutlineMenu className="text-[30px]" />
              </button>
            )}
            {/* links */}
            <div className="hidden lg:flex space-x-4 items-center">
              {links.map((link) => (
                <Link
                  to={link.url}
                  key={link?.id}
                  onClick={() => setShowMenu(false)}
                  className="cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`${
              showMenu ? "flex ease-in-out duration-300 " : "hidden"
            } absolute w-[100%] top-0 left-0 z-30 pt-[24px] bg-white h-screen `}
          >
            <div className="container mx-auto px-8">
              {/* close icon */}
              <AiOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-[30px] absolute right-0 top-0 mt-4 mr-4 cursor-pointer"
              />

              <div data-aos="fade-down" className="grid mt-[50px]">
                <div className=" grid gap-5 text-lg">
                  {links.map((navLink, index) => (
                    <div key={index}>
                      <Link
                        onClick={() => setShowMenu(false)}
                        to={`${navLink.url}`}
                      >
                        {navLink.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

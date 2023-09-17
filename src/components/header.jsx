import { navLeftLinks, navRightLinks } from "../Data/navLinks";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { Footer } from "./footer";
import { FooterBottom } from "./footerBottom";

export function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  return (
    <>
      <div className="w-screen bg-custom-red h-[80px] z-10 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="hidden md:flex">
            {navLeftLinks.map((item, index) => (
              <ul
                key={index}
                className="text-white mx-6 cursor-pointer flex space-x-6 hover:text-red-700"
              >
                <li>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="flex-grow mt-14 flex justify-center items-center">
            <img
              src="https://static.wixstatic.com/media/0fe16d_f275efc8721b482994afbf0c94e79448~mv2.png/v1/crop/x_708,y_792,w_3567,h_3433/fill/w_137,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Original.png"
              alt="logo"
              className="w-[137px] h-[131px] rounded-full object-cover cursor-pointer "
            />
          </div>
          <div className="hidden md:flex">
            {navRightLinks.map((item, index) => (
              <ul
                key={index}
                className="text-white mx-6 cursor-pointer flex space-x-6 hover:text-red-700"
              >
                <li>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              </ul>
            ))}
            <ul>
              <button className="text-white mx-4 cursor-pointer text-[16px] flex space-x-6">
                <BsPersonCircle className="mx-2 h-[25px] w-[25px] text-white" />
                Login
              </button>
            </ul>
          </div>
          <div className="cursor-pointer md:hidden mr-4" onClick={handleClick}>
            {!nav ? (
              <RiMenu2Fill className="w-5 h-20 text-white" />
            ) : (
              <RxCross2 className="w-5 h-20 text-white" />
            )}
          </div>
        </div>

        <ul
          className={
            !nav ? "hidden" : "cursor-pointer absolute bg-zinc-200 w-full px-8"
          }
        >
          {navLeftLinks.map((item, index) => (
            <li key={index} className="border-b-2 border-zinc-300 w-full">
              <Link onClick={handleClose} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
          {navRightLinks.map((item, index) => (
            <li key={index} className="border-b-2 border-zinc-300 w-full">
              <Link onClick={handleClose} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  );
}

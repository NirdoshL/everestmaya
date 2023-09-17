import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <div className="w-full text-white bg-gray-600 py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 px-4 gap-10">
        <div className="col-span-1">
          <h3 className="text-xl font-bodyFont font-semibold mb-6">
            EVREST MAYA RESTAURANT
          </h3>
          <div className="flex flex-col gap-6 text-gray-100">
            <ul className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-black  hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-black  hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaInstagram />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-red-700 font-bodyFont font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base  hover:text-red-600 cursor-pointer duration-300">
              Order Online
            </li>
            <li className="font-titleFont text-base  hover:text-red-600 cursor-pointer duration-300">
              Menu
            </li>
            <li className="font-titleFont text-base  hover:text-red-600 cursor-pointer duration-300">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl font-bodyFont font-semibold text-red-700 mb-6">
            Address
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base  hover:text-red-600 hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              11078 Cimarron St Firestone , CO 80504
            </li>
            <a href="tel:(303) 647-4098" target="_blank" rel="noreferrer">
              <li className="">(303) 647-4098</li>
            </a>
            <a
              href="mailto:info@everestmaya.com"
              target="_blank"
              rel="noreferrer"
            >
              <li className="">info@everestmaya.com</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

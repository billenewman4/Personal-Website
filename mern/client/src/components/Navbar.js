// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, } from "react-router-dom";
import { Outlet } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <Link className="ml-3 text-xl" to ="/">Bill Newman</Link >
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to= "/About" className="mr-5 hover:text-blue-500">
            About Me
          </Link>
          <a href="#projects" className="mr-5 hover:text-blue-500">
            CV
          </a>
          <a href="#projects" className="mr-5 hover:text-blue-500">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-500">
            Skills
          </a>
        </nav>
      </div>
    </header>
    <div id="detail">
    <Outlet />
    </div>
    </>
  );
}
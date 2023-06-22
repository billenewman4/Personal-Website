// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, } from "react-router-dom";
import { Outlet } from "react-router-dom";

const links = [
  { id: "1a", to: "/About", text: "About Me" },
  { id: "1p", to: "/Projects", text: "Projects" },
  { id: "1b", to: "/Blog", text: "Blog" }
];

function NavBarElements({links}){
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
    {links.map((link, index) => {
      return(
          <Link key={link.id} to={link.to} className="mr-5 hover:text-blue-500">
            {link.text}
          </Link>
      );
    })}
    </nav>
  );
}


export default function Navbar() {
  return (
    <>
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <Link className="ml-3 text-xl" to ="/">Bill Newman</Link >
        </a>
        <NavBarElements links={links} />
      </div>
    </header>
    <div id="detail">
    <Outlet />
    </div>
    </>
  );
}
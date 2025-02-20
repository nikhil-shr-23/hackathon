"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../images/logoz.png";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Destinations",
    href: "#",
    subMenu: [{ name: "India", href: "#" }],
  },
  {
    name: "Treatments",
    href: "#",
    subMenu: [
      { name: "Ayurveda", href: "#" },
      { name: "Cosmetic Surgery", href: "#" },
      { name: "Dental Care", href: "#" },
      { name: "Orthopedic Treatments", href: "#" },
      { name: "Cardiology", href: "#" },
      { name: "Fertility Treatments", href: "#" },
      { name: "Opthamology", href: "#" },
      { name: "Hair Transplants", href: "#" },
    ],
  },
  {
    name: "Packages",
    href: "#",
    subMenu: [
      { name: "Health Package", href: "#" },
      { name: "Ultimate Health Package", href: "#" },
      { name: "Luxury Health Packages", href: "#" },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "Compare", href: "/compare" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication Ashish
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (name) => {
    setDropdown(name);
    setIsDropdownOpen(true);
  };

  const handleClearCookie = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the mobile menu
  };

  useEffect(() => {
    // Simulate an authentication check
    // Replace this with your actual authentication check
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("/api/auth/check"); // Replace with your API endpoint
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();

    const timer = setTimeout(() => {
      if (!isDropdownOpen) {
        setDropdown(null);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isDropdownOpen]);

  return (
    <div className="relative w-full bg-white z-1">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <img
            src={logo}
            alt="Health Bridge International"
            className="w-40 h-8"
            style={{ borderRadius: "0px" }}
          />
          <NavLink to="/" className="font-bold text-lg">
            
          </NavLink>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subMenu && handleMouseEnter(item.name)}
                onMouseLeave={() => item.subMenu && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                  {item.subMenu && <ChevronDown className="ml-2 h-4 w-4" />}
                </a>
                {item.subMenu && dropdown === item.name && (
                  <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {!isAuthenticated ? (
            <>
              <button className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black">
                <NavLink to="/signup" onClick={handleMenuItemClick}>
                  Sign Up
                </NavLink>
              </button>
              <button className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black">
                <NavLink to="/signin" onClick={handleMenuItemClick}>
                  Sign In
                </NavLink>
              </button>
            </>
          ) : (
            <>
              <button
                className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black"
                onClick={handleClearCookie}
              >
                Logout
              </button>
              <NavLink to="/dashboard">
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Dashboard
                </button>
              </NavLink>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img
                      src={logo}
                      alt="Health Bridge International"
                      className="h-20"
                      style={{ borderRadius: "0px" }}
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          onClick={handleMenuItemClick}
                        >
                          {item.name}
                          {item.subMenu && (
                            <ChevronRight className="ml-3 h-4 w-4" />
                          )}
                        </a>
                        {item.subMenu && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.subMenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100"
                                onClick={handleMenuItemClick}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  {!isAuthenticated ? (
                    <>
                      <NavLink to="/signup">
                        <button
                          type="button"
                          className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                          onClick={handleMenuItemClick}
                        >
                          Sign Up
                        </button>
                      </NavLink>
                      <NavLink to="/signin">
                        <button
                          type="button"
                          className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-black"
                          onClick={handleMenuItemClick}
                        >
                          Sign In
                        </button>
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <button
                        className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        onClick={handleClearCookie}
                      >
                        Logout
                      </button>
                      <NavLink to="/dashboard">
                        <button
                          type="button"
                          className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                          onClick={handleMenuItemClick}
                        >
                          Dashboard
                        </button>
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

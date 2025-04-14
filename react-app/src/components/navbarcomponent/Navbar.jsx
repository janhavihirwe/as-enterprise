import React, { useRef, useState, useEffect } from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/logo.png"
import { MdMenu } from "react-icons/md";

function Navbar({ onAboutClick, onServicesClick, onClientsClick, onContactClick }) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="bg-[#111827] flex gap-x-8 justify-end text-white p-4 px-8">
        <div className="hidden lg:flex gap-x-2 text-base items-center"><FaPhone /> +1 (555) 123-4567</div>
        <div className="flex gap-x-2 text-base items-center"><IoMdMail /> contact@dsenterprise.com</div>
      </div>

      <div className="flex justify-between p-4 px-8 items-center relative">
        <img src={logo} className="cursor-pointer" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-x-8 text-base items-center">
          <div
            className={`cursor-pointer ${activeItem === "Home" ? "font-bold" : ""}`}
            onClick={() => {
              setActiveItem("Home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </div>
          <div
            className={`cursor-pointer ${activeItem === "About Us" ? "font-bold" : ""}`}
            onClick={() => {
              setActiveItem("About Us");
              onAboutClick();
            }}
          >
            About Us
          </div>
          <div
            className={`cursor-pointer ${activeItem === "Services" ? "font-bold" : ""}`}
            onClick={() => {
              setActiveItem("Services");
              onServicesClick();
            }}
          >
            Services
          </div>
          <div
            className={`cursor-pointer ${activeItem === "Our Clients" ? "font-bold" : ""}`}
            onClick={() => {
              setActiveItem("Our Clients");
              onClientsClick();
            }}
          >
            Our Clients
          </div>
          <button
            className={`bg-[#312E81] text-white p-2 rounded-[4px] ${activeItem === "Contact Us" ? "font-bold" : ""}`}
            onClick={() => {
              setActiveItem("Contact Us");
              onContactClick();
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <MdMenu className="lg:hidden text-[35px] cursor-pointer" onClick={() => setShowMenu(!showMenu)} />

        {/* Mobile Dropdown */}
        {showMenu && (
          <div ref={menuRef} className="absolute top-[120px] right-5 w-[200px] bg-white shadow-lg rounded-md z-50">
            <div className="flex flex-col p-4 gap-3 text-black">
              <div
                className={`cursor-pointer ${activeItem === "Home" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveItem("Home");
                  setShowMenu(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </div>
              <div
                className={`cursor-pointer ${activeItem === "About Us" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveItem("About Us");
                  setShowMenu(false);
                  onAboutClick();
                }}
              >
                About Us
              </div>
              <div
                className={`cursor-pointer ${activeItem === "Services" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveItem("Services");
                  setShowMenu(false);
                  onServicesClick();
                }}
              >
                Services
              </div>
              <div
                className={`cursor-pointer ${activeItem === "Our Clients" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveItem("Our Clients");
                  setShowMenu(false);
                  onClientsClick();
                }}
              >
                Our Clients
              </div>
              <button
                className={`bg-[#312E81] text-white p-2 rounded-[4px] mt-2 ${activeItem === "Contact Us" ? "font-bold" : ""}`}
                onClick={() => {
                  setActiveItem("Contact Us");
                  setShowMenu(false);
                  onContactClick();
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

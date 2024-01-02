import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import SignInPopUp from "./SignInPopUp";
import Order from "./Order";
import { Button } from "flowbite-react";
import logo from "../assests/SP_logo2.png";
import { TextField } from "@mui/material";
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import AllProductBtn from "./AllProductBtn";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import { XMarkIcon, Bars3Icon } from "@fortawesome/fontawesome-free";

const navigation = [
  { name: "Catelog", href: "/Catalog", current: false },
  { name: "Find A branch ", href: "#", current: false },
  { name: "Kepp Stock", href: "#", current: false },
  { name: "Help", href: "/Help", current: false },
  { name: "1-800-PRIME SUPPLIES ", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [inuser, setInuser] = useState({
    query:""
  })
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInuser({ ...inuser, [name]: value })
    console.log(inuser);
  }
  return (
    <>
      <Disclosure as="nav"  style={{backgroundColor:"black"}}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0">
              <div className="relative flex h-13 py-2 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center bg-black  rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                     <ClearOutlinedIcon/>
                    ) : (
                     <DnsOutlinedIcon/>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="">
                    <Link to="/" className="flex items-stretch">
                      <img
                        src={logo}
                        // height="64"
                        // width="132"
                        // aria-hidden="true"
                        style={{height:"150px", margin:"-38px", width:"200px", overflow:"hidden"}}
                        // viewBox="0 0 32 24"0
                        className="p-0  "
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-3 mt-6 sm:block   ">
                    <div className="flex space-x-1">
                      {navigation.map((item) => (
                        <Link
                          underline="hover"
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "underline text-white"
                              : "text-white  hover:text-underline",
                            " px-1 py-1 text-sm"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Link
                        className="text-white px-1 py-1 mr-2 text-xs font-bold"
                        to="/Register"
                      >
                        Register
                      </Link>
                      <Link
                        className="text-white px-3 py-1 text-xs bg-primary rounded-pill font-bold"
                        to="/SignUp"
                      >
                        Sign In
                      </Link>
                      {/* when user is login in show these  */}
                      {/* <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button> */}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden bg-gray-200 ">
              <div className="  pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "underline text-black "
                        : "hover:underline text-black ",
                      "block  px-3 py-2 font-medium font-bold bg-white border-b border-gray-300"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="nav" style={{backgroundColor:"#21292F"}}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0">
          <div className="relative flex h-13 py-2 items-center justify-between">
            <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center mr-8">
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex  text-sm text-white">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">All Product </span>
                      All Product
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-900 origin-top-right  bg-white  shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <Link path="/OrderPage">
                          <Order />
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
                <AllProductBtn />
              </div>
              {/* <TextField
                size="small"
                id="outlined-basic"
                className="w-100 bg-white rounded"
                placeholder="Enter Keyword"
                variant="outlined"
              /> */}
                <div className="relative w-100 ">
          <label className="sr-only" htmlFor="search"> Search </label>

          <input
            className="h-10 w-full rounded border-none bg-white pe-10 ps-4 text-sm shadow-sm"
            id="query" name="query" autoComplete="off" value={inuser.query} onChange={handleChange}
            type="search"
            placeholder="Search website..."
          />

          <a
            type="button"
            href={`/search/${inuser.query}`}
            style={{backgroundColor:"#2E5090"}}
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded  p-2 text-white transition hover:text-white"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3 sm:hidden md:block">
                <div>
                  {/* when user is login in show these  */}
                  <Menu.Button className="relative flex  text-sm text-white sm:hidden md:block ">
                    <span className="absolute -inset-1.5 sm:hidden md:block" />
                    <span className="sr-only sm:hidden md:block">Bulk Order </span>
                    Bulk Order
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-500 origin-top-right  bg-white  shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <Link path="/OrderPage">
                        <Order />
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu as="div" className="relative ml-3 sm:hidden md:block">
                <div>
                  {/* when user is login in show these  */}
                  <Menu.Button className="relative flex  text-sm text-white sm:hidden md:block">
                    <span className="absolute -inset-1.5 sm:hidden md:block" />
                    <span className="sr-only sm:hidden md:block">My Account </span>
                    {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    My Account
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-500 origin-top-right  bg-white  shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <Link path="/SignUp">
                        <SignInPopUp />
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        {/* <Disclosure.Panel className="sm:hidden bg-gray-200 ">
            <div className="  pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'underline text-black ' : 'hover:underline text-black ',
                    'block  px-3 py-2 font-medium font-bold bg-white border-b border-gray-300'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
      </Disclosure>
    </>
  );
}

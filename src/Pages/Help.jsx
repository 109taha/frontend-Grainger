import React from "react";
import Navbar from "../Components/Navbar";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <Navbar />
      <div className=" my-2">
        {/* <article className="relative overflow-hidden">
          <img
            alt="Office"
            src=" https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/W-FBBO249_HPF_687x267-1.jpg"
            className="absolute object-cover w-100 h-48 bg-cover bg-center bg-no-repeat "
          />

          <div className="relative  pt-6 sm:pt-6 lg:pt-14 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-0">
            <div className="py-4 px-3 sm:p-6">
              <a href="#">
                <h3 className="mt-0.5 text-medium text-white">
                  For the Plant Optimizer
                </h3>
              </a>

              <p className="mt-1 line-clamp-3 text-xs text-white/95">
                The plant shutdown checklist can help
              </p>
            </div>
          </div>
        </article> */}

        <section className="relative bg-[url(https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/onsite/W-CTGC139-Help-Page-Redesign_OSH_1920x208.jpg)] bg-cover bg-center bg-no-repeat h-48">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-6xl  sm:px-6  py-1 lg:flex lg:h-screen ">
            <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <Link to="/" className="theme_text pr-2 border-r text-xs mt-5">
                Home
              </Link><span className="text-xs text-white ml-2 ">Help</span>  
              <h1 className="text-xl font-extrabold sm:text-4xl text-white mt-3">
                Prime Supplies HELP DESK
              </h1>  
              <p className="mt-2 max-w-lg  text-white ">
                Check out popular help topics or chat, call or email with us.
                We're standing by and ready to help!
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="my-3 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-0">
        <div>
          <h1 className="text-lg my-2">Self Service Options</h1>
          <div className="row">
            <div className=" col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <Link
                to="/"
                className="bg-gray-200 flex w-96 only_1  p-3 text-xs theme_text hover:shadow-xl"
              >
                <img
                  src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/icon/W-CTGC139_Help-Page_TRACK_IC.svg"
                  className="mr-2"
                />
                <p className="flex justify-content-center  align-items-center theme_text">
                  {" "}
                  Track an Order/Review Order History
                </p>
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <Link
                to="/"
                className="bg-gray-200 flex w-96 only_1 p-3 text-xs theme_text hover:shadow-xl "
              >
                <img
                  src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/icon/W-CTGC139_Help-Page_TRACK_IC.svg"
                  className="mr-2"
                />
                <p className="flex justify-content-center  align-items-center theme_text">
                  {" "}
                  Track an Order/Review Order History
                </p>
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <Link
                to="/"
                className="bg-gray-200 flex w-96 only_1  p-3 text-xs theme_text hover:shadow-xl"
              >
                <img
                  src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/icon/W-CTGC139_Help-Page_TRACK_IC.svg"
                  className="mr-2"
                />
                <p className="flex justify-content-center  align-items-center theme_text">
                  {" "}
                  Track an Order/Review Order History
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg mt-5">Popular Topics</h1>
          <div className="row mt-3">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <div
                to="/"
                className="bg-gray-200 d-block w-96 only_1  p-3 text-xs"
              >
                <div className="text-lg border-gray-400 border-b mb-2 pb-2 ">
                  Placing Orders
                </div>
                <Link to="/" className="theme_text block my-1">
                  Quotes
                </Link>
                <Link to="/" className="theme_text block my-1">
                  Auto-Reorder
                </Link>
                <Link to="/" className="theme_text block my-1">
                  Lists
                </Link>
                <Link to="/" className="theme_text block my-1">
                  Branch Locations and Hours
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <div
                to="/"
                className="bg-gray-200 d-block w-96 only_1 p-3 text-xs"
              >
                <div className="text-lg border-gray-400 border-b mb-2 pb-2 ">
                  Order Information
                </div>
                <Link to="/" className="theme_text block my-1">
                  Order History & Tracking
                </Link>
                <Link to="/" className="theme_text block my-1">
                  Online Invoices
                </Link>
                <Link to="/" className="theme_text block my-1">
                  Returns, Warranty and Cancellations
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <div
                to="/"
                className="bg-gray-200 d-block w-96 only_1 p-3 text-xs"
              >
                <div className="text-lg border-gray-400 border-b mb-2 pb-2 ">
                  Account Settings
                </div>
                <Link to="/" className="theme_text block my-1">
                  Checkout Defaults
                </Link>
                <Link to="/" className="theme_text block my-1">
                  Order Management System (OMS)
                </Link>
                <Link to="/" className="theme_text block my-1">
                  User Management
                </Link>
                <Link to="/" className="theme_text block my-1">
                  User Management
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-gray-200 py-2">
        <div className="my-2 pt-2 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-0">
          <h1 className="text-lg my-2">How can I contact Prime Supplies ?</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <div className="bg-white flex w-96 p-3 only_1  ">
                <img
                  src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/icon/W-CTGC139_Help-Page_CHAT_IC.svg"
                  className="mr-2 h-12"
                />
                <div>
                  <p className="text-sm font-bold">Chat </p>
                  <div className="text-xs ">
                    <span className=" text-xs font-bold mr-2">Hours:</span>6
                    a.m,-7 p.m. CST M-F{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <div className="bg-white flex w-96 only_1 p-3">
                <img
                  src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/icon/W-CTGC139_Help-Page_CALL_IC.svg"
                  className="mr-2 h-12"
                />
                <div>
                  <p className="text-sm font-bold">Call </p>
                  <div className="text-xs ">
                    <p>1-800-Prime Supplies</p>
                    <p>(1-800-472-4643)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 flex justify-content-between ">
              <div className="bg-white flex w-96 only_1 p-3">
                <img
                  src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/marketing-content/icon/W-CTGC139_Help-Page_CALL_IC.svg"
                  className="mr-2 h-12"
                />
                <div>
                  <p className="text-sm font-bold">Email </p>
                  <Link to="/" className="theme_text text-xs">
                    Send a Message{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

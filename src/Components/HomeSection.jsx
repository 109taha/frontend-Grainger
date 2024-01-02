import React from "react";
import { Link } from "react-router-dom";

export default function HomeSection() {
  return (
    <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8  my-4 row gx-5">
    <h1 className="my-2 px-0 text-xl font-semibold">Supplies and Solutions for Every Industry</h1>
      <div className=" p-6  border col-xl-4 col-lg-4 col-md-12 col-sm-12 gray_background mt-2 gx-5">
        <div className="row">
          <div className="col-8">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold  text-black">
                Prime Supplies KnowHow
              </h5>
            </a>
            <p className="mb-3 font-normal text-black text-xs">
              News, inspiration and resources to help you get the job done.
            </p>
          </div>
          <div className="col-4 flex items-center justify-center">
            <img
            className="max-w-20 max-h-16"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/square@3x.jpg"
            />
          </div>
        </div>

        <div className="px-0 mt-2 text-xs">
         <Link Link to="/" className="theme_text border-end border-black pr-2 text-xs ">
            People
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
         Operations
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
      Safety And Health 
          </Link>
        </div>
      </div>
      <div className=" p-6  border col-xl-4 col-lg-4 col-md-12 col-sm-12 gray_background mt-2 gx-5">
        <div className="row">
          <div className="col-8">
            <Link to="/AllProductCategories">
              <h5 className="mb-2 text-sm font-bold  text-black">
              Product Collections

              </h5>
            </Link>
            <p className="mb-3 font-normal text-black text-xs">
            Products and information organized around your needs.
            </p>
          </div>
          <div className="col-4 flex items-center justify-center">
            <img
            className="max-w-20 max-h-16"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/square@3x.jpg"
            />
          </div>
        </div>

        <div className="mt-2 text-xs">
        
          <Link to="/" className="theme_text border-end border-black pr-2 text-xs ">
          Industries
          </Link>
          
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
          Metalworking
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
          Safety and Health Solutions Center
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
          Emergency Preparedness
          </Link>
        </div>
      </div>
      <div className=" p-6  border col-xl-4 col-lg-4 col-md-12 col-sm-12 gray_background mt-2">
        <div className="row">
          <div className="col-8">
            <a href="#">
              <h5 className="mb-2 text-sm font-bold  text-black">
              Services and Solutions

              </h5>
            </a>
            <p className="mb-3 font-normal text-black text-xs">
            We’re here for you – find out how we can help
            </p>
          </div>
          <div className="col-4 flex items-center justify-center">
            <img
            className="max-w-20 max-h-16"
              src="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/gcom/homepage/square@3x.jpg"
            />
          </div>
        </div>

        <div className="px-0 mt-2 text-xs">
          <Link to="/" className="theme_text border-end border-black pr-2 text-xs ">
          KeepStock® Inventory Management
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
          Managed Safety Programs
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
          Energy
          </Link>
          <Link to="/" className="theme_text border-end border-black px-2 text-xs ">
            EH&S
          </Link> <Link to="/" className="theme_text border-end border-black px-2 text-xs">
           Facility
          </Link>
        </div>
      </div>
      <h5 className="text-xs my-4 px-0 text-gray-400">Prime Supplies is America’s trusted source for MRO supplies and industrial products. For over 90 years, we’ve built a tradition of getting customers the products and services they need. Prime Supplies offers over a million products from thousands of trusted MRO suppliers, plus online features and a mobile app that let customers order their MRO equipment and manage their orders whenever and wherever they are. We back this up with 24/7 customer service and technical support from experts with deep knowledge of MRO tools and products.</h5>
    </div>
  );
}

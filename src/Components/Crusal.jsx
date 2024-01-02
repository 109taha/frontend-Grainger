import React from "react";
import pic1 from "../assests/1.jpg"
import pic2 from "../assests/2.jpg"
import pic3 from "../assests/3.jpg"

export default function Crusal() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 row mt-4">
     <article className="relative overflow-hidden col-sm-12 col-md-12 col-lg-4  show_1">
        <img
          alt="Office"
          src={pic1}
          className="absolute object-cover "
        />

        <div className="relative  pt-6 sm:pt-6 lg:pt-14">
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
      </article>
      <article className="relative overflow-hidden col-sm-12 col-md-12 col-lg-4  show_1">
        <img
          alt="Office"
          src={pic2}
          className="absolute object-cover "
        />

        <div className="relative  pt-6 sm:pt-6 lg:pt-14">
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
      </article>
      <article className="relative overflow-hidden col-sm-12 col-md-12 col-lg-4  show_1">
        <img
          alt="Office"
          src={pic3}
          className="absolute object-cover "
        />

        <div className="relative  pt-6 sm:pt-6 lg:pt-14 md:pt-10">
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
      </article>
    </div>
  );
}
//

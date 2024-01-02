import * as React from "react";
import MainDropDown from "./MainDropDown";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer
        class="text-white body-font"
        style={{ backgroundColor: "#21292F" }}
      >
        <div class="container px-5 py-8" bis_skin_checked="1">
          <div
            class="flex flex-wrap md:text-left text-start -mb-10 -mx-4"
            bis_skin_checked="1"
          >
            <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                About Us
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Careers
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Customers
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Suppliers
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    ESG
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Investors
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Media
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                Order Support
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Existing Orders
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Returns and Warranty
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Extended Protection Plan
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Invoices
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Special Orders
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                Prime's Got Your Back
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Prime Supplies KnowHow ®
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Product Collections
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Services
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Industries
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    We're Mobile
                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                    Mobile Features
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked="1">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                  Call Us (1-800-PRIME-SUPPLIES)


                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                  Branch Locations

                  </a>
                </li>
                <li>
                  <a class="font-semibold" style={{ color: "#798986" }}>
                  Catalog Request
                  </a>
                </li>
                <Link to="/Help">
                  <a class="font-semibold ml-3" style={{ color: "#798986" }}>
                    Help
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-black" bis_skin_checked="1">
          <div
            class="container py-4 px-5 flex flex-column text-center sm:flex-row justify-center"
            bis_skin_checked="1"
          >
            <div>
              Terms of Access | Terms of Sale | Privacy Policy | Your Privacy
              Choices | Sitemap | Fraud Alert | Accessibility Statement
            </div>
            <div className="py-2">
              © 1994 - 2023, W.W. Prime Supplies, Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

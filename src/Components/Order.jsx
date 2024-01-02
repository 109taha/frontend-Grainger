import { TextField } from "@mui/material";
import React from "react";

export default function Order() {
  return (
    <section class="bg-white">
      <div class="flex  items-center justify-center px-3  mx-auto lg:py-0">
        <div class="w-full bg-white  sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-300">
          <div class="px-2 space-y-1 sm:p-2">
            <h1 class="text-sm font-bold leading-tight tracking-tight text-gray-900 md:text-sm text-black mt-2">
              Line by Line
            </h1>
            <form class="space-y-4 md:space-y-6 pt-3 mt-2 border-t border-gray" action="#">
            <div className="d-flex space-x-2 w-56">
                <TextField
                  id="outlined-text-input"
                  label="item #"
                  type="text"
                  className="w-90 h-6"
                  size="small"
                />
                   <TextField
                    id="outlined-Quantity-input"
                    label="Qty"
                    type="number"
                    className="w-20 h-6"
                    defaultValue="1"
                    size="small"
                  />
              </div>
              <div className="d-flex space-x-2 w-56">
                <TextField
                  id="outlined-text-input"
                  label="item #"
                  type="text"
                  className="w-90 h-6"
                  size="small"
                />
                   <TextField
                    id="outlined-Quantity-input"
                    label="Qty"
                    type="number"
                    size="small"
                    className="w-20 h-6"
                    defaultValue="1"
                  />
              </div>
              <div className="d-flex space-x-2 w-56">
                <TextField
                  id="outlined-text-input"
                  label="item #"
                  type="text"
                  className="w-90 h-6"
                  size="small"
                />
                   <TextField
                    id="outlined-Quantity-input"
                    label="Qty"
                    type="number"
                    size="small"
                    className="w-20 h-6"
                    defaultValue="1"
                  />
              </div>
              <div className="d-flex space-x-2 w-56">
                <TextField
                  id="outlined-text-input"
                  label="item #"
                  type="text"
                  className="w-90 h-6"
                  size="small"
                />
                   <TextField
                    id="outlined-Quantity-input"
                    label="Qty"
                    type="number"
                    size="small"
                    className="w-20 h-6"
                    defaultValue="1"
                  />
              </div>
              <div className="d-flex space-x-2 w-56">
                <TextField
                  id="outlined-text-input"
                  label="item #"
                  type="text"
                  className="w-90 h-6"
                  size="small"
                />
                   <TextField
                    id="outlined-Quantity-input"
                    label="Qty"
                    type="number"
                    size="small"
                    className="w-20 h-6"
                    defaultValue="1"
                  />
              </div>
              <button
                type="submit"
                class="w-full theme_btn font-medium text-sm px-5 py-2.5 text-center "
              >
                Add to Cart
              </button>
              <p className="theme_text text-sm">Show more fields for copy & paste </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

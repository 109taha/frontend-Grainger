import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";

export default function ReplacementPartsSearch() {
    const [searchProducts, setSearchProducts] = useState({ data: [] });
    const { query } = useParams();
    console.log("QUERY", query)
    const [page, setPage] = useState(1)
    const incPage = async () => {
        const current = page + 1
        setPage(current)
        await asyncSearchProducts();
    }
    const decPage = async () => {
        if (page > 1) {
            const current = page - 1
            setPage(current)
            await asyncSearchProducts();
        } else {
            console.log("CANT GO BACK")
        }
    }

    const asyncSearchProducts = async () => {
        try {
            const response = await fetch(`/api/product/parts/search/${query}?page=${page}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            console.log(data);
            console.log(response)
            if (response.status === 200) {
                if (data.data == [] || data.data.length === 0) {
                    window.alert("No Products Found With Search Query", query)
                }
                setSearchProducts({ data: data.data });
                console.log(searchProducts)
            } else {
                window.alert(data.message)
            }
        } catch (error) {
            window.alert(error.message)
        }
    }
    useEffect(() => {
        asyncSearchProducts();
    }, [])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 my-5 ">
                <div className="flex justify-start flex-column p-0 space-y-3 mb-3 max-w-md">
                    {/* Categories Name  */}
                    <h1 className="text-xl font-semibold">Sanding Abrasives</h1>
                    <h3 className="text-xs">Total No of Product</h3>
                    {/* Categories Description Goes HEre  */}
                    <h3 className="text-xs">
                        Grainger is a leading provider of industrial maintenance, repair,
                        and operations (MRO) products to keep businesses running worldwide.
                    </h3>
                </div>
                <div className="row px-2">
                {searchProducts.data.map((data, index) => {
            return <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2  px-4 flex flex-column item-center border">
              <div>
                <img
                  alt="Art"
                  src={data.image}
                  className="h-22 object-cover flex flex-column item-center my-3 hover:border-2 border-black"
                />
                <p className="text-wrap theme_text text-xs font-semibold mb-2">
                  {data.title}
                </p>
                <p>
                  <span className="text_xss text-gray-500">Item</span>
                  <span className="text-xs ml-2">{data.item}</span>
                </p>
                <p>
                  <span className=" text_xss text-gray-500">Mfr. Model</span>
                  <span className="text_xss ml-2">HV2118400G</span>
                </p>
                <p className="my-3 text_xss d-flex ">
                  <input type="checkbox" />
                  <span className="text_xss ml-2">Compare </span>
                </p>
                <p className="my-1">
                  <span className=" text_xss text-gray-500 block">Web Price</span>
                  <span className="text-sm  text-green-900 font-semibold">
                    ${data.price}
                  </span>
                  <span className="text_xss text-gray-500">{data.each}</span>
                </p>
                <p className="my-1">
                  <span className=" text_xss text-gray-500 block">
                    To check availability
                  </span>

                  <div>
                    <button
                      aria-describedby={id}
                      type="button"
                      className="text_xss theme_text mb-3"
                      onClick={handleClick}
                    >
                      Enter s location
                    </button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Box sx={{ bgcolor: "background.paper" }}>
                        <div
                          className=" max-w-xs border border-blue-100 bg-white p-3 pr-1 mr-1 shadow-lg sm:p-6 lg:p-8"
                          role="alert"
                        >
                          <p className="font-medium sm:text-lg">Availability</p>
                          <FormControl className="my-2 mx-3">
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
                                style={{ width: "70px", height: "40px" }}
                                className="border pr-2 py-1 text-xs font-sm"
                                sx={{
                                  "& .MuiSvgIcon-root": {
                                    fontSize: 16,
                                  },
                                }}
                                control={
                                  <Radio
                                    size="small"
                                    style={{ width: "20px", height: "20px" }}
                                  />
                                }
                                label={
                                  <span style={{ fontSize: "12px" }}>Ship </span>
                                }
                              />
                              <FormControlLabel
                                value="male"
                                className="border pr-2 py-1 text-xs font-sm"
                                style={{ width: "70px", height: "40px" }}
                                sx={{
                                  "& .MuiSvgIcon-root": {
                                    fontSize: 16,
                                  },
                                }}
                                control={
                                  <Radio
                                    size="small"
                                    style={{ width: "20px", height: "20px" }}
                                  />
                                }
                                label={
                                  <span style={{ fontSize: "12px" }}>Pick up</span>
                                }
                              />
                            </RadioGroup>
                          </FormControl>

                          <p className="my-2 text-xs text-gray-500">
                            Enter a ZIP Code.
                          </p>
                          <TextField
                            id="outlined-email-input"
                            label={
                              <span style={{ fontSize: "10px" }}>Zip Code</span>
                            }
                            type="email"
                            size="small"
                            style={{
                              width: "74px",
                              height: "40px",
                              marginRight: "5px",
                            }}
                          />
                          <button
                            className="bg-gray-600 text-white w-24 py-1 rounded "
                            style={{ width: "70px", height: "40px" }}
                          >
                            Save
                          </button>
                        </div>
                      </Box>
                    </Popper>
                  </div>

                  <div className="row ">
                    <div className="col-3" >
                      <TextField
                        id="outlined-email-input"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "8px",
                          },
                        }}
                        defaultValue="1"
                        label={<span style={{ fontSize: "10px" }}>Qty</span>}
                        type=""
                        size="small"
                        style={{
                          width: "40px",
                          height: "50px",
                          marginRight: "5px",
                        }}
                      />
                    </div>
                    <div className="col-8">
                      <button className="theme_btn p-2 text_xss ml-2 rounded">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          })}

                    
                </div>
            </div>
            <div className="d-flex justify-content-center">
          <div className="inline-flex justify-center gap-1">
            <button
              onClick={decPage}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div>
              <label htmlFor="PaginationPage" className="sr-only">
                Page
              </label>

              <input
                type="number"
                className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                min="1"
                value={page}
                id="PaginationPage"
              />
            </div>

            <button
              onClick={incPage}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        </>
    );
}

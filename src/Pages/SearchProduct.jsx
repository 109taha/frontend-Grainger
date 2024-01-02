import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom';


export default function SearchProduct() {
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
  const [searchProducts, setSearchProducts] = useState({ data: [] });

  const asyncSearchProducts = async () => {
    try {
      const response = await fetch(`/api/product/searchProduct/${query}?page=${page}`, {
        method: "POST",
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
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 my-5 ">
        <Link to={`/search/parts/${query}`} class="" type="button">
          Find In Parts
        </Link>
        <div className="flex justify-start flex-column p-0 space-y-3 mb-3 max-w-md">
          <h1 className="text-xl font-semibold">
            Search Product    * (Page In Development) *
          </h1>
          <p></p>
          <h3 className='text-xs'>Grainger is a leading provider of industrial maintenance, repair, and operations (MRO) products to keep businesses running worldwide. Our product assortments are regularly curated to best meet customer needs. Grainger also provides product services such as lighting upgrades, lighting project management, hazardous recycling services, storage equipment/installation, and safety services.
            Current Page : {page}</h3>
        </div>
        <div className='row px-2'>
          {searchProducts.data.map((data, index) => {
            return <Link to={`/productDescription/${data._id}`} className=" col-6 col-xl-2 col-lg-3 col-md-3 col-sm-4 flex flex-column items-center pt-5 border ">
              <img
                alt="Art"
                src={data.image}
                className="h-24 object-cover flex flex-column item-center"
              />
              <p className="mt-2 max-w-sm text-gray-700 text-center">
                {data.mainTitle}
              </p>
            </Link>
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
  )
}

import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';

export default function ALLProductCatogiries() {
  const [categoryData, setCategoryData] = useState({ data: [] });
  const asyncGetAllCategories = async () => {
    try {
      const response = await fetch('/api/category/categories', {
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
        setCategoryData({ data: data.data });
        console.log(categoryData)
      } else {
        window.alert(data.message)
      }
    } catch (error) {
      window.alert(error.message)
    }
  }
  useEffect(() => {
      asyncGetAllCategories();
  }, [])
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 my-5 ">
        <div className="flex justify-start flex-column p-0 space-y-3 mb-3 max-w-md">
          <h1 className="text-xl font-semibold">
            Product Categories
          </h1>
          <h3 className='text-xs'>Grainger is a leading provider of industrial maintenance, repair, and operations (MRO) products to keep businesses running worldwide. Our product assortments are regularly curated to best meet customer needs. Grainger also provides product services such as lighting upgrades, lighting project management, hazardous recycling services, storage equipment/installation, and safety services.</h3>
        </div>
        <div className='row px-2'>
          {categoryData.data.map((data, index) => {
            return <Link to={`/product/${data._id}`} className=" col-6 col-xl-2 col-lg-3 col-md-3 col-sm-4 flex flex-column items-center pt-5 border ">
              <img
                alt="Art"
                src={data.category_image}
                className="h-24 object-cover flex flex-column item-center"
              />
              <p className="mt-2 max-w-sm text-gray-700 text-center">
                {data.category_name}
              </p>
            </Link>
          })}
        </div>
      </div>
    </>
  )
}

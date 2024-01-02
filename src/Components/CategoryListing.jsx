import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryListing() {
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
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 row my-4">
      <div className="flex justify-between my-2">
        <h1 className="lg:text-lg md:text-lg font-semibold text-sm">
          The One Item You Need + 1.5 Million More
        </h1>
        <Link to='/AllProductCategories' className="theme_text text-xs mt-2">View All Product Categories</Link>
      </div>
      {categoryData.data.slice(0, 15).map((data, index) => {
        return <Link to={`/Product/${data._id}`}   className=" col-6 col-xl-2 col-lg-3 col-md-3 col-sm-4 flex flex-column items-center pt-5 border ">
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
  );
}

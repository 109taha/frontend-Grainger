import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams } from 'react-router-dom';


export default function ProductDescription() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  // const id = "6565110271dc7f04a17c2646"
  const asyncGetProduct = async () => {
    try {
      const response = await fetch(`/api/product/products/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(response);
      console.log(data)
      // if (response.status === 200) {
      if (response.status === 200 && data && data.data) {
        if (!data) {
          window.alert("Cannot Find Product")
        }
        setProduct(data.data);
      } else {
        window.alert(data.message)
      }
    } catch (error) {
      window.alert(error.message)
    }
  }
  const types = product.product_types
  useEffect(() => {
    asyncGetProduct();
  }, [])


  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0 my-5 ">
        <div className="flex justify-start flex-column p-0 space-y-3 mb-3 max-w-md">
          <h1 className="text-xl font-semibold">Product Category : {product.productCategory}</h1>
        </div>
        <h1 className="bg-gray-200 p-2 font-bold mt-4 mb-2">
          {product.mainTitle}
        </h1>
        <div className="row py-2 d-flex jusitfy-content-center align-content-center divide-y divide-dashed divide-slate-700 divide-solid">
          <div
            href="#"
            className="max-w-3xl d-flex p-0 text-sm items-center  ml-2 mb-3"
          >
            <img
              alt="Art"
              src={product.image}
              className="h-20 object-cover mr-3 flex align-item-top"
            />
            {product.description}
          </div>
          {product.product_types ? (
            product.product_types.map((main, index) => {
              return <div>
                <p id={index} className="font-bold text-sm pt-3">{main.type_name}</p>
                <div
                  href="#"
                  className="max-w-3xl d-flex p-0 text-xs items-center  ml-2 mb-3"
                >
                  <img
                    alt="Art"
                    src={main.type_image}
                    className="h-14 object-cover mr-3 flex align-item-top"
                  />
                </div>
                <table class="max-w-7xl table">
                  <thead>
                    <tr className="border-b ">
                      {main.table_header ? (
                        main.table_header.map((head, index) => {
                          return <th key={index} className="font-bold text-xs min-w-sm">{head}</th>
                        })
                      ) : (
                        <div>Not Found</div>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {main.table_body.map((bodyRow, bodyIndex) => (
                      <tr key={bodyIndex} className="border-b">
                        {bodyRow.map((bodyItem, bodyItemIndex) => (
                          <td key={bodyItemIndex} className="text-xs">
                            {bodyItem}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            })
          ) : (
            <div>No product types available.</div>
          )}

        </div>
        <h5 className="text-sm">Note: Product availability is real-time basis and adjusted continuously. The product will be reserved for you when you complete your order.
          More</h5>
      </div>
    </div>
  );
}

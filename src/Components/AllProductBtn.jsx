import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllProductBtn() {
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
        console.log(categoryData._id,categoryData.name)
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
    <div className="dropdown"> {/* Use className instead of class */}
      <button
        className="btn btn-secondary border-none dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        All Products
      </button>
      <div
        className="max-w-3xl dropdown-menu p-3 shadow" 
        aria-labelledby="dropdownMenu2"
      >
        <h1 className="font-semibold text-xl p-2 border-b"> ALL Product</h1>
        <div className="d-flex  py-3">
        <ul className="col-4 border-r mr-3">
          <li>
            <Link to='/AllProductCategories' class="dropdown-item text-md text-gray-500" type="button">
            All Products Categories 
            </Link>
          </li>
          <li>
            <Link to="654e945526bcdb46e1d2e819" class="dropdown-item text-md text-gray-500" type="button">
              Abrasives
            </Link>
          </li>
          <li>
            <Link to="654e945526bcdb46e1d2e81b" class="dropdown-item text-md text-gray-500" type="button">
            Adhesives, Sealants and Tape
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e81d' class="dropdown-item text-md text-gray-500" type="button">
            Electronics & Batteries
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e81f' class="dropdown-item text-md text-gray-500" type="button">
            Fasteners
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e821' class="dropdown-item text-md text-gray-500" type="button">
            Fleet & Vehicle Maintenance
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e823' class="dropdown-item text-md text-gray-500" type="button">
            Furnishings, Appliances 
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e825' class="dropdown-item text-md text-gray-500" type="button">
            HVAC and Refrigeration
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e827' class="dropdown-item text-md text-gray-500" type="button">
            Hardware
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e82d' class="dropdown-item text-md text-gray-500" type="button">
            Lighting
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e82f' class="dropdown-item text-md text-gray-500" type="button">
            Lubrication
            </Link>
          </li>
        </ul>
        <ul className="col-4 border-r mr-3">
          <li>
            <Link to='/654e945526bcdb46e1d2e831' class="dropdown-item text-md text-gray-500" type="button">
            Machining
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e833' class="dropdown-item text-md text-gray-500" type="button">
            Material Handling
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e835' class="dropdown-item text-md text-gray-500" type="button">
            Motors
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e837' class="dropdown-item text-md text-gray-500" type="button">
            Office Supplies
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e839' class="dropdown-item text-md text-gray-500" type="button">
            Outdoor Equipment
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e83b' class="dropdown-item text-md text-gray-500" type="button">
            Packaging & Shipping
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e83d' class="dropdown-item text-md text-gray-500" type="button">
            Paints, Equipment and Supplies
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e83f' class="dropdown-item text-md text-gray-500" type="button">
            Pipe, Hose, Tube & Fittings
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e841' class="dropdown-item text-md text-gray-500" type="button">
            Plumbing
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e843' class="dropdown-item text-md text-gray-500" type="button">
            Pneumatics  
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e845' class="dropdown-item text-md text-gray-500" type="button">
              Power Transmission
            </Link>
          </li>
        </ul>
        <ul className="col-4 ">
          <li>
            <Link to='/654e945526bcdb46e1d2e847' class="dropdown-item text-md text-gray-500" type="button">
            Pumps
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e849' class="dropdown-item text-md text-gray-500" type="button">
            Raw Materials
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e84b' class="dropdown-item text-md text-gray-500" type="button">
            Reference and Learning 
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e84d' class="dropdown-item text-md text-gray-500" type="button">
            Safety
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e84f' class="dropdown-item text-md text-gray-500" type="button">
            Security
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e829' class="dropdown-item text-md text-gray-500" type="button">
            Hydraulics
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e82b' class="dropdown-item text-md text-gray-500" type="button">
            Lab Supplies
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e855' class="dropdown-item text-md text-gray-500" type="button">
            Welding
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e857' class="dropdown-item text-md text-gray-500" type="button">
            Electrical
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e859' class="dropdown-item text-md text-gray-500" type="button">
            Cleaning and Janitorial
            </Link>
          </li>
          <li>
            <Link to='/654e945526bcdb46e1d2e851' class="dropdown-item text-md text-gray-500" type="button">
            Test Instruments
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
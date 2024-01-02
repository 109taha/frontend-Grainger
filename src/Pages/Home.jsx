import React from "react";
import Navbar from "../Components/Navbar";
import Crusal from "../Components/Crusal";
import CategoryListing from "../Components/CategoryListing";
import HomeSection from "../Components/HomeSection";
import EmptyCart from "./EmptyCart";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Crusal/>
      <CategoryListing/>
      <HomeSection/>
    </div>
  );
}

import React, { useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import pic1 from "../JPG/312.jpg";
import pic2 from "../JPG/313.jpg";
import pic3 from "../JPG/03.jpg";
import pic4 from "../JPG/04.jpg";
import pic5 from "../JPG/05.jpg";
import pic6 from "../JPG/06.jpg";
import pic7 from "../JPG/07.jpg";
import pic8 from "../JPG/08.jpg";
import pic9 from "../JPG/09.jpg";
import pic10 from "../JPG/10.jpg";
import pic11 from "../JPG/11.jpg";
import pic12 from "../JPG/12.jpg";
import pic13 from "../JPG/13.jpg";
import pic14 from "../JPG/14.jpg";
import pic15 from "../JPG/15.jpg";
import pic16 from "../JPG/16.jpg";
import pic17 from "../JPG/17.jpg";
import pic18 from "../JPG/18.jpg";
import pic19 from "../JPG/19.jpg";
import pic20 from "../JPG/20.jpg";
import pic21 from "../JPG/21.jpg";
import pic22 from "../JPG/22.jpg";
import pic23 from "../JPG/23.jpg";
import pic24 from "../JPG/24.jpg";
import pic25 from "../JPG/25.jpg";
import pic26 from "../JPG/26.jpg";
import pic27 from "../JPG/27.jpg";
import pic28 from "../JPG/28.jpg";
import pic29 from "../JPG/29.jpg";
import pic30 from "../JPG/30.jpg";
import pic31 from "../JPG/31.jpg";
import pic32 from "../JPG/32.jpg";
import pic33 from "../JPG/33.jpg";
import pic34 from "../JPG/34.jpg";
import pic35 from "../JPG/35.jpg";
import pic36 from "../JPG/36.jpg";
import pic37 from "../JPG/37.jpg";
import pic38 from "../JPG/38.jpg";
import pic39 from "../JPG/39.jpg";
import pic40 from "../JPG/40.jpg";
import pic41 from "../JPG/41.jpg";
import pic42 from "../JPG/42.jpg";
import pic43 from "../JPG/43.jpg";
import pic44 from "../JPG/44.jpg";
import pic45 from "../JPG/45.jpg";
import pic46 from "../JPG/46.jpg";
import pic47 from "../JPG/47.jpg";
import pic48 from "../JPG/48.jpg";
import pic49 from "../JPG/49.jpg";
import pic50 from "../JPG/50.jpg";
import pic51 from "../JPG/49.jpg";
import pic52 from "../JPG/50.jpg";
import pic53 from "../JPG/51.jpg";
import pic54 from "../JPG/52.jpg";
import pic55 from "../JPG/53.jpg";
import pic56 from "../JPG/54.jpg";
import pic57 from "../JPG/55.jpg";
import pic58 from "../JPG/56.jpg";
import pic59 from "../JPG/57.jpg";
import pic60 from "../JPG/58.jpg";
import pic61 from "../JPG/59.jpg";
import pic62 from "../JPG/60.jpg";
import pic63 from "../JPG/61.jpg";
import pic64 from "../JPG/62.jpg";
import pic65 from "../JPG/63.jpg";
import pic66 from "../JPG/64.jpg";
import pic67 from "../JPG/65.jpg";
import pic68 from "../JPG/66.jpg";
import pic69 from "../JPG/67.jpg";
import pic70 from "../JPG/68.jpg";
import pic71 from "../JPG/69.jpg";
import pic72 from "../JPG/70.jpg";
import pic73 from "../JPG/71.jpg";

const images = [
  { url: pic1, name: "Catalog Contents" },
  { url: pic2, name: "Supplies & Solutions for Every Industry" },
  { url: pic3, name: "Product Index" },
  { url: pic4, name: "Manufacturer & Brand Index" },
  { url: pic5, name: "Motors" },
  { url: pic5, name: "Power Transmission" },
  { url: pic6, name: "Electrical" },
  { url: pic7, name: "Batteries" },
  { url: pic8, name: "Test Instruments" },
  { url: pic9, name: "Lab Supplies" },
  { url: pic10, name: "Power Tools" },
  { url: pic11, name: "Hand Tools" },
  { url: pic12, name: "Fleet/Vehicle Maintenance" },
  { url: pic13, name: "Outdoor Equipment & Generators" },
  { url: pic14, name: "Ladders" },
  { url: pic15, name: "Material Handling" },
  { url: pic16, name: "Shelving & Storage" },
  { url: pic17, name: "Shop Furniture" },
  { url: pic18, name: "Tape" },
  { url: pic19, name: "Ofice Furniture" },
  { url: pic20, name: "Image 2" },
  { url: pic21, name: "Image 2" },
  { url: pic22, name: "Image 2" },
  { url: pic23, name: "Image 2" },
  { url: pic24, name: "Image 2" },
  { url: pic25, name: "Image 2" },
  { url: pic26, name: "Image 2" },
  { url: pic27, name: "Image 2" },
  { url: pic28, name: "Image 2" },
  { url: pic29, name: "Image 2" },
  { url: pic30, name: "Image 2" },
  { url: pic31, name: "Image 2" },
  { url: pic32, name: "Image 2" },
  { url: pic33, name: "Image 2" },
  { url: pic34, name: "Image 2" },
  { url: pic35, name: "Image 2" },
  { url: pic36, name: "Image 2" },
  { url: pic37, name: "Image 2" },
  { url: pic38, name: "Image 2" },
  { url: pic39, name: "Image 2" },
  { url: pic40, name: "Image 2" },
  { url: pic41, name: "Image 2" },
  { url: pic42, name: "Image 2" },
  { url: pic43, name: "Image 2" },
  { url: pic44, name: "Image 2" },
  { url: pic45, name: "Image 2" },
  { url: pic46, name: "Image 2" },
  { url: pic47, name: "Image 2" },
  { url: pic48, name: "Image 2" },
  { url: pic49, name: "Image 2" },
  { url: pic50, name: "Image 2" },
  { url: pic51, name: "Image 2" },
  { url: pic52, name: "Image 2" },
  { url: pic53, name: "Image 2" },
  { url: pic54, name: "Image 2" },
  { url: pic55, name: "Image 2" },
  { url: pic56, name: "Image 2" },
  { url: pic57, name: "Image 2" },
  { url: pic58, name: "Image 2" },
  { url: pic59, name: "Image 2" },
  { url: pic60, name: "Image 2" },
  { url: pic61, name: "Image 2" },
  { url: pic62, name: "Image 2" },
  { url: pic63, name: "Image 2" },
  // { url: pic51, name: 'Image 2' },
  // Add more image URLs and names as needed
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div class="container-fluid p-0 m-0 bg-black" bis_skin_checked="1">
        <header class="flex   align-items-center">
          <ul class=" col-4   justify-content-center items-center mb-md-0">
            <li className="p-1 ">
              <a
                href="#"
                class="px-2 py-0 my-2 border border-white-2 hover:bg-blue-500 text-white"
                onClick={toggleSidebar}
              >
                Content
              </a>
            </li>
          </ul>
          <div class="col-4 flex justify-content-between" bis_skin_checked="1">
            <button onClick={goToPrevious} class=" me-2 " style={{color:"white"}}>
              <ArrowBackIosOutlinedIcon />
            </button>
            <p class=" me-2 text-white">A1</p>
            <button onClick={goToNext} href="#" class=" me-2" style={{color:"white"}}>
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div class="col-4 text-end" bis_skin_checked="1">
            {/* <a href="#" class=" me-2">
              About
            </a> */}
          </div>
        </header>
      </div>
      <div className="position-relative">
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div
            class="d-flex flex-column align-items-stretch flex-shrink-0"
            bis_skin_checked="1"
          >
            {/* <a
              href="/"
              class="d-flex align-items-center fl text-decoration-none border-bottom"
            >
              <svg class="bi me-2" width="30" height="24"></svg>
              <span class="fs-5 fw-semibold">List group</span>
            </a> */}
            <div
              class="list-group list-group-flush border-bottom scrollarea"
              bis_skin_checked="1"
            >
              {/* <a
                href="#"
                class="list-group-item list-group-item-action active py-3 lh-tight"
                aria-current="true"
              >
                <div
                  class="d-flex w-100 align-items-center justify-content-between"
                  bis_skin_checked="1"
                >
                  <strong class="mb-1">List group item heading</strong>
                  <small>Wed</small>
                </div>
                <div class="col-10 mb-1 small" bis_skin_checked="1">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-3 lh-tight"
              >
                <div
                  class="d-flex w-100 align-items-center justify-content-between"
                  bis_skin_checked="1"
                >
                  <strong class="mb-1">List group item heading</strong>
                  <small class="text-muted">Tues</small>
                </div>
                <div class="col-10 mb-1 small" bis_skin_checked="1">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action py-3 lh-tight"
              >
                <div
                  class="d-flex w-100 align-items-center justify-content-between"
                  bis_skin_checked="1"
                >
                  <strong class="mb-1">List group item heading</strong>
                  <small class="text-muted">Mon</small>
                </div>
                <div class="col-10 mb-1 small" bis_skin_checked="1">
                  Some placeholder content in a paragraph below the heading and
                  date.
                </div>
              </a> */}
              {images.map((image, index) => (
                <div
                  onClick={() => handleThumbnailClick(index)}
                  className="d-flex text-black text-start items-center text-sm m-1 bg-white border"
                >
                  <img
                    key={index}
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(index)}
                    style={{ maxWidth: "18%", height:"100%" }}
                    className={index === currentIndex ? "active" : ""}
                  />
                  <p className="ml-1"> {image.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slider-container">
          <div
            className="main-image"
            style={{ maxWidth: "450px", maxHeight: "100vh" }}
          >
            <img
              src={images[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
          <div className="arrows">
            <button onClick={goToPrevious} className="rightArrow">
              <ArrowBackIosOutlinedIcon />
            </button>
            <button onClick={goToNext} className="leftArrow">
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="thumbnails"></div>
        </div>
      </div>
    </>
  );
}

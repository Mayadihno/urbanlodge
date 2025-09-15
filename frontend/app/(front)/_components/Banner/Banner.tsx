"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { links, slides } from "@/utils/data";
import Link from "next/link";

const Banner = () => {
  const [searchValue, setSearchValue] = useState("");

  //   const handleLocationClick = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           alert(
  //             `Your location: Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`
  //           );
  //           // You can also set this as search value or send to API
  //           setSearchValue("Using Current Location...");
  //         },
  //         (error) => {
  //           alert("Location access denied. Please allow location access.");
  //         }
  //       );
  //     } else {
  //       alert("Geolocation is not supported by your browser.");
  //     }
  //   };

  return (
    <div className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[80vh] md:h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h2>

                {/* Links with separators */}
                <div className="flex justify-center items-center divide-x divide-gray-300 my-4">
                  {links.map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 text-white font-ebgaramond text-lg italic hover:text-secondary-dark ${
                        i === 0 ? "pl-0" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Search Box */}
                <div className="w-full max-w-lg">
                  <input
                    type="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    // onFocus={handleLocationClick}
                    placeholder="Search for properties..."
                    className="w-full bg-neutral-light px-4 py-3 rounded-lg text-black outline-none"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

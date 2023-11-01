'use client';
import React, { useEffect, useState } from "react";
import Header from "./header.js";
import style from "../list.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TeamListCard = () => {
const [karyawan, setKaryawan] = useState([]);
useEffect(() => {
  fetch("./employee.js").then((res) => res.json()).then((response) => {
    setKaryawan(response.employees);
  });
}, []);
  return (
    <>
      <Header />
      <div className="flex items-center mx-auto justify-center font-bold text-3xl font-mono">
        <h1>Meet Our <span className={style.span}>Amazing</span> Team!</h1>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div className={style.container}>
              <div className={style.hexagon}>
                <div className={style.shape}>
                  <img src="../assets/image/fotoorang.jpg"></img>
                  <div className={style.content}>
                    <div className="font-mono">
                      {karyawan.map((karya) => (
                        <div key={karya.id}>{karya.name}</div>
                      ))}
                      <p>Lorem ipsum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default TeamListCard;

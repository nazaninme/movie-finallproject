import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ImgSlider() {
  const[movies, setMovies]= useState([])
 console.log(movies)
  async function headerApi(){
    const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cd29fdecce83307fc9829a7652354b57')
    setMovies(data.results)
  }
  useEffect(()=>{
    headerApi()
  },[])
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie)=>{
          return (<SwiperSlide><img src={`https://image.tmdb.org/t/p/w1200/${movie.backdrop_path}`}/></SwiperSlide>
          )
        })}
        
  
      </Swiper>
    </>
  );
}

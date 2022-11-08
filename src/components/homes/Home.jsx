import React from 'react'
import HomeCard from './HomeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = ({ items }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="homeContainer">
        <Slider {...settings}>
          {items.map((item) => (
            <HomeCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Home

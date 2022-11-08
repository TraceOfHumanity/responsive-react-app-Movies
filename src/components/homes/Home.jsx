import React from 'react'
import HomeCard from './HomeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SpamleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn">
      <button className='next'>
        <i className="fa fa-chevron-right">
        </i>
      </button>
    </div>
  )
}
const SpamlePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn">
      <button className='prev'>
        <i className="fa fa-chevron-left">
        </i>
      </button>
    </div>
  )
}


const Home = ({ items }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SpamleNextArrow></SpamleNextArrow>,
    prevArrow: <SpamlePrevArrow></SpamlePrevArrow>,

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

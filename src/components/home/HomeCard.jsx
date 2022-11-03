import React from 'react';
import { Link } from "react-router-dom"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, vieo } }) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
          <h1>{id}</h1>
          <h1>{tags}</h1>
          <h1>{time}</h1>
        </div>
      </div>
    </>
  )
}

export default HomeCard

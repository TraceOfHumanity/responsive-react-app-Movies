import React from 'react'

const HomeCard = ({item:{id, cover, name, rating, time, desc, starring, genres, tags, video}}) => {
  return (
    <div>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeCard

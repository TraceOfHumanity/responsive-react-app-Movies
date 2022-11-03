import React from 'react';
import { Link } from "react-router-dom"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags, vieo } }) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label>{rating}</label>
            <span>GP</span>
            <label>{time}</label>
          </div>
          <p>{desc}</p>
          <div className="cost">
            <h4>
              <span>
                Starring
                {starring}
              </span>
            </h4>
            <h4>
              <span>
                Genres
                {genres}
              </span>
            </h4>
            <h4>
              <span>
                Tags
                {tags}
              </span>
            </h4>
            <button className='primary-btn'>
              <i className="fas fa-play"></i>PLAY NOW
            </button>
            <div className="button row">
              <Link to={`/singlepage/${id}`}>
                <button>
                  <div className="img">
                    <img src="./images/play-button.png" alt="" />
                    <img src="./images/play.png" alt="" />
                  </div>
                  WATCH TRAILER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData";
import Upcomming from "../upcomming/Upcomming";
// import "./style.css"




const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null);
  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  const [rec, setRec] = useState(recommended);

  return (
    <div>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} |</span> <span>HD</span>
            </div>
            <div className="container">
              <video src="{item.video}" controls></video>
              <div className="para">
                <h3>{item.date}</h3>
                <p>{item.desc}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores doloremque mollitia, quis corrupti suscipit rerum quod esse quam quidem dicta impedit est quia porro quae explicabo iure error accusamus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores doloremque mollitia, quis corrupti suscipit rerum quod esse quam quidem dicta impedit est quia porro quae explicabo iure error accusamus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores doloremque mollitia, quis corrupti suscipit rerum quod esse quam quidem dicta impedit est quia porro quae explicabo iure error accusamus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores doloremque mollitia, quis corrupti suscipit rerum quod esse quam quidem dicta impedit est quia porro quae explicabo iure error accusamus.</p>
              </div>
              <div className="social">
                <div className='soical'>
                  <h3>Share : </h3>
                  <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                  <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                  <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
                </div>
              </div>
            </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : null}
    </div>
  )
}

export default SinglePage

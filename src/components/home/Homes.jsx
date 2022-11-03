import React, { useState } from "react";
// import "./home.css";
import { homeData } from "../../dummyData";
import Home from "./Home";

const Homes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <div>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className="margin">

      </div>
    </div>
  )
}

export default Homes

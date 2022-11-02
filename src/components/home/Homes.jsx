import React, { useState } from 'react';
import { homeData } from '../../dummyData';
import Home from './Home';

const Homes = () => {
  const [item, setItem] = useState(homeData);

  return (
    <div>
      <section className='home'>
        <Home item={item} />
      </section>
      <div className="margin">

      </div>
    </div>
  )
}

export default Homes

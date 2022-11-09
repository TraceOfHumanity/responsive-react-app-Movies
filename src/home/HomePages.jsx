import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import Trending from '../components/trending/Trending';
import Upcomming from '../components/upcomming/Upcomming'
import { upcome, latest, recommended } from '../dummyData';

const HomePages = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <div>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Latest Movies' />

    </div>
  )
}

export default HomePages

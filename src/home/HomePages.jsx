import React, { useState } from 'react'
import Homes from '../components/homes/Homes'
import Upcomming from '../components/upcomming/Upcomming'
import { upcome } from '../dummyData';

const HomePages = () => {
  const [items, setItems] = useState(upcome);
  return (
    <div>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
    </div>
  )
}

export default HomePages

import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import kendrick from './assets/kendrick.jpg'
import dababy from './assets/dababy.jpg'
import megan from './assets/meganstallion.jpg'
import travis from './assets/travis-scott.jpg'
import FeaturedProfile from './components/FeaturedProfile'

export default function Home(props: any) {

  return (
    <div className="main">
      <div className="content">
        <FeaturedProfile image={kendrick} />
        <div className="profiles">
          <ProfileCard image={kendrick} name='Dudemsan Lamar' />
          <ProfileCard image={dababy} name='DaBaby' />
          <ProfileCard image={megan} name='Megan Thee Stallion' />
          <ProfileCard image={travis} name='Travis Scott' />

          <ProfileCard image={kendrick} name='Kendrick Lamar' />
          <ProfileCard image={dababy} name='DaBaby' />
          <ProfileCard image={megan} name='Megan Thee Stallion' />
          <ProfileCard image={travis} name='Travis Scott' />

          <ProfileCard image={kendrick} name='Kendrick Lamar' />
          <ProfileCard image={dababy} name='DaBaby' />
          <ProfileCard image={megan} name='Megan Thee Stallion' />
          <ProfileCard image={travis} name='Travis Scott' />

          <ProfileCard image={kendrick} name='Kendrick Lamar' />
          <ProfileCard image={dababy} name='DaBaby' />
          <ProfileCard image={megan} name='Megan Thee Stallion' />
          <ProfileCard image={travis} name='Travis Scott' />
          {/* <div className="profile--content">
						<div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis quam assumenda iusto iure placeat facilis modi, ea praesentium vero quas. Ipsum quas sapiente libero numquam dicta hic sit perferendis.</div>
					</div> */}
        </div>
      </div>
    </div>
  )
}
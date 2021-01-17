import './Home.css'
import React, { Fragment } from 'react'
import ProfileCard from './components/ProfileCard'
import kendrick from './assets/kendrick.jpg'
import dababy from './assets/dababy.jpg'
import megan from './assets/meganstallion.jpg'
import travis from './assets/travis-scott.jpg'
import FeaturedProfile from './components/FeaturedProfile'

export default function Home(props: any) {

  return (
    <Fragment>
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
      </div>
    </Fragment>
  )
}
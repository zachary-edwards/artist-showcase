import React from 'react'
import ProfileCard from './components/ProfileCard'
import kendrick from './assets/kendrick.jpg'
import dababy from './assets/dababy.jpg'
import megan from './assets/meganstallion.jpg'
import travis from './assets/travis-scott.jpg'

export default function Home(props: any) {

    return (
        <div className="container">
            <div className="sidebar">
                <div className="nav">
                    <div className="nav-list">
                        <li>
                            <a href="">
                                Artists
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Zach
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Jake
                            </a>
                        </li>
                        <li>
                            <a href="">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contact Us
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="content">
                    <ProfileCard image={kendrick} name='Kendrick Lamar'/>
                    <ProfileCard image={dababy} name='DaBaby'/>
                    <ProfileCard image={megan} name='Megan Thee Stallion'/>
                    <ProfileCard image={travis} name='Travis Scott'/>
                    {/* <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis quam assumenda iusto iure placeat facilis modi, ea praesentium vero quas. Ipsum quas sapiente libero numquam dicta hic sit perferendis.</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
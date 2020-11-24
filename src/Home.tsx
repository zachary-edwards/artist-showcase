import React, { useEffect, useState } from 'react'
import ProfileCard from './components/ProfileCard'
import kendrick from './assets/kendrick.jpg'
import dababy from './assets/dababy.jpg'
import megan from './assets/meganstallion.jpg'
import travis from './assets/travis-scott.jpg'
import classNames from 'classnames'

export default function Home(props: any) {
    const [showSideNav, setShowSideNav] = useState(false)

    const handleOnClick = (event: any) => {
        event.preventDefault()
        setShowSideNav(!showSideNav)
    }

    useEffect(() => {
        window.onscroll = () => {
            const titleHolder = document.getElementById('title-holder')
            const header = document.getElementById('header')

            if (!titleHolder) return
            if (!header) return

            const scrollFromTop = document.documentElement.scrollTop / 3
            
            if (80-scrollFromTop >= 20) {
                titleHolder.style.fontSize = `${80 - scrollFromTop}px`
                header.style.height = `${200 - scrollFromTop * 2.43}px`
            } else if (80-scrollFromTop < 0) {
                titleHolder.style.fontSize = '20px';
                header.style.height = '54.20px';
            }
        }
    }, [])

    return (
        <div className="container">
            <div id='header' className="header">
                <div id='title-holder' className="title-holder">
                    <div className="nav-open" onClick={handleOnClick}>
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
                    <span className="title" id="title">
                        App Name
                    </span>
                </div>
            </div>
            <div className={classNames('sidebar', { 'open': showSideNav })}>
                <div className="nav">
                    <div className="nav-list">

                        <div className="nav-close" onClick={handleOnClick}>
                            <i className="fas fa-times" style={{ fontSize: '25px' }}></i>
                        </div>

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
                {/* title could be omnibus? */}
                <div className="content">
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
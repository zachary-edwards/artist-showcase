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
            const header = document.getElementById('title-holder')
            if (!header) return
            if (document.documentElement.scrollTop > 90) {
                const scrollFromTop = document.documentElement.scrollTop - 90 
                scrollFromTop > 10 ? header.style.fontSize = '20px' : header.style.fontSize = `${30 - scrollFromTop}px`
            } else {
                header.style.fontSize = "30px";
            }
        }
    }, [])

    return (
        <div className="container">
            <div className="header">
                <div className="nav-open" onClick={handleOnClick}>
                    <i className="fas fa-bars fa-lg"></i>
                </div>
                <div className="title-holder" id='title-holder'>
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
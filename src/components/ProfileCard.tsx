import React, { useState } from 'react'
import Avatar from './Avatar'
import Bio from './Bio'
import mtn from '../assets/mtn.jpg'

export default function ProfileCard(props: any) {
    const [hovering, setHovering] = useState(false)
    const onHover = (event: any) => {
        console.log('hovering')
    }

    console.log(mtn)
    return (
        <div className="row mb-3" style={{backgroundImage: `url(${mtn})`, backgroundPosition: 'center'}}>
            <div className={`col-md-6 col-md-offset-3 profile-card--container `}>
                <div className={`d-flex flex-row rounded profile-card ${hovering && 'profile-card-hover'}`}>
                    <Avatar odd={props.odd} onHover={() => setHovering(!hovering)} />

                    <Bio odd={props.odd} hovering={hovering} />
                </div>
            </div>
        </div>
    )
}
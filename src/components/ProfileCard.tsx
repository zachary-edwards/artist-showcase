import React from 'react'
import Avatar from './Avatar'
import Bio from './Bio'
import './ProfileCard.css'

export default function ProfileCard(props: any) {

    return (
        <div className="profile--container">
            <div className="profile--content">
                <Avatar image={props.image} />
                <Bio name={props.name} />
            </div>
        </div>
    )
}
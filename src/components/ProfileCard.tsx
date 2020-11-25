import React, { useState } from 'react'
import Avatar from './Avatar'
import Bio from './Bio'

export default function ProfileCard(props: any) {

    return (
        <div className="profile--container">
            <div className="profile--content">
                <div className='profile--card'>
                    <Avatar image={props.image} />

                    <Bio name={props.name} />
                </div>
            </div>
        </div>
    )
}
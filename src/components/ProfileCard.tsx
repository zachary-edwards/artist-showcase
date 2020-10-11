import React, { useState } from 'react'
import Avatar from './Avatar'
import Bio from './Bio'
import mtn from '../assets/mtn.jpg'

export default function ProfileCard(props: any) {

    return (
        <div className="profile--content">
            <div className='profile--card'>
                <Avatar />

                <Bio />
            </div>
        </div>
    )
}
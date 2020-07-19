import React, { useState } from 'react'
import Avatar from './Avatar'
import Bio from './Bio'

export default function ProfileCard(props: any) {
    const [hovering, setHovering] = useState(false)
    const onHover = (event: any) => {
        console.log('hovering')
    }
    return (
        <div className="row mb-3">
            <div className="col-md-6 col-md-offset-3">
                <div className="d-flex flex-row rounded profile-card">
                    <Avatar odd={props.odd} onHover={() => setHovering(!hovering)} />

                    <Bio odd={props.odd} hovering={hovering} />
                </div>
            </div>
        </div>
    )
}
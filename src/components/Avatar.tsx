import React, { useState } from 'react'
import image from '../assets/fb_prof_pic.jpg'

export default function Avatar (props: any) {
    const [hovering, setHovering] = useState(false)
    const handleMouseOver = (event: any) => {
        event.preventDefault()
        props.onHover(event)
        setHovering(!hovering)
    }

    return (
    <div className={`p-0 avatar ${hovering && 'avatar-hover'} ${props.odd && 'avatar-odd'} mr-2 ml-2`} onMouseOver={handleMouseOver}>
        <img src={image} alt='profilepicture' style={{width: '100%', height: '100%'}}/>
    </div>)
}
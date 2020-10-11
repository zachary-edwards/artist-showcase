import React from 'react'
import image from '../assets/kendrick.jpg'

export default function Avatar (props: any) {
    return (
    <div className={`p-0 avatar`}>
        <img src={image} alt='profilepicture' className='avatar'/>
    </div>)
}
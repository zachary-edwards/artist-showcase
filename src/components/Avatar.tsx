import './Avatar.css'
import React from 'react'

export default function Avatar (props: any) {
    return (
    <div className={`p-0`}>
        <img src={props.image} alt='profilepicture' className='avatar'/>
    </div>)
}
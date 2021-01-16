import './FeaturedProfile.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

export default function FeaturedProfile(props: any) {
    return (
        <div className="featured--profile">
            <div className="featured--profile--container">
                <div className="profile--card">
                    <Avatar image={props.image} />
                </div>
                <div className="featured--profile-bio">
                    <div className="featured--profile-header">
                        Kendrick Lamar
                    </div>
                    <div className="featured--profile-content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi at modi repellendus dolorum culpa adipisci sed. Adipisci, possimus officiis, provident quasi nemo quaerat dolorem dolor nihil quidem et, accusamus perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quam voluptates architecto, ratione ipsa aspernatur voluptatum, consectetur voluptatem beatae dignissimos quisquam aliquam minus cum qui explicabo fuga! Hic, corrupti voluptatibus.
                    </div>
                    <div className="bio--content">
                        <Link to='/artist' className="btn bio--btn" style={{color: 'black'}}>
                            <i className="far fa-user bio--icon"></i>
                                    Profile
                            </Link>
                        <Link to='/artist' className="btn bio--btn" style={{color: 'black'}}>
                            <i className="fas fa-play bio--icon"></i>
                                    Play
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
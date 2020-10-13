import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Bio(props: any) {

    return (
        <div className={classNames('bio')}>
            <div className='bio--name'>
                {props.name}
            </div>
            <div className="bio--content">
                <Link to='/artist' className="btn bio--btn">
                    <i className="far fa-user bio--icon"></i>
                        Profile
                </Link>
                <Link to='/artist' className="btn bio--btn">
                    <i className="fas fa-play bio--icon"></i>
                        Play
                </Link>
            </div>
        </div>
    )
}
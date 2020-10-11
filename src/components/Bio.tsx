import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Bio(props: any) {

    return (
        <div className={classNames('bio', 'slide-in')}>
            <div className='slide-in-content'>
                <p className="text-right m-0">
                    <Link to='/artist' className="btn btn-primary">
                        <i className="far fa-user"></i>
                        View Profile
                    </Link>
                </p>
            </div>
        </div>
    )
}
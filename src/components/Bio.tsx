import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Bio(props: any) {

    return (
        <div className={classNames('bio', 'slide-in', {'from-right': props.odd, 'from-left': !props.odd, 'show': props.hovering})}>
            <div className='slide-in-content'>
                <h4 className="text-primary">Zach Edwards</h4>
                <h5 className="text-info">Programmer</h5>
                <ul className="m-0 float-left" style={{ listStyle: 'none', margin: '0', padding: '0' }}>
                    <li> <a href='http://google.com'><i className="fab fa-facebook-square"></i></a> Facebook</li>
                    <li><a href='http://google.com'><i className="fab fa-twitter-square"> </i></a> Twitter</li>
                </ul>
                <p className="text-right m-0"><Link to='/artist' className="btn btn-primary"><i className="far fa-user"></i> View Profile</Link></p>
            </div>
        </div>
    )
}
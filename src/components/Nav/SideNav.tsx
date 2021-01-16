import './SideNav.css'
import classNames from 'classnames'
import React from 'react'

interface ISideNavProps {
    show: boolean,
    onClick: (event?: any) => void
}

export default function SideNav(props: ISideNavProps) {
    return (
        <div className={classNames('sidenav', { 'sidenav-show': props.show })}>
            <div className="sidenav-content">
                <div className="sidenav-list">
                    <div className="sidenav-close" onClick={props.onClick}>
                        <i className="fas fa-times" style={{ fontSize: '25px' }}></i>
                    </div>

                    <li>
                        <a href="">
                            Artists
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Zach
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Jake
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contact Us
                        </a>
                    </li>
                </div>
            </div>
        </div>
    )
}
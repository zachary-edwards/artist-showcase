import './SideNav.css'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to="/">
              Artists
            </Link>
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
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
        </div>
      </div>
    </div >
  )
}
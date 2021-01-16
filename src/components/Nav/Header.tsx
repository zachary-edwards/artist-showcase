import './Header.css'
import React, { useEffect } from 'react'

interface IHeaderProps {
  onClick: (event: any) => void
}

export default function Header(props: IHeaderProps) {
  useEffect(() => {
    window.onscroll = () => {
      const titleHolder = document.getElementById('title-holder')
      const header = document.getElementById('header')

      if (!titleHolder) return
      if (!header) return

      const scrollFromTop = document.documentElement.scrollTop / 3

      if (80 - scrollFromTop >= 20) {
        titleHolder.style.fontSize = `${80 - scrollFromTop}px`
        header.style.height = `${200 - scrollFromTop * 2.43}px`
      } else if (80 - scrollFromTop < 0) {
        titleHolder.style.fontSize = '20px';
        header.style.height = '54.20px';
      }
    }
  }, [])

  return (
    <div id='header' className="header">
      <div id='title-holder' className="title-holder">
        <div className="open-sidenav" onClick={props.onClick}>
          <i className="fas fa-bars fa-lg"></i>
        </div>
        <span className="title" id="title">
          App Name
                    </span>
      </div>
    </div>
  )
}
import React from 'react'

export default function Home(props: any) {

    return (
        <div className="parent">
            <div className="sidebar" contentEditable>
                This is some content
            </div>
            <div className="section purple" contentEditable>
                This is the main grid
            </div>
        </div>
    )
}
import React from 'react'

export default function Home(props: any) {

    return (
        <div className="container">
            <div className="sidebar">
                <div className="nav">
                    <div className="nav-list">
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
            <div className="main" contentEditable>
                <div className="content">
                    <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis quam assumenda iusto iure placeat facilis modi, ea praesentium vero quas. Ipsum quas sapiente libero numquam dicta hic sit perferendis.</div>
                    </div>
                    <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eum suscipit praesentium accusamus. Voluptatibus qui ipsa quam quas neque deserunt, nemo cumque culpa eum modi consequatur, minima officiis non iusto.</div>
                    </div>
                    <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eum suscipit praesentium accusamus. Voluptatibus qui ipsa quam quas neque deserunt, nemo cumque culpa eum modi consequatur, minima officiis non iusto.</div>
                    </div>
                    <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eum suscipit praesentium accusamus. Voluptatibus qui ipsa quam quas neque deserunt, nemo cumque culpa eum modi consequatur, minima officiis non iusto.</div>
                    </div>
                    <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi voluptatem odio saepe sed ipsam repellendus perferendis praesentium doloribus, quaerat aliquam ratione odit incidunt eius nulla sunt at totam eveniet.</div>
                    </div>
                    {/* <div className="profile--content">
                        <div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis quam assumenda iusto iure placeat facilis modi, ea praesentium vero quas. Ipsum quas sapiente libero numquam dicta hic sit perferendis.</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
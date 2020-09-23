import React from 'react'

export default function Home(props: any) {

    return (
        <div className="container">
            <div className="sidebar" contentEditable>
                This is some content
            </div>
            <div className="main" contentEditable>
                <div className='profile--card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit animi repudiandae qui maxime necessitatibus doloremque deserunt voluptatem et quo aliquam, minima nesciunt explicabo architecto! Consequatur numquam provident adipisci molestias?</div>
                <div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quis quam assumenda iusto iure placeat facilis modi, ea praesentium vero quas. Ipsum quas sapiente libero numquam dicta hic sit perferendis.</div>
                <div className='profile--card'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi voluptatem odio saepe sed ipsam repellendus perferendis praesentium doloribus, quaerat aliquam ratione odit incidunt eius nulla sunt at totam eveniet.</div>
                <div className='profile--card'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eum suscipit praesentium accusamus. Voluptatibus qui ipsa quam quas neque deserunt, nemo cumque culpa eum modi consequatur, minima officiis non iusto.</div>
            </div>
        </div>
    )
}
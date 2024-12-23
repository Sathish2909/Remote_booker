import React from 'react'
import "./Featured.css";


const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="/assets/hotel6.webp" alt="" className='featuredimg'/>
            <div className="featuredTitles">
                <h1>Chennai</h1>
                <h2>Novotel</h2>
            </div>
            
        </div>
        <div className="featuredItem">
            <img src="/assets/hotel7.webp" alt="" className='featuredimg'/>
            <div className="featuredTitles">
                <h1>Durban</h1>
                <h2>Novotel</h2>
            </div>
            
        </div>
        <div className="featuredItem">
            <img src="/assets/hotel3.webp" alt="" className='featuredimg'/>
            <div className="featuredTitles">
                <h1>Melbourne</h1>
                <h2>Crown</h2>
            </div>
            
        </div>
        <div className="featuredItem">
            <img src="/assets/hotel4.jpg" alt="" className='featuredimg'/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>Good Hotel</h2>
            </div>
            
        </div>
        <div className="featuredItem">
            <img src="/assets/hotel5.webp" alt="" className='featuredimg'/>
            <div className="featuredTitles">
                <h1>Maldives</h1>
                <h2>Resort</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Featured
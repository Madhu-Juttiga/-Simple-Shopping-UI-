

import React from 'react'

const Header = () => {
    return (
        <div className='HeaderSection'>
            <div className="left">
                <div className="title">
                    <h2>MS Fashions</h2>
                </div>
            </div>
            <div className="center">
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className="search">
                    <input type='text' placeholder='Search'/>
                </div>
            <div className="right">
                <div className="singin">
                    Singin / Singup
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>

        </div>
    )
}

export default Header
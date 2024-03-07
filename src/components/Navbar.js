import React from 'react';

const Navbar = () =>{
    return(
        <nav className='main-nav'>
            <div className='company--logo'>
                <img src='' alt="Sumit Mukharjee"/>
            </div>
            <div className='company-name'>
                <p>Developer Go🚀</p>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Conatcs</li>
                <li>My Resume</li>
            </ul>
        </nav>
    );
};

export default Navbar;
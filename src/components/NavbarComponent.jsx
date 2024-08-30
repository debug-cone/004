import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import logo from '../assets/logo.svg';

function NavbarComponent() {
    const [listItem, setListItem] = useState(['Home', 'About', 'Contact Us']);
    return (
    <header className='navbar'>
        <nav className='navbar_wrap'>
            <img 
                src={logo} alt="Logo" 
                className='navbar_img' 
            />

            <ul className='navbar_list'>
                {listItem.map((item, index) => (
                    <li className='navbar_list_item' key={index}>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="navbar_buttons">
                <ButtonComponent label = 'Login' />
                <ButtonComponent label = 'Register' />
            </div>
    </nav>
    </header>
    )
}

export default NavbarComponent
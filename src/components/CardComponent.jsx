import React, { useState } from 'react'
import img from '../assets/logo.svg'

function CardComponent( {price, title} ) {
    const [ cena, setCena ] = useState(price);
    const [ counter, setCounter ] = useState(0)

    function plusPrice () {
        setCena(cena + 50);
    }
    function minusPrice () {
        setCena(cena - 50)
    } 

    function plusCounter () {
        setCounter(counter + 1);
    }
    function minusCounter () {
        if(counter>1){
            setCounter(counter - 1);
        }
    } 

    return (
        <div className='card'>

            <h2 className='card_title'>
                {title}
            </h2>

            <img 
                src={img} 
                alt="IMG" 
                className='card_img'
            />

            <h3 className='card_price'>
                <button 
                className='card_price_btn'
                onClick={plusPrice}
                >
                    +50
                </button>
                    {cena}$
                <button className='card_price_btn' onClick={minusPrice}>
                    -50
                </button>
            </h3>

            <div className="card_counter">
                <button 
                className='card_counter_btn'
                onClick={plusCounter}>
                    +
                </button>
                    <p className='card_counter_num'>
                        {counter}
                    </p>
                <button 
                className='card_counter_btn'
                onClick={minusCounter}>
                    -
                </button>
            </div>
        </div>
    )
}

export default CardComponent
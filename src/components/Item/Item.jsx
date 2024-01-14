import React from 'react';
import './item.css';
import { NavLink } from 'react-router-dom';

export default function Item(props) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
    <div className='item'>
        <NavLink to={`/product/${props.id}`}><img onClick={scrollToTop} src={props.image} alt="" /></NavLink>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}$
            </div>
            <div className="item-price-old">
            {props.old_price}$
            </div>
        </div>
    </div>
    )
}


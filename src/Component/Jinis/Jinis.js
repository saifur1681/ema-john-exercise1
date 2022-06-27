import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Jinis.css'

const Jinis = (props) => {
    const { name, img, seller, price, stock } = props.jinis;



    return (
        <div className="jinis-container">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p><FontAwesomeIcon icon={faShoppingCart} /> by: {seller}</p>
                <h4>$ {price}</h4>
                <p>only {stock} available_ Order Now</p>
                <button onClick={() => props.handleClicked(props.jinis)} > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Jinis;
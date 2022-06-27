import React from 'react';

const Hisab = (props) => {
    const { hisab } = props;
    const total = hisab.reduce((previous, product) => previous + product.price, 0)
    // let total = 0;
    // for (const jinis of hisab) {
    //     total = total + jinis.price;
    // }
    const shipping = 15;

    const tax = (total + shipping) * .10

    const orderedTotal = shipping + tax + total;

    return (
        <div>

            <h2>Ordered Item: {hisab.length}</h2>
            <h5>total price without shipping and tax: {total.toFixed(2)}</h5>
            <h5>Shipping: {shipping}</h5>
            <h5>Tax: {tax}</h5>
            <h3>Ordered Total Price: {orderedTotal}</h3>

        </div>
    );
};

export default Hisab;
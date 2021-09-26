import React from 'react';
import './Listcart.css';

const Listcart = (props) => {

    return (
        <div className="listcart-container">
            <ul>
                <li>{props.name}</li>
            </ul>
        </div>
    );
};

export default Listcart;
import React from 'react';
import './Teacher.css';

const Teacher = (props) => {

    // object destructuring
    const {name, email, img, age, phone, salary} = props.teacher;

    return (

        // teachers-details show from here
        <div className="teacher-container">
            <div className="teachers-image">
                <img src={img} alt="" />
            </div>
            <div className="teachers-detail">
                <h4>Name: {name}</h4>
                <h6>Age: {age}</h6>
                <h5>Salary: ${salary}</h5>
                <p>Phone: {phone}</p>
                <p><small>{email}</small></p>
            </div>
            <div className="icons">
            <i className="fab social-icon fa-twitter"></i>
            <i className="fab social-icon fa-facebook-f"></i>
            <i className="fab social-icon fa-linkedin-in"></i>
            </div>

            {/* add to cart button */}
            <button 
            onClick={() => props.handleTeachersCart(props.teacher)}
            ><i className="fas fa-shopping-cart"></i> add to cart</button>
        </div>
    );
};

export default Teacher;
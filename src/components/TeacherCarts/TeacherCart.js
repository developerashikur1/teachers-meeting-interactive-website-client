import React from 'react';
import Listcart from '../Listcart/Listcart';
import './TeachersCart.css';

const TeacherCart = (props) => {
    const {teachers} = props;

    // loop on array
    let names = [];
    let total = 0;
    for(const teacher of teachers){
        total = total + teacher.salary;
        names.push(teacher.name);
    }
    
    return (
        <div className="teacherCart">
            <h2>Teachers added: <span className="cartLetter">{props.teacher}</span></h2>
            <h4>Total Salary: $<span className="cartLetter">{total}</span></h4>
            <h3>Teachers Name:</h3>
            {
                names.map(name => <Listcart name={name}></Listcart>)
            }
        </div>
    );
};

export default TeacherCart;
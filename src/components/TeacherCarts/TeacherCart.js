import React from 'react';
import './TeachersCart.css';

const TeacherCart = (props) => {
    const {teachers} = props;

    // loop on array
    let names = '';
    let total = 0;
    for(const teacher of teachers){
        total = total + teacher.salary;
        if(!names){
            names = teacher.name;
        }
        else{
            names = names +',  '+ teacher.name;
        }
        
    }
    

    return (
        <div className="teacherCart">
            <h2>Teachers added: <span className="cartLetter">{props.teacher}</span></h2>
            <h4>Total Salary: $<span className="cartLetter">{total}</span></h4>
            <p>Teachers Name: <span className="cartLetter">{names}</span></p>
        </div>
    );
};

export default TeacherCart;
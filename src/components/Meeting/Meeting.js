import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import TeacherCart from '../TeacherCarts/TeacherCart';
import './Meeting.css';

const Meeting = () => {

    // useStates
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState([]);

    // useEffects
    useEffect(() => {
        fetch('./teachers.JSON')
        .then (res => res.json())
        .then (data => setTeachers(data))
    },[]);

    // event handler
    const handleTeachersCart = (newTeacher) =>{
        if(!teacher.includes(newTeacher)){
            const newCart = [...teacher, newTeacher];
            setTeacher(newCart);
        }
        else{
            alert('already added in the cart!!!')
        }
    }


    return (
        <div className="meeting-container">

            {/* Teacher Section */}
            <div className="teachers-container">
                {
                    teachers.map(teacher => <Teacher handleTeachersCart={handleTeachersCart} key={teacher.id} teacher={teacher}></Teacher>)
                }            
            </div>

            {/* Counter section  */}
            <div className="counter-container">      
                <TeacherCart 
                teacher={teacher.length} 
                teachers={teacher}
                ></TeacherCart>          
            </div>
        </div>
    );
};

export default Meeting;
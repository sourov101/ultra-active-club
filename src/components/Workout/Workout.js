import React from 'react';
import './Workout.css'
const Workout = (props) => {
    console.log(props)
    const { picture, name, time, about, age } = props.exercise;
    return (
        <div className='workout-container'>
            <img src={picture} alt=""></img>
            <div className='info'>
                <h4>{name}</h4>
                <p>{about}</p>
                <p>For Age: {age}</p>
                <p>Time Required: {time}s</p>
            </div>
            <button>Add to list</button>
        </div>
    );
};

export default Workout;
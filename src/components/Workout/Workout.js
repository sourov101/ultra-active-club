import React from 'react';

const Workout = (props) => {
    console.log(props)
    const { picture, name, time, about, age } = props.exercise;
    return (
        <div>
            <img src={picture} alt=""></img>
            <h4>{name}</h4>
            <p>{about}</p>
            <h6>For Age: {age}</h6>
            <h6>Time Required: {time}</h6>

        </div>
    );
};

export default Workout;
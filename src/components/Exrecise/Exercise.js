import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Workout from '../Workout/Workout';
import './Exercise.css'
const Exercise = () => {
    const [exercises, setExercise] = useState([]);
    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, []);

    return (
        <div className='container'>
            <div className='exercise-container'>
                {
                    exercises.map(exercise => <Workout exercise={exercise}
                        key={exercise.id}
                    ></Workout>)
                }
            </div>
            <div className='activity-container'>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Exercise;
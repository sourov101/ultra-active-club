import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Workout from '../Workout/Workout';
import './Exercise.css';
import Question from '../Q&A/Question';

const Exercise = () => {
    const [exercises, setExercise] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);
    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, []);


    const addToList = (exercise) => {

        const newList = [...exerciseTime, exercise];
        setExerciseTime(newList);


    }

    return (
        <div className='container'>
            <div className='exercise-container'>
                {
                    exercises.map(exercise => <Workout exercise={exercise}
                        key={exercise.id}
                        addToList={addToList}
                    ></Workout>)
                }
            </div>
            <div className='activity-container'>
                <Activity exerciseTime={exerciseTime}></Activity>
            </div>
            <div>
                <Question></Question>
            </div>


        </div>
    );
};

export default Exercise;
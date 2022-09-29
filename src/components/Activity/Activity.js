import React, { useEffect, useState } from 'react';
import './Activity.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activity = (props) => {
    const { exerciseTime } = props;
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedTime = getStoredTime();
        setBreakTime(storedTime);

    }, [exerciseTime]);

    const addTen = (breakTimeValue) => {
        const newTime = breakTimeValue;
        setBreakTime(newTime);
        const key = 'Break-Time';
        localStorage.setItem(key, breakTimeValue);
    }
    const addTwenty = (breakTimeValue) => {
        const newTime = breakTimeValue;
        setBreakTime(newTime);
        const key = 'Break-Time';
        localStorage.setItem(key, breakTimeValue);
    }
    const addThirty = (breakTimeValue) => {
        const newTime = breakTimeValue;
        setBreakTime(newTime);
        const key = 'Break-Time';
        localStorage.setItem(key, breakTimeValue);
    }
    const addForty = (breakTimeValue) => {
        const newTime = breakTimeValue;
        setBreakTime(newTime);
        const key = 'Break-Time';
        localStorage.setItem(key, breakTimeValue);
    }
    const addFifty = (breakTimeValue) => {
        const newTime = breakTimeValue;
        setBreakTime(newTime);
        const key = 'Break-Time';
        localStorage.setItem(key, breakTimeValue);
    }


    const getStoredTime = (breakTimeValue) => {



        const storedCart = localStorage.getItem('Break-Time', breakTimeValue);

        return storedCart;
    }

    let time = 0;
    for (const exercise of exerciseTime) {
        time = time + exercise.time;
    }



    const notify = () => toast("Congratulation your activity is done!!!");


    return (
        <div className='activity-container'>
            <div >
                <h3>Mahmud Sourov</h3>
                <p>Jessore, Bangladesh</p>
                <div className='personal-info'>
                    <div className='weight'>
                        <h2>60<small>kg</small></h2>
                        <p>Weight</p>
                    </div>
                    <div className='height'>
                        <h2>5.7</h2>
                        <p>Height</p>
                    </div>
                    <div className='age'>
                        <h2>24<small>yrs</small></h2>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <div >
                <h3>Add a break</h3>

                <div className='break'>
                    <div>
                        <button onClick={() => addTen(10)}>10s</button>
                    </div>
                    <div>
                        <button onClick={() => addTwenty(20)}>20s</button>
                    </div>
                    <div>
                        <button onClick={() => addThirty(30)}>30s</button>
                    </div>
                    <div>
                        <button onClick={() => addForty(40)}>40s</button>
                    </div>
                    <div>
                        <button onClick={() => addFifty(50)}>50s</button>
                    </div>

                </div>
            </div>

            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p>Exercise Time: {time}s</p>
                </div>
                <div className='break-time'>
                    <p>Break Time: {breakTime}s</p>
                </div>
            </div>

            <button onClick={notify} className='activity-btn'>Activity Completed</button><ToastContainer />
        </div>
    );
};

export default Activity;
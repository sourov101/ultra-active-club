import React from 'react';
import './Activity.css'
const Activity = () => {
    return (
        <div>
            <div >
                <h3>Mahmud Sourov</h3>
                <p>Jessore, Bangladesh</p>
                <div className='personal-info'>
                    <div>
                        <h2>60<small>kg</small></h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>5.7</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>24<small>years</small></h2>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <div >
                <h3>Add a break</h3>

                <div className='break'>
                    <div>
                        <button>10s</button>
                    </div>
                    <div>
                        <button>20s</button>
                    </div>
                    <div>
                        <button>30s</button>
                    </div>
                    <div>
                        <button>40s</button>
                    </div>
                    <div>
                        <button>50s</button>
                    </div>

                </div>
            </div>

            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p>Exercise Time:</p>
                </div>
                <div className='break-time'>
                    <p>Break Time:</p>
                </div>
            </div>
        </div>
    );
};

export default Activity;
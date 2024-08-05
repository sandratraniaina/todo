import React from 'react';

import './App.css';

import Form from '../form/Form';

const App = () => {
    return (
        <div className='wrapper'>
            <h1>React basic To-do</h1>
            <div className='container'>
                <Form />
                <hr />
            </div>
        </div>
    )
};

export default App;

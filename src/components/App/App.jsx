import React from 'react';

import './App.css';

import Field from '../form/Field';

const App = () => {
    return (
        <>
            <div>
                <Field
                    name={"Hello"}
                    onChangeHandler={() => {
                        console.log("Hello World");
                    }}
                    title={"This is an input field"}
                    // defaultValue={"Hiii"}  
                    placeHolder={"Hi there"}
                />
            </div>
        </>
    )
};

export default App;

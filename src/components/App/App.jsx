import React from 'react';

import './App.css';

const App = () => {
    return (
        <div className='wrapper'>
            <header className='header'>Header</header>
            <main className='main'>
                <section className='task-column'>Task section 1</section>
                <section className='task-column'>Task section 2</section>
                <section className='task-column'>Task section 3</section>
            </main>
        </div>
    )
};

export default App;

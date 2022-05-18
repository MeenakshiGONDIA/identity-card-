import React, { useState } from 'react';
import './App.css';
import Card from './Card';



function App() {

    const [ename,setEname] = useState('Your Name');
    const [job,setJob] = useState('Your job titie');
    const [about,setAbout] = useState('Full-stack developers are experts in both the frontend and backend; so, the full-stack of technology that makes up a website. They are proficient in both frontend and backend languages and frameworks, as well as in server, network and hosting environments.');

  return (
    <div className="App">
      <header className="App-header">
        <Card ename={ 'Anik Acharjee' } job={ "Full Stack Developer" } about={ about }/>
        
      </header>
    </div>
  );
}

export default App;

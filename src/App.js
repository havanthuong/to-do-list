import "./App.css";
import React, { useState } from "react";

function App() {
  //get data from local storage - string and convert data to array
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    return storageJobs ?? [];
  });//
  const [inputJob, setInputJob] = useState('');

  const handleClick = () => {
    setJobs(pre => {
      const newJobs = [...pre, inputJob];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setInputJob('');
  };
  const handleDelete = (key) => {
    jobs.splice(key, 1);
    setJobs((prev) => {
      console.log(prev);
      const jsonJobs = JSON.stringify(prev);
      localStorage.setItem('jobs', jsonJobs);
      const storageJobs = JSON.parse(localStorage.getItem('jobs'));
      return storageJobs;
    });
  }
  const reset = () => {
    localStorage.removeItem('jobs');
    setJobs([]);
  }
  return (
    <div className="App">
      <input type="text" value={inputJob} onChange={e => setInputJob(e.target.value)} />
      <button type="submit" onClick={handleClick}>Add</button>
      <div className="">
        <ul>
          {jobs.map((value, index) => (
            <li key={index}>{value}<button onClick={() => handleDelete(index)}>X</button></li>
          ))}
        </ul>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

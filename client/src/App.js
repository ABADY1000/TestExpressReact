import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [apiResponse, setApiResponse] = useState("");

  // async function callAPI(){
  //   const response = await fetch("http://localhost:9000/testAPI");
  //   setApiResponse(response.text());
  // }

  function callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then((res)=>res.text())
      .then(res => setApiResponse(res));
  }

  useEffect(()=>{
    // async function callAPI(){
    //   const response = await fetch("http://localhost:9000/testAPI");
    //   setApiResponse(response.text());
    // }
    callAPI();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="App-intro">API:{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;

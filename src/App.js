import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
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
          Learn React with my-recapss
        </a>
       <div>
       <Tahsan name = 'JayedBro'></Tahsan>
        <Tahsan name = 'SaymonBro'></Tahsan>
        <Tahsan name = 'BappiBro'></Tahsan>
        <Tahsan name = 'RiazBro'></Tahsan>
        <Tahsan></Tahsan>
        <Counter> </Counter>
        <Users></Users>
        <Users></Users>

       </div>
      </header>
    </div>
  );
}


function Tahsan(props) {
  return (
    <div style={{color: 'white', backgroundColor: 'green',margin: '20px', padding: '20px', borderRadius: '20px'}}>
      <h3>My First Component</h3>
      <p>making some iconic person biography {props.name} </p>
    </div>
  )
}

 
 

function Counter(props) {
  const [count, setCount] = useState(5);
  // const non = button.map(x => x.button);
  const cc = () =>{
    setCount (count + 1)
  }
  const ccc = () =>{
    setCount (count - 1)
  }
  return ( 
    <div style={{backgroundColor: 'red', margin: '20px', padding: '20px', borderRadius: '20px'}}>
      <h4>Counting: {count}</h4>
      <button onClick={cc} nam = 'boltu' style={{margin: '10px', padding: '10px'}}>Countaup </button>
      <button onClick={ccc} style={{margin: '10px', padding: '10px'}}>Countdown  </button>
    </div>
  )
  
}

function Users() {
  const [users, name] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => name(data));
  }, [])
  return (
    <div style={{backgroundColor: 'orange', margin: '20px', padding: '20px', borderRadius: '20px'}}>
      <h3>Dynamic Users </h3>
      <ul>
        {
          users.map(n => <li>{n.email}</li>)
        }
      </ul>
    </div>
  )
  
}

export default App;

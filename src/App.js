import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

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
          Learn React with my-recaps
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
        <MrChoplu></MrChoplu>
        <CountryList></CountryList>

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

function MrChoplu () {
  const [chuppu, pressident] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => pressident(data))
  })
  return (
    <div style={{backgroundColor: 'grey', padding: '15px', margin: '20px',borderRadius: '12px', color: ''}}>
        <p> This is our new president mr choplus Biography{chuppu.length} </p>
        <ul>
          {
            chuppu.map(cc =><li>{cc.email} </li> )
          }
        </ul>
    </div>
  )
}

const CountryList = () => {
  const data = [
    {
      name: {
        common: 'Jordan',
        official: 'Hashemite Kingdom of Jordan',
        nativeName: {
          ara: {
            official: 'المملكة الأردنية الهاشمية',
            common: 'الأردن'
          }
        }
      },
      tld: '.jo',
      population: 10203140,
      flag: 'https://example.com/flag.jpg',
      area: 89342
    }
    // Add more country objects here if needed
  ];

  return (
    <div style={{backgroundColor: 'green', padding: '15px', margin: '20px',borderRadius: '12px', color: 'red'}}>
      <h1>Country List</h1>
      <ul>
        {data.map((country, index) => (
          <li key={index}>
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <img src={country.flag} alt="Flag" />
            <p>Area: {country.area}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


 

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

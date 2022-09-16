import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const url = 'https://api.randomuser.me/'
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [pic, setPic] = useState(null)

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data['results'][0]['name']['first'])
      setFirstName(data['results'][0]['name']['first'])
      setLastName(data['results'][0]['name']['last'])
      setPic(data['results'][0]['picture']['large'])
    })
  }, [])


  if (url) {
    return (
      <div>
        <h1>Every time you refresh the page you will see a different first and last name and picture.</h1>
        <h2>{firstName} {lastName}</h2>
        <img src={pic}></img>
      </div>
    );
  }

  return (
    <div>
    </div>
  );
}

export default App;
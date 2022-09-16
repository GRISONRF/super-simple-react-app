import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const url = 'https://api.randomuser.me/'
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [pic, setPic] = useState(null)
  const [email, setEmail] = useState(null)


  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data['results'][0])
      setFirstName(data['results'][0]['name']['first'])
      setLastName(data['results'][0]['name']['last'])
      setEmail(data['results'][0]['email'])
      setPic(data['results'][0]['picture']['large'])
    })
  }, [])


  if (url) {
    return (
      <div>
        <h1>Every time you refresh the page you will see a different first name, last name, email  and picture.</h1>
        <h2>{firstName} {lastName}</h2>
        <h2>{email}</h2>
        <img alt='picture' src={pic}></img>
      </div>
    );
  }

  return (
    <div>
    </div>
  );
}

export default App;
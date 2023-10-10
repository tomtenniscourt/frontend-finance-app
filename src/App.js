import './App.css';
import { getAllUsers } from './APIs/UserAPIs';
import { useEffect } from 'react';

function App() {

useEffect(() => {
  getAllUsers()
    .then(data => console.log('User data: ', data))
    .catch(error => console.log('getAllUsers error: ', error))
}, [])

  return (
    <div className="App">
     <p>hello world</p>
    </div>
  );
}

export default App;

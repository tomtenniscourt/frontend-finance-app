import './App.css';
import { getAllUsers } from './APIs/UserAPIs';
import { useEffect, useState } from 'react';

function App() {

const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
      .then(data => {
        console.log('User data: ', data);
         setUsers(data)}
         )
      .catch(error => console.log('getAllUsers error: ', error))
  }, [])
  
  return (
    <div className="App">
     <p>hello world</p>
{users.map((user) => (
  <div key={user.id} style={{display: "inline-flex", margin: "10px"}}> 
  <p >{user.name}</p>
  <p>{user.email}</p>
</div>
))}

    </div>
  );
}

export default App;

import './App.css';
import { createUser, getAllUsers } from './APIs/UserAPIs';
import { useEffect, useState } from 'react';

function App() {

const [users, setUsers] = useState([])
const [formInput, setFormInput] = useState({
  name: "",
  email: ""
})
console.log('formInput', formInput)

  useEffect(() => {
    getAllUsers()
      .then(data => {
        console.log('User data: ', data);
         setUsers(data)}
         )
      .catch(error => console.log('getAllUsers error: ', error))
  }, [])
  

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    console.log('forminput before call', formInput)
    await createUser(formInput)
  } catch (err) {
    console.error(err)
  }
  // finally {
  //   setFormInput({
  //     name: "",
  //     email: ""
  //   })
  // }
}

  return (
    <div className="App">
     <p>hello world</p>
{users.map((user, index) => (
  <div key={index} style={{display: "inline-flex", margin: "10px"}}> 
  <p>{user.name}</p>
  <p>{user.email}</p>
</div>
))}

<form onSubmit={handleSubmit}>

<input
type="text"
label="name"
value={formInput.name}
name="name"
onChange={handleChange}
placeholder="name"
>

</input>

<input
type="text"
label="email"
value={formInput.email}
name="email"
onChange={handleChange}
placeholder="email"

>
</input>

<button type='submit'>Submit</button>
</form>

    </div>
  );
}

export default App;

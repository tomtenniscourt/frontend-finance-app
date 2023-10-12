import './App.css';
import { createUser, getAllUsers, getOneUser } from './APIs/UserAPIs';
import { useEffect, useState } from 'react';

function App() {

const [users, setUsers] = useState([])
const [formInput, setFormInput] = useState({
  firstname: "",
  lastname: "",
  email: ""
})
console.log('formInput', formInput)

getOneUser("652554d6967339c86b385ac2")
.then((data) => console.log(data))
.catch((err) => console.log(err))

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
  <p>{user.firstname}</p>
  <p>{user.lastname}</p>
  <p>{user.email}</p>
</div>
))}

<form onSubmit={handleSubmit}>

<input
type="text"
label="firstname"
value={formInput.firstname}
name="firstname"
onChange={handleChange}
placeholder="firstname"
>

</input>

<input
type="text"
label="lastname"
value={formInput.lastname}
name="lastname"
onChange={handleChange}
placeholder="lastname"
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


<button onClick={getOneUser}>Get One User!</button>
    </div>
  );
}

export default App;

import './App.css';
import { createUser, deleteOneUser, getAllUsers, getOneUser, updateOneUser } from './APIs/UserAPIs';
import { useEffect, useState } from 'react';

function App() {

const [users, setUsers] = useState([])
const [formInput, setFormInput] = useState({
  firstname: "",
  lastname: "",
  email: ""
})
console.log('formInput', formInput)

const handleGetOneUser = () => {
  getOneUser("652554d6967339c86b385ac2")
.then((data) => console.log(data))
.catch((err) => console.log(err))
}

const handleDeleteUser = () => {
  deleteOneUser("6527ba609a69076c56377cc9")
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
}

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
  finally {
    setFormInput({
      name: "",
      email: ""
    })
  }
}

const handleUpdateSubmit = async (e) => {
  e.preventDefault()
  try {
    await updateOneUser("652554d6967339c86b385ac2",formInput)
  } catch (err) {
    console.error(err)
  }
}

  return (
    <div className="App">
     <p>hello world</p>
{users.map((user, index) => (
  <div key={index} style={{display: "inline-flex", margin: "10px"}}> 
  <p>{user.firstname}</p>
  <p>{user.lastname}</p>
  <p>{user.email}</p>
  <p>{user._id}</p>
</div>
))}

<form onSubmit={handleSubmit}>
<h2> Creating a user </h2>
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

<h2>Getting One User</h2>
<button onClick={handleGetOneUser}>Get One User!</button>

<h2>Updating one user</h2>
<form onSubmit={handleUpdateSubmit}>
<input
type="text"
label="firstname"
value={formInput.firstname}
name="firstname"
onChange={handleChange}
placeholder="firstname"
></input>
<button type='submit'>Update User</button>
</form>


<h2>Deleting One User</h2>
<button onClick={handleDeleteUser}>Delete One User</button>

    </div>
  );
}

export default App;

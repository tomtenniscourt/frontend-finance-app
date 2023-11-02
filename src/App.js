import './App.css';
import { createUser, deleteOneUser, getAllUsers, getCurrentUser, updateOneUser } from './APIs/UserAPIs';
import { useEffect, useState } from 'react';
import Login from './UserLogIn';
import CheckAccessTokenExpiry from './Auth/CheckAccessExpiry';
import checkAccessToken from './Auth/CheckAccessExpiry';

function App() {

const [users, setUsers] = useState([])
const [userId, setUserId] = useState([])
const [testToggle, setTestToggle] = useState(false)
const [formInput, setFormInput] = useState({
  firstname: "",
  lastname: "",
  email: "",
  password: ""
})
console.log('formInput', formInput)

const handleGetOneUser = () => {
  getCurrentUser("652676a7db284fe975366ea0")
.then((data) => console.log(data))
.catch((err) => console.log(err))
}

const handleDeleteUser = () => {
  deleteOneUser("652676a7db284fe975366ea0")
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
}

  useEffect(() => {
    // getAllUsers()
    //   .then(data => {
    //     console.log('User data: ', data);
    //      setUsers(data)}
    //      )
    //   .catch(error => console.log('getAllUsers error: ', error))

    <CheckAccessTokenExpiry userId={userId} />
  }, [testToggle])
  

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
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    })
  }
}

const handleUpdateSubmit = async (e) => {
  e.preventDefault()
  try {
    await updateOneUser("652676a7db284fe975366ea0",formInput)
  } catch (err) {
    console.error(err)
  }
}

const x = () => {  
  getAllUsers()
    .then(data => setUsers(data))
    .catch(e => console.log('error: ', e))
}

console.log('Toggle: ', testToggle)
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

<button onClick={() => setTestToggle(prevState => !prevState)}>TOGGLE</button>

<div>
  { <Login setUserId={setUserId} /> }
</div>

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

<input
type="text"
label="password"
value={formInput.password}
name="password"
onChange={handleChange}
placeholder="password"

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

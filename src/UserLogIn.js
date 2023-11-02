import { logUserIn } from "./APIs/UserAPIs"
import { useState } from "react"

export default function Login({setUserId}) {

const [formInput, setFormInput] = useState({
  email: "",
  password: ""
})

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
    await logUserIn(formInput)
    .then(data => setUserId(data.userId))
  } catch (err) {
    console.error(err)
  }
  finally {
    setFormInput({
      email: "",
      password: ""
    })
  }
}

    return (

<form onSubmit={handleSubmit}>

<h2> Log user in </h2>

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
    )
}
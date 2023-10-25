import React from 'react'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { dataBase } from '../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {
    const [ user, setUser ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState(false)
    const returnLogin = useNavigate();

    const handleError = (e) => {
        e.preventDefault()

        if (user == "" || password == "" ) {
            setError(true);
            return
        }
        setError(false);
        addUser()
        returnLogin('/login')
    }

    async function addUser () {
        let userCollection = collection(dataBase, 'users');
        let user1 = {user, password}
        await addDoc(userCollection, user1)
    }

  return (
    <section className='container-login'>
        <button><Link to="/login">Login</Link></button>
        <h1 color='white'>Register</h1>
        <section>
            <form onSubmit={handleError} className='login-form'>
                <label>User</label>
                <input type="text" placeholder='User' value={user} onChange={(e) => setUser(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" className='input-submit'/>
            </form>
        </section>
        {
            error && <p>Both fields must be filled out</p>
        }
    </section>
  )
}

export default Register
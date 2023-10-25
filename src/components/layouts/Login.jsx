import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { dataBase } from '../config/FirebaseConfig'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const returnHome = useNavigate();

    async function getUsers() {
        let usersCollection = collection(dataBase, "users");
        let data = await getDocs(usersCollection);
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getUsers();
    }, [])

    const handleError = (e) => {
        e.preventDefault()

        if (user == "" || password == "") {
            setError(true);
            return
        }
        users.map((usser) => {
            if (user == usser.user && password == usser.password) {
                returnHome('/')
            } else {
                setError(false)
                setError2(true)
            }
        })

        setError(false);
    }

    return (
        <section className='container-login'>
            <h1 color='white'>Login</h1>
            <section>
                <form onSubmit={handleError} className='login-form'>
                    <label>User</label>
                    <input type="text" placeholder='User' value={user} onChange={(e) => setUser(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" className='input-submit'/>
                </form>
            </section>
            <button><Link to="/register">Register</Link></button>
            {
                error && <p>Both fields must be filled out</p>
            }
            {
                error2 && <p>User or Password incorrect</p>
            }
        </section>
    )
}

export default Login
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { dataBase } from '../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

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
    <section className='form-main'>
    <section className='container-login'>
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
        <section className='login-form'>
            <section className='box'>
                <h1>Inicio de Sesión</h1>
                <form onSubmit={handleError} >
                    <input type="text" placeholder='Usuario' className='input-control' value={user} onChange={(e) => setUser(e.target.value)}/>
       
                    <input type="password" placeholder='Contraseña' className='input-control' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div class="input-link">
                            <a href="#" class="gradient-text">Has olvidado tu contraseña</a>
                    </div>
                    <input type="submit"className='btn'value='Ingresar'/>
                    <p>NO tienes cuenta <Link to="/register">Registrate</Link></p>
                </form>

            </section>
        </section>
    </section>
    </section>
    )
}

export default Login
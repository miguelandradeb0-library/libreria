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
    <section classname= 'form-main'>  
    <section className='container-login'>
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
        <section className='login-form'>
            <section className='box'>
                <h1>Registrate</h1>
                <form onSubmit={handleError} >
                    <input type="text" placeholder='Usuario' className='input-control' value={user} onChange={(e) => setUser(e.target.value)}/>
       
                    <input type="password" placeholder='Contraseña' className='input-control' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div class="input-link">
                           
                    </div>
                    <input type="submit" className='btn' value= 'Registrar'/>
                    <br/>
                    <p>Ya tienes cuenta <button className='Link'><Link to="/login">Inciar Sesión</Link></button></p>
                    <br /><br />
                    <p className='adv'>Ambos campos deben ser llenados</p>
                </form>

            </section>
            {
            error && <p>Both fields must be filled out</p>
        }
        </section>
       
    </section>
    </section> 

    
  )
}

export default Register
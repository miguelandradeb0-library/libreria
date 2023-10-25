import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/layouts/Home'
import LibrosGenero from './components/layouts/LibrosGenero'
import Contactanos from './components/layouts/Contactanos'
import Login from './components/layouts/Login'
import Register from './components/layouts/Register'
import Terror from './components/layouts/generos/Terror'
import Suspenso from './components/layouts/generos/Suspenso'
import Romance from './components/layouts/generos/Romance'
import Infantil from './components/layouts/generos/Infantil'
import Fantasia from './components/layouts/generos/Fantasia'
import Drama from './components/layouts/generos/Drama'
import Aventura from './components/layouts/generos/Aventura'
import Accion from './components/layouts/generos/Accion'

const router = createBrowserRouter([
{
  path: '/',
  element: <Home />
},
{
  path: '/libros',
  element: <LibrosGenero />
},
{
  path: '/contactanos',
  element: <Contactanos />
},
{
  path: '/login',
  element: <Login />
},
{
  path: '/register',
  element: <Register />
},
{
  path: '/terror',
  element: <Terror />
},
{
  path: '/suspenso',
  element: <Suspenso />
},
{
  path: '/romance',
  element: <Romance />
},
{
  path: '/infantil',
  element: <Infantil />
},
{
  path: '/fantasia',
  element: <Fantasia />
},
{
  path: '/drama',
  element: <Drama />
},
{
  path: '/aventura',
  element: <Aventura />
},
{
  path: '/accion',
  element: <Accion />
},
])

function App() {
  return (
    <section className='contenedor'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App

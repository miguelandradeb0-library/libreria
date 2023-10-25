import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/layouts/Home'
import LibrosGenero from './components/layouts/LibrosGenero'
import Contactanos from './components/layouts/Contactanos'
import Login from './components/layouts/Login'
import Register from './components/layouts/Register'

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
}
])

function App() {
  return (
    <section className='contenedor'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/layouts/Home'
import LibrosGenero from './components/layouts/LibrosGenero'
import Contactanos from './components/layouts/Contactanos'
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

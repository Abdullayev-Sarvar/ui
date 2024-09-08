import { useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./home/Home'))
const Register = lazy(() => import('./register/Register'))
const Students = lazy(() => import('./students/Students'))

const RoutesController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}>
        <Home />
      </Suspense>
    },
    {
      path: '/register',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}>
        <Register />
      </Suspense>
    },
    {
      path: '/students',
      element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}>
        <Students />
      </Suspense>
    }
  ])
}

export default RoutesController
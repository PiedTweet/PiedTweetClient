// import Home from './Home.jsx'
// import Login from './Login.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'
import LoginWithGoogle from './layouts/Login/LoginWithGoogle'
import ErrorPage from './layouts/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/login/oauth',
    element: <LoginWithGoogle />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default router

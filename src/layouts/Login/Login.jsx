import React, { useCallback, useContext } from 'react'
import LoginForm from '../../components/Login/LoginForm'
import RegisterForm from '../../components/Register/RegisterForm'
import Logo from '../../assets/twitter_logo.png'
import './Login.scss'
import CustomButton from '../../components/CustomButton/CustomButton'
import { callForgotPassword, callLogin, callRegister, loginWithGG } from './LoginService'
import DataContext from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { setCtx } = useContext(DataContext)
  const [useLogin, setUseLogin] = React.useState(true)
  const nav = useNavigate()
  // let [userLoginInfo, setUserLoginInfo] = useState({});

  const handleGGLogin = () => {
    loginWithGG()
  }

  const handleChangeFunc = useCallback(() => {
    setUseLogin((useLogin) => !useLogin)
  }, [])

  const login = useCallback(async (userLoginInfo) => {
    const data = await callLogin(userLoginInfo)
    setCtx({ auth: data.result })
    nav('/')
  }, [])

  const forgotPassword = useCallback(async (userForgotPasswordInfo) => {
    const data = await callForgotPassword(userForgotPasswordInfo)
    console.log(data)
  }, [])

  const register = useCallback(async (userRegisterInfo) => {
    const data = await callRegister(userRegisterInfo)
    setCtx({ auth: data.result })
    nav('/')
  }, [])

  return (
    <div className='Login'>
      <div className='login__logo_container'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='login__content'>
        <h1>{useLogin ? 'Login' : 'Register'}</h1>
        {useLogin ? (
          <LoginForm login={login} forgotPassword={forgotPassword} />
        ) : (
          <RegisterForm register={register} />
        )}
        <div className='login__content-line-break'></div>
        <CustomButton
          text={useLogin ? 'Create New Account' : 'Already Have Account?'}
          style={{ background: '#42B72A' }}
          onClick={handleChangeFunc}
        />
        <div className='login__content-line-break'></div>
        <CustomButton
          text='Countinue with Google'
          style={{ background: '#4285F4' }}
          onClick={handleGGLogin}
        />
      </div>
    </div>
  )
}

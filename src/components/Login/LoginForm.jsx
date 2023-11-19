import React, { useCallback } from 'react'
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './LoginForm.scss'
import CustomButton from '../CustomButton/CustomButton'

export default function LoginForm({ login, forgotPassword }) {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const [isForgotPassword, setIsForgotPassword] = React.useState(false)

  let [email, setEmail] = React.useState('')
  let [password, setPassword] = React.useState('')

  const handleLogin = useCallback(() => {
    login({ email, password })
  }, [email, password, login])

  const handleForgotPassword = useCallback(() => {
    forgotPassword(email)
  }, [email, forgotPassword])

  return (
    <>
      {!isForgotPassword ? (
        <Box
          className='LoginForm'
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '100%' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            // sx={{ width: "10rem" }}
            onKeyUp={(e) => setEmail(e.target.value)}
          />
          <FormControl sx={{ m: 1, width: '25ch', required: true }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              autoComplete='off'
              type={showPassword ? 'text' : 'password'}
              onKeyUp={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <CustomButton text='Login' style={{ background: '#1877F2' }} onClick={handleLogin} />
        </Box>
      ) : (
        <div className='ForgotPasswordForm'>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            sx={{
              m: 1,
              width: '100%'
            }}
            onKeyUp={(e) => setEmail(e.target.value)}
          />
          <CustomButton
            text='Reset Password'
            style={{ background: '#1877F2' }}
            onClick={handleForgotPassword}
          />
        </div>
      )}
      <span
        className='forgotPassword'
        onClick={() => {
          setIsForgotPassword(!isForgotPassword)
        }}
      >
        {isForgotPassword ? 'Back to Login' : 'Forgot Password?'}
      </span>
    </>
  )
}

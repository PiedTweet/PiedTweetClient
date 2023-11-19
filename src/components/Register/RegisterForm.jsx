import React, { useState } from 'react'
import { Day, Month, Year } from '../../constants/Date'
import {
  Autocomplete,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './RegisterForm.scss'
import CustomButton from '../CustomButton/CustomButton'
// import DatePicker from "../DatePicker/DatePicker";

export default function RegisterForm({ register }) {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirm_password, setConfirmPassword] = useState('')
  let [day, setDay] = useState('')
  let [month, setMonth] = useState('')
  let [year, setYear] = useState('')

  const handleRegister = () => {
    var date_of_birth = new Date(year, month.value, day)
    register({
      name,
      email,
      password,
      confirm_password,
      date_of_birth
    })
  }

  return (
    <Box
      className='RegisterForm'
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '100%' }
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='name'
        label='Name'
        variant='outlined'
        // sx={{ width: "10rem" }}
        onKeyUp={(e) => setName(e.target.value)}
      />
      <TextField
        id='email'
        label='Email'
        variant='outlined'
        // sx={{ width: "10rem" }}
        onKeyUp={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ m: 1, width: '25ch', required: true }} variant='outlined'>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <OutlinedInput
          id='password'
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
      <FormControl sx={{ m: 1, width: '25ch', required: true }} variant='outlined'>
        <InputLabel htmlFor='confirm-password'>Confirm Password</InputLabel>
        <OutlinedInput
          id='confirm-password'
          autoComplete='off'
          type={showPassword ? 'text' : 'password'}
          onKeyUp={(e) => setConfirmPassword(e.target.value)}
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
          label='Confirm Password'
        />
      </FormControl>
      {/* <div className="date_picker">
        <label htmlFor="dob__picker">Date of Birth</label>
        <input
          type="date"
          id="dob__picker"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div> */}
      {/* <DatePicker label="Date Of Birth" onDateChange={handleDateChange} /> */}
      <div className='date_of_birth_picker'>
        <span>Date Of Birth</span>
        <div className='date_picker__input'>
          <Autocomplete
            disablePortal
            id='day'
            options={Day}
            sx={{ fullWidth: true }}
            onChange={(event, newValue) => {
              setDay(newValue)
            }}
            renderInput={(params) => <TextField {...params} label='Day' />}
          />
          <Autocomplete
            disablePortal
            id='month'
            options={Month}
            sx={{ fullWidth: true }}
            onChange={(event, newValue) => {
              setMonth(newValue)
            }}
            renderInput={(params) => <TextField {...params} label='Month' />}
          />
          <Autocomplete
            disablePortal
            id='year'
            options={Year}
            sx={{ fullWidth: true }}
            onChange={(event, newValue) => {
              setYear(newValue)
            }}
            renderInput={(params) => <TextField {...params} label='Year' />}
          />
        </div>
      </div>
      <CustomButton text='Register' style={{ background: '#1877F2' }} onClick={handleRegister} />
    </Box>
  )
}

import axios from 'axios'

export const callRegister = async (data) => {
  const { name, email, password, confirm_password, date_of_birth } = data
  try {
    const response = await axios.post(
      import.meta.env.VITE_REGISTER_URL,
      {
        name,
        email,
        password,
        confirm_password,
        date_of_birth
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}

export const callLogin = async (data) => {
  const { email, password } = data
  try {
    const response = await axios.post(
      import.meta.env.VITE_LOGIN_URL,
      {
        email,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}

export const loginWithGG = () => {
  const getGoogleAuthUrl = () => {
    const url = 'https://accounts.google.com/o/oauth2/v2/auth'
    const query = {
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      response_type: 'code',
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
      ].join(' '),
      prompt: 'consent',
      access_type: 'offline'
    }
    return `${url}?${new URLSearchParams(query)}`
  }
  const googleAuthUrl = getGoogleAuthUrl()
  window.location.href = googleAuthUrl
}

export const callForgotPassword = async (email) => {
  try {
    const response = await axios.post(
      import.meta.env.VITE_FORGOT_PASSWORD_URL,
      {
        email
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    )
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}

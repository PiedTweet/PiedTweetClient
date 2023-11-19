import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Login() {
  const [param] = useSearchParams()
  const navigate = useNavigate()
  useEffect(() => {
    const accessToken = param.get('access_token')
    const refreshToken = param.get('refresh_token')
    const new_user = param.get('new_user')
    const verify = param.get('verify')
    console.log({ accessToken, refreshToken, new_user, verify })

    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])
  return <div>Login</div>
}

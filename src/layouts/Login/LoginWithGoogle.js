import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import DataContext from '../../context/DataContext'

export default function LoginWithGoogle() {
  const { setCtx } = useContext(DataContext)
  const [params] = useSearchParams()
  const nav = useNavigate()
  useEffect(() => {
    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')
    const new_user = params.get('new_user')
    setCtx({
      auth: {
        access_token: accessToken,
        refresh_token: refreshToken,
        new_user
      }
    })
    nav('/')
  }, [params])
}

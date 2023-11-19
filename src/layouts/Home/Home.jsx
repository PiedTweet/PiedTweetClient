import DataContext from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'
import { callGetMe } from './HomeService'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import TagIcon from '@mui/icons-material/Tag'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import LogoPied from '../../assets/Logo pied.png'
import CustomButton from '../../components/CustomButton/CustomButton'
import './Home.scss'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const { ctx, setCtx } = useContext(DataContext)
  const nav = useNavigate()
  const [user, setUser] = useState({ name: null, avatar: null })

  const checkUser = async () => {
    if (!ctx?.auth?.access_token) {
      nav('/login')
    } else {
      const data = await callGetMe(ctx.auth.access_token)
      const userInfo = data.result
      console.log(userInfo)
      setCtx({ ...ctx, user: userInfo })
    }
  }

  // log out
  const logout = () => {
    setCtx({})
    nav('/login')
  }

  useEffect(() => {
    if (ctx.user) {
      setUser({ name: ctx.user.name, avatar: ctx.user.avatar })
    }
  }, [ctx.user])

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <div className='Home'>
      <div className='nav__container'>
        <div className='logo-container'>
          <img src={LogoPied} alt='logo' />
        </div>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='/' className='active'>
              <HomeOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <span>Home</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <TagIcon sx={{ fontSize: '2.5rem' }} />
              <span>Explore</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <NotificationsNoneIcon sx={{ fontSize: '2.5rem' }} />
              <span>Notifications</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <EmailOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <span>Messages</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <span>Bookmarks</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <FeaturedPlayListOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <span>Lists</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <AccountCircleOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <span>Profile</span>
            </a>
          </li>
          <li className='nav__item'>
            <a href='/'>
              <MoreVertOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <span>More</span>
            </a>
          </li>
        </ul>
        <CustomButton
          text='Tweet'
          style={{
            width: '100%',
            background: 'dodgerblue',
            borderRadius: '1.5rem'
          }}
        />
      </div>
      <div className='post__container'>
        <h1>Home</h1>
        <div style={{ height: '200vh' }} />
      </div>
      <div className='discover__container'>
        <CustomInput placeholder='Search Twitter' />
        {/* <CustomButton
          text="Log out"
          onClick={logout}
          style={{ background: "#42B72A" }}
        ></CustomButton> */}
      </div>
    </div>
  )
}

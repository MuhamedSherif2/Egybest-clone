import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './FireBase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import logo from '../assets/image/logo.png'

function Header() {
  const lists = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/List', name: 'My List' },
    { id: 3, path: '/Contact', name: 'Contact-Us' }
  ]
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth , (user) => {
      if(user){
        setAuthUser(user)
      }else{
        setAuthUser(null)
      }
    });
    return() => {
      listen();
    }
  }, [])
  const userSignOut = () => {
    signOut(auth).then(() => {
      alert('Sign Out Successfully')
    }).catch((err) => console.log(err))
  }
  return (
    <header className='bg-[#0f0a05] w-full fixed'>
      <div className='container mx-auto flex justify-between items-center py-5'>
        <img src={logo} alt="" />
        <ul className='flex items-center gap-10 text-white'>
          {
            lists.map((list) => (
              <li key={list.id}>
                <Link to={list.path} className='text-[22px] font-bold'>{list.name}</Link>
              </li>
            ))
          }
          <li>
            {authUser ?
              <div>
                <p>{`Hello ${authUser.email}`}</p>
                <button className='p-1 bg-white text-black' onClick={() => userSignOut()}>Log-Out</button>
              </div>
              :
              <Link to='/Login' className='text-[22px] font-bold'>Log-In</Link>
            }
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

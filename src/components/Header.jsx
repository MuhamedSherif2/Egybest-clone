import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './FireBase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from '../assets/image/logo.png'

function Header() {
  const lists = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/List', name: 'My List' },
    { id: 3, path: '/Contact', name: 'Contact-Us' }
  ]
  const [menu, setMenu] = useState(false)
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return () => {
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
        <ul className='hidden lg:flex items-center gap-10 text-white'>
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

        <ul className='lg:hidden' onClick={() => setMenu(!menu)}>
          {
            !menu ?
              <IoMdMenu className='text-white text-3xl cursor-pointer' />
              :
              <>
                <div className='fixed right-0 top-0 bg-[#000000] w-[300px] h-[100vh] transition-all duration-500'>
                  <IoClose className='text-white text-3xl mt-10 ml-5 cursor-pointer' />
                  <ul className='flex flex-col text-center my-10 gap-6 text-white'>
                    {lists.map((list) => (
                      <li key={list.id}>
                        <Link to={list.path} className='text-[22px] font-bold'>{list.name}</Link>
                      </li>
                    ))}
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
              </>
          }
        </ul>
      </div>
    </header>
  )
}

export default Header

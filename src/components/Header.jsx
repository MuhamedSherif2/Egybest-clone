import React from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  const lists = [
    {id:1 , path:'/' , name:'Home'},
    {id:2 , path:'/List' , name:'My List'},
    {id:3 , path:'/Login' , name:'Log in'}
  ]
  return (
    <header className='bg-black w-full fixed'>
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
        </ul>
      </div>
    </header>
  )
}

export default Header

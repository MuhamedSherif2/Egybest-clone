import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../components/FireBase'
import { useNavigate , Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signUp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail('');
        setPassword('');
        navigate('/')
      }).catch((err) => {
        alert('You Must Be To Reister Before Login')
        setEmail('');
        setPassword('');
        navigate('/singUp')
        console.log(err);
      })
  }
  return (
    <section className='w-full bg-[#0f0a05] pt-[100px] h-screen flex flex-col justify-center items-center'>
      <form onSubmit={signUp} className='w-full h-screen'>
        <table className='flex flex-col'>
          <thead className='flex justify-center mx-auto py-12'>
            <tr>
              <td>
                <h2 className='text-white text-[25px] font-bold'>Log-In to Your Account</h2>
              </td>
            </tr>
          </thead>
          
          <tbody className='w-[500px] m-auto'>
            <tr className='flex flex-col mdl:flex-row justify-between w-full mb-5'>
              <th>
                <label htmlFor="email" className='text-white text-[20px]'>E-mail</label>
              </th>
              <td>
                <input type="email"
                  value={email}
                  id='email'
                  placeholder='Please Enter Your E-mail'
                  onChange={(e) => setEmail(e.target.value)}
                  className='rounded p-1 w-[300px] mdl:w-[250px] outline-0 flex m-auto'
                />
              </td>
            </tr>
            <tr className='flex flex-col mdl:flex-row mdl:justify-between w-full mb-5'>
              <th>
                <label htmlFor="password" className='text-white text-[20px]'>Password</label>
              </th>
              <td>
                <input type="password"
                  value={password}
                  id='password'
                  placeholder='Confirm Your Password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='rounded p-1 w-[300px] mdl:w-[250px] outline-0 flex m-auto'
                />
              </td>
            </tr>
          </tbody>

          <tfoot className='flex justify-center mx-auto pt-8 w-[500px]'>
            <tr className='flex flex-col mdl:flex-row justify-evenly w-full mb-5'>
              <th>
                <input type='submit' className='bg-white flex m-auto rounded w-[220px] text-[20px] px-5 py-1 cursor-pointer transition duration-500 hover:bg-yellow-500 hover:text-white' value='Log in' />
              </th>
              <td>
                <Link to='/singUp' className='bg-white mt-3 flex m-auto w-[220px] mdl:mt-0 rounded text-[20px] px-5 py-1 cursor-pointer'>Create an Account</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </section>
  )
}

export default Login


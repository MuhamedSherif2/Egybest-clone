import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../components/FireBase'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fristPassword, setFristPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const signUp = (e) => {
    if (fristPassword !== confirmPassword) {
      alert('Check Your Password and try Again')
    } else {
      setPassword(fristPassword)
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate('/Login')
          setName('');
          setEmail('');
          setFristPassword('');
          setConfirmPassword('');
        }).catch((err) => {
          console.log(err);
        }
        )
    }
  }
  return (
    <section className='w-full bg-[#0f0a05] pt-[100px] h-screen flex flex-col justify-center items-center'>
      <form onSubmit={signUp} className=''>
        <table className='flex flex-col'>
          <thead className='flex justify-center mx-auto pb-12'>
            <tr>
              <td>
                <h2 className='text-white text-[25px] font-bold'>Create an Account</h2>
              </td>
            </tr>
          </thead>
          <tbody className='w-[500px]'>
            <tr className='flex flex-row justify-between w-full mb-5'>
              <th>
                <label htmlFor="name" className='text-white text-[20px]'>Name</label>
              </th>
              <td>
                <input type="text"
                  value={name} id='name'
                  placeholder='Please Enter Your Name'
                  onChange={(e) => setName(e.target.value)}
                  className='rounded p-1 w-[250px] outline-0'
                />
              </td>
            </tr>

            <tr className='flex flex-row justify-between w-full mb-5'>
              <th>
                <label htmlFor="email" className='text-white text-[20px]'>E-mail</label>
              </th>
              <td>
                <input type="email"
                  value={email}
                  id='email'
                  placeholder='Please Enter Your E-mail'
                  onChange={(e) => setEmail(e.target.value)}
                  className='rounded p-1 w-[250px] outline-0'
                />
              </td>
            </tr>

            <tr className='flex flex-row justify-between w-full mb-5'>
              <th>
                <label htmlFor="password" className='text-white text-[20px]'>Password</label>
              </th>
              <td>
                <input type="password"
                  value={fristPassword}
                  id='password'
                  placeholder='Please Enter Your Password'
                  onChange={(e) => setFristPassword(e.target.value)}
                  className='rounded p-1 w-[250px] outline-0'
                />
              </td>
            </tr>

            <tr className='flex flex-col mdl:flex-row mdl:justify-between w-full mb-5'>
              <th>
                <label htmlFor="confirm" className='text-white text-[20px]'>Confirm Password</label>
              </th>
              <td>
                <input type="password"
                  value={confirmPassword}
                  id='confirm'
                  placeholder='Confirm Your Password'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='rounded p-1 w-[250px] outline-0'
                />
              </td>
            </tr>
          </tbody>

          <tfoot className='flex justify-center mx-auto pt-12'>
            <tr>
              <td>
                <input type='submit' className='bg-white rounded text-[20px] px-5 py-1 cursor-pointer' value='Sign Up' />
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </section>
  )
}

export default Register

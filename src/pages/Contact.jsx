import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // sent me
        emailjs.sendForm('service_pnzuub9', 'template_b1n5wwt', form.current, 'bB9ZS1rk08frkzuzN').then(() => { alert('Your message has been sent successfully') },);
        // sent clinet
        emailjs.sendForm('service_pnzuub9', 'template_w5qor3u', form.current, 'bB9ZS1rk08frkzuzN')
    };
    return (
        <section className='w-full bg-[#0f0a05] pt-[100px] h-screen flex flex-col justify-center items-center'>
            <form ref={form} onSubmit={sendEmail}>
                <table className='flex flex-col'>
                    <thead className='flex justify-center mx-auto pb-12'>
                        <tr>
                            <td>
                                <h2 className='text-white text-[25px] font-bold'>Log-In to Your Account</h2>
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
                                    id='name'
                                    placeholder='Please Enter Your Name'
                                    className='rounded p-1 w-[250px] outline-0'
                                />
                            </td>
                        </tr>
                        <tr className='flex flex-col mdl:flex-row mdl:justify-between w-full mb-5'>
                            <th>
                                <label htmlFor="email" className='text-white text-[20px]'>E-mail</label>
                            </th>
                            <td>
                                <input type="email"
                                    id='email'
                                    placeholder='Entre Your E-mail'
                                    className='rounded p-1 w-[250px] outline-0'
                                />
                            </td>
                        </tr>

                        <tr className='flex flex-col mdl:flex-row mdl:justify-between items-center w-full mb-5'>
                            <th>
                                <label htmlFor="Message" className='text-white text-[20px]'>Message</label>
                            </th>
                            <td>
                                <textarea name="message" className='rounded p-1 w-[250px] outline-0' />
                            </td>
                        </tr>
                    </tbody>

                    <tfoot className='flex justify-center mx-auto pt-8 w-[500px]'>
                        <tr className='flex flex-row justify-evenly w-full mb-5'>
                            <th>
                                <input type='submit' className='bg-white rounded text-[20px] px-5 py-1 cursor-pointer transition duration-500 hover:bg-yellow-500 hover:text-white' value='Send' />
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </section>
    );
}

export default Contact


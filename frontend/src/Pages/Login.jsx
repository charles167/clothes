import React, { useContext, useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [formState, setFormState] = useState('Sign Up'); // Fixed state naming
  const { setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (formState === 'Sign Up') {
        // Handle user registration
        const response = await axios.post(backendUrl +'/api/user/register', { name, email, password });
        console.log(response.data);
        if (response.data.success) {
          // Save token in localStorage and set it in context
          localStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          toast.success('Registration successful! Please log in.');
          setFormState('Login'); // Switch to login form after sign-up
        } else {
          toast.error(response.data.message);
        }

      } else {
        // Handle user login
        const response = await axios.post(backendUrl +'/api/user/login', { email, password });
        console.log(response.data);

        if (response.data.success) {
          // Save token in localStorage and set it in context
          localStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          toast.success('Login successful!');
          navigate('/'); // Redirect after successful login
        } else {
          toast.error(response.data.message || 'Login failed');
        }
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      toast.error('Password or email is incorrect');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl '>{formState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Conditional input for Name only for sign-up */}
      {formState === 'Sign Up' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}
      
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password?</p>
        {formState === 'Login' ? (
          <p onClick={() => setFormState('Sign Up')} className='cursor-pointer'>Create account</p>
        ) : (
          <p onClick={() => setFormState('Login')} className='cursor-pointer'>Login Here</p>
        )}
      </div>
      
      <button className='bg-black text-white font-light px-8 py-2 mt-4 '>
        {formState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;

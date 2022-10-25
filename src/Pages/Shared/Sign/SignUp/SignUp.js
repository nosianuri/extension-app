import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import '../Sign.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const SignUp = (props) => {
  const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uodateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/signin');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/');
}
  

  return (
    <div className='sign'>
      <div className='auth-form-container'>
        <h2>Sign Up</h2>
        <form className='signup-form' onSubmit={handleRegister}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" placeholder='full Name' />
          <label htmlFor="email">email</label>
          <input type="email" placeholder='youremail@gmail.com' id='email' name='email' />
          <label htmlFor="password">password</label>
          <input type="password" placeholder='********' id='password' name='password' />
          <button className='button-form' type='submit'>Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/signup" className="signin" onClick={navigateRegister}>SignIn here.</Link></p>
        
        {/* <button className='link-btn' onClick={() => props.onFormSwitch('signin')}>Already have an account? SignIn here.</button> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUp;
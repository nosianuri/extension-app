import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Sign.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const SignIn = (props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/signup');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='sign'>
            <div className='auth-form-container'>
                <h2>Sign In</h2>
                <form className='signin-form' onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input ref={emailRef} type="email" placeholder='youremail@gmail.com' id='email' name='email' />
                    <label htmlFor="password">password</label>
                    <input ref={passwordRef} type="password" placeholder='********' id='password' name='password' />
                    <button className='button-form' type='submit'>Sign In</button>
                </form>
                {errorElement}
                <p>Don't have an account? <Link to="/signup" className="signin" onClick={navigateRegister}>SignUp here.</Link></p>
                <p>Forget Password? <button className='' onClick={resetPassword}>Reset Password</button></p>
                {/* <button className='link-btn' onClick={() => props.onFormSwitch('signup')}>Don't have an account? Register here.</button> */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignIn
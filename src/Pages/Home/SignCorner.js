import React, { useState } from 'react'
import SignIn from '../Shared/Navbar/SignIn/SignIn'
import SignUp from '../Shared/Navbar/SignUp/SignUp'

const SignCorner = () => {
    const [currentForm, setCurrentForm] = useState('signin');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
  return (
    <div className=''>
        {currentForm === "signin" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />}
    </div>
  )
}

export default SignCorner
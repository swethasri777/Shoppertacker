import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-final-form';
import { RotatingLines } from "react-loader-spinner"

import { HOME, SIGN_UP } from "../../constant/routes";


import InputField from '../Input/InputField';
import { composeValidators, required, validateEmail } from '../../utils/validations';


const SignInform = () => {
    const navigate = useNavigate();
    const [loaderVisible, setLoaderVisible] = useState(false);

    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmit = async (formData) => {
        setLoaderVisible(true)
        setTimeout(() => {

            setLoaderVisible(false)
            navigate(HOME.INDEX)
        }, 2000)
    }

    return (
        <div>
            <h2 className='m-3'> Sign In</h2>
            <p className='color-white'>Lets start your wonderful journey with deal dash!</p>
            <Form
                onSubmit={handleSubmit}
                render={({ handleSubmit, submitting }) => (
                    <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
                        <div className={`error ${errorMessage ? "" : "d-none"}`}>Invalid email or password</div>
                        <InputField name="email" label="Email" placeholder="Email*" validate={composeValidators(required, validateEmail)} type="text" />
                        <InputField
                            name="password"
                            label="Password"
                            placeholder="Password*"
                            validate={composeValidators(required)}
                            type="password"
                        />
                        <div className="buttons my-4">
                            <button className='sign-up-button' type="submit" disabled={submitting}>
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="20"
                                    visible={loaderVisible}
                                />
                                <span className='ms-3'>
                                    Sign In
                                </span>
                            </button>
                        </div>
                    </form>
                )}
            />
            <div className='m-3'>
                Don't have an account? <Link to={SIGN_UP.INDEX}> Sign up </Link>
            </div>
        </div>
    )
}

export default SignInform
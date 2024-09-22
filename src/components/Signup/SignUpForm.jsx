import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-final-form';
import { RotatingLines } from "react-loader-spinner"

import InputField from '../Input/InputField';
import { composeValidators, required, validateConfirmPassword, validateEmail, validatePassword } from '../../utils/validations';
import { HOME, SIGN_IN } from '../../constant/routes';

const SignUpform = () => {
    const [loaderVisible, setLoaderVisible] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (formData, form) => {
        setLoaderVisible(true)
        setTimeout(() => {

            setLoaderVisible(false)
            navigate(HOME.INDEX)
        }, 2000)
    };

    return (
        <div>
            <h2 className='m-3'> Sign Up</h2>
            <p className='color-white'>Lets start your wonderful journey with deal dash!</p>
            <Form
                onSubmit={handleSubmit}
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }}
                render={({ handleSubmit, submitting, values, form }) => (
                    <form onSubmit={event => handleSubmit(event, form)} className='d-flex flex-column align-items-center'>
                        <InputField dataId="name" name="name" label="Name" placeholder="Name*" validate={required} type="text" />
                        <InputField dataId="email" name="email" label="Email" placeholder="Email*" validate={composeValidators(required, validateEmail)} type="text" />
                        <InputField
                            dataId="password"
                            name="password"
                            label="Password"
                            placeholder="Password*"
                            validate={composeValidators(required, validatePassword)}
                            type="password"
                        />
                        <InputField
                            dataId="confirmation"
                            name="password_confirmation"
                            label="Password Confirmation"
                            placeholder="Password Confirmation*"
                            validate={composeValidators(required, value => validateConfirmPassword(value, values))}
                            type="password"
                        />
                        <div className="my-4">
                            <button className='sign-up-button' type="submit" disabled={submitting}>
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="20"
                                    visible={loaderVisible}
                                />
                                <span className='ms-3'>
                                    Sign Up
                                </span>

                            </button>
                        </div>
                    </form>
                )}
            />
            <div className='m-3'>
                Already have an account? <Link to={SIGN_IN.INDEX}>  Sign In </Link>
            </div>
        </div>
    );
};

export default SignUpform;
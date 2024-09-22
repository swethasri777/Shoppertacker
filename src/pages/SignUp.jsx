import React from 'react'

import Card from '../components/Card/Card'
import SignUpform from '../components/Signup/SignUpForm'

const SignUp = () => {
    return (
        <section className='d-flex align-items-center justify-content-center w-100 card-container'>
            <Card className="sign-up" >
                <div className='inner-div image'>
                    <img className='image-banner' src='https://www.creativefabrica.com/wp-content/uploads/2023/06/17/Animated-Cute-Baby-Giraffe-Pushing-A-Shopping-Cart-Children-Illustration-72298757-1.png' />
                </div>
                <div className='inner-div'>
                    <SignUpform />
                </div>
            </Card>
        </section>


    )
}

export default SignUp
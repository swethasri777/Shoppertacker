import React from 'react'

import SignInform from '../components/Signin/SignInForm'
import Card from '../components/Card/Card'

const SignIn = () => {
    return (
        <section className='d-flex align-items-center justify-content-center h-100 w-100 card-container'>
            <Card className="sign-up" >
                <div className='inner-div'>
                    <SignInform />
                </div>
                <div className='inner-div image'>
                    <img className='image-banner' src='https://www.creativefabrica.com/wp-content/uploads/2023/06/17/Animated-Cute-Baby-Giraffe-Pushing-A-Shopping-Cart-Children-Illustration-72298757-1.png' />
                </div>
            </Card>
        </section>

    )
}

export default SignIn
import React,{useState} from 'react'

function SignUp() {
    const [showSignUp, setShowSignUp] = useState(true)

    const handleClick = () => {
        setShowSignUp(false)
    }

    const handleClickOne = () => {
        setShowSignUp(true)
    }
    return (
        <div className='signUpDiv'>
            <form style={{padding: '5rem 5rem'}} className= 'signUpForm'>
                <div className="signUp" style={{display: showSignUp ? 'block' : 'none'}}>
                    <label>First name</label> <br />
                    <input type='text' placeholder= "What's your name?" className='button' />
                    <br />
                    <br />
                    <label>Other name</label> <br />
                    <input type='text' placeholder= "What other name do you have?" className='button' />
                    <br />
                    <br />
                    <label>Surname</label> <br />
                    <input type='text' placeholder= "What's your surname?" className='button' />
                    <br />
                    <br />
                    <label>Phone number</label> <br />
                    <input type='text' placeholder= "What's your number?" className='button' />
                    <br />
                    <br />
                    <label>Password</label> <br />
                    <input type='text' className='button' />
                    <br />
                    <br />
                    <label>Confirm Password</label> <br />
                    <input type='text' className='button' />
                </div>
                <div className="login" style={{display: showSignUp ? 'none' : 'block'}}>
                    <label>Email</label> <br />
                    <input type='text' className='button' />
                    <br />
                    <br />
                    <label>Password</label> <br />
                    <input type='text' className='button' />
                </div>
            </form>
            <div className="loginButton" onClick={handleClick} style={{display: showSignUp ? 'block' : 'none', cursor: 'pointer'}}>
                <h3 style={{color: '#fff', padding: '34rem 1rem'}}>Login</h3>
            </div>
            <div className="signUpButton" onClick={handleClickOne} style={{display: !showSignUp ? 'block' : 'none', cursor: 'pointer'}}>
                <h3 style={{color: '#fff', padding: '34rem 1rem'}}>Sign Up</h3>
            </div>
        </div>
    )
}

export default SignUp

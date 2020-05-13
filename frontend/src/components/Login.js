import React from 'react';

class Login extends React.Component {
    render() {
        return (
        <form className="Login">
            { /* comments and components must go in parent div*/ }
            <h2>Please login or register.</h2>
            <input type="text" required placeholder="Login Name"/>
            <button type="submit"Login>Enter</button>
        </form>
        )
    }
}

export default Login;
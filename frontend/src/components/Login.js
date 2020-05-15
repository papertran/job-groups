import React from 'react';
import '../tailwind.generated.css';

class Login extends React.Component {
    render() {
        return (
        <>

        <div class="flex h-screen inline">
            <div class="bg-gray-500 w-3/5 h-full">
                pee
            </div>

            <div class="bg-gray-200 w-2/5 h-full">
                poo
            </div>
        </div>


        <form class="w-full max-w-sm">
            <div class="flex items-center boder-b boder-b-2 border-teal-500 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full Name">
                </input>
                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Sign Up
                </button>
            </div>
        </form>
        <form className="Login">
            { /* comments and components must go in parent div*/ }
            <h2>Please login or register.</h2>
            <input type="text" required placeholder="Login Name"/>
            <button type="submit"Login>Enter</button>
        </form>
        </>
        )
    }
}

export default Login;
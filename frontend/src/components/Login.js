import React from 'react';
import '../tailwind.generated.css';

class Login extends React.Component {
    render() {
        return (
        <>

        <div class="flex h-screen inline">
            <div class="bg-gray-500 w-3/5 h-full">
                <h1 class="text-2xl font-mono font-bold p-20">Welcome to Job Groups!</h1>
                <p class="font-mono px-20">
                    Job groups is a web application meant to help people search for jobs
                    by helping others find new job postings which are asfgsvsvsdvdsksdkfnsddPEE.

                    <br/>

                    <img class="pt-20 pl-64 h-64" src={require('../images/clumsy.png')} alt="notfsadasduppypng"></img>
                </p>
                {/* <img class="p-20 object-contain" src={require('../images/clumsy.png')} alt="notfsadasduppypng"></img> */}
            </div>

            <div class="bg-gray-200 w-2/5 h-full">

                <form class="w-full max-w-sm p-32">

                    <div class="mb-4">
                        Username or email
                        <input class=""></input>
                    </div>

                </form>

            </div>
        </div>

        </>
        )
    }
}

export default Login;
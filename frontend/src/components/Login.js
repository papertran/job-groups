import React from 'react';
import '../tailwind.generated.css';

class Login extends React.Component {
    render() {
        return (
        <>

        <div class="flex h-screen inline">
            <div class="bg-mainpurple w-3/5 h-full">
                
                <h1 class="text-2xl font-mono font-bold pl-20 pt-12">
                    <img class="inline" src={require('../images/Logo.png')} alt="idk"></img>
                    <span class="pl-12">Welcome to Job Groups!</span>
                </h1>
                <p class="font-mono pl-20 pt-12 pr-12">
                    Job groups is a web application meant to help people search for jobs
                    by helping others find new job postings which are asfgsvsvsdvdsksdkfnsddPEE.

                    <br/>

                    <img class="pl-48 h-auto" src={require('../images/clumsy_w_jobs.png')} alt="notfsadasduppypng"></img>
                </p>
                {/* <img class="pt-8 pl-56 h-auto" src={require('../images/clumsy_w_jobs.png')} alt="notfsadasduppypng"></img> */}
            </div>

            <div class="bg-secpurple w-2/5 h-full">

                <form class="w-full max-w-lg items-center pl-48 pt-40">

                    <div class="flex items-center w-3/4 border-b border-darkpurple py-2">
                        <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-3/4" type="text" placeholder="Username or email"></input>
                    </div>

                    <div class="flex items-center w-3/4 border-b border-darkpurple py-2 pt-10">
                        <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-3/4" type="text" placeholder="Password"></input>
                    </div>

                    <div class="flex items-center justify-between w-3/4 py-2 pt-10">
                        <button class="bg-darkpurple2 hover:bg-secpurple text-white rounder" type="button">Sign in</button>
                    </div>

                </form>

            </div>
        </div>

        </>
        )
    }
}

export default Login;
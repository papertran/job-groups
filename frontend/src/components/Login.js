import React from 'react';
import '../tailwind.generated.css';
import Popup from './Popup';

class Login extends React.Component {
    
    //POPUP
    constructor(props) {
        super(props);
        this.state = { showPopup : false }
    }

    togglePopup() {
        this.setState({
            showPopup : !this.state.showPopup
        });
    }


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

                    <img class="pl-40 h-auto" src={require('../images/clumsy_w_jobs.png')} alt="notfsadasduppypng"></img>
                </p>
                {/* <img class="pt-8 pl-56 h-auto" src={require('../images/clumsy_w_jobs.png')} alt="notfsadasduppypng"></img> */}
            </div>

            <div class="bg-secpurple w-2/5 h-full">

                <form class="w-full max-w-lg items-center pl-48 pt-40">

                    <div class="flex items-center w-3/4 border-b border-darkpurple py-2">
                        <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-3/4" type="text" placeholder="Username or email"></input>
                    </div>

                    <div class="flex items-center w-3/4 border-b border-darkpurple py-2 pt-10">
                        <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-3/4" type="password" placeholder="Password"></input>
                    </div>

                    <div class="flex inline w-3/4 pt-10">
                        <button class="w-16 h-8 bg-darkpurple2 hover:bg-secpurple text-white rounded" type="button">Login</button>

                        <a class="w-2">  </a>

                        {/* POPUP */}
                        <button onClick={this.togglePopup.bind(this)} class="w-20 h-8 bg-mainpink hover:bg-secpurple text-white rounded" type="button">Sign up</button>
                        {/* POPUP */}

                        <button class="text-xs text-darkpurple2 font-bold" type="button">Forgot Password?</button>
                    </div>

                </form>

            </div>
        </div>

        {this.state.showPopup ? 
                        
            <Popup closePopup={this.togglePopup.bind(this)}/>
                                
            :
            null    
        }

        </>
        )
    }
}

export default Login;
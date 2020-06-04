import React from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={ showHideClassName }>

            <section className="modal-main">
                {/* { children } */}
                <img class="pt-8 pl-64" src={require('../images/Logo.png')} alt="logo"/>

                <input class="modalinput" type="text" placeholder="Email"/>
                <br/>
                <input class="modalinput" type="text" placeholder="Username"/>
                <br/>

                <input class="bg-darkpurple rounded w-1/4 h-10 mt-12 ml-32 pl-4" type="text" placeholder="First Name"/>
                <input class="bg-darkpurple rounded w-36 h-10 ml-4 pl-5" type="text" placeholder="Last Name"/>

                <input class="modalinput" type="password" placeholder="Password"/>
                <br/>
                <input class="modalinput" type="password" placeholder="Please enter password again"/>
                <br/>

                <button class="bg-mainpink w-40 h-12 ml-56 mt-8 mb-8 rounded">Register</button>

                <button onClick={ handleClose }>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;
import React, { useState } from 'react';

// Currently unused.
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none';

    const [registration, setRegistration] = useState({
        email: '',
        username: '',
        password1: '',
        password2: '',
    });

    return (
        <div className={showHideClassName}>
            <section className="flex flex-col items-center modal-main">
                {/* { children } */}
                <img
                    className="mt-6 mb-6"
                    src={require('../images/Logo.png')}
                    alt="logo"
                />

                <input
                    className="modalinput"
                    type="text"
                    placeholder="Email"
                    value={registration.email}
                    onChange={(event) =>
                        setRegistration({
                            ...registration,
                            email: event.target.value,
                        })
                    }
                />
                <input
                    className="modalinput"
                    type="text"
                    placeholder="Username"
                    value={registration.username}
                    onChange={(event) =>
                        setRegistration({
                            ...registration,
                            username: event.target.value,
                        })
                    }
                />

                {/* <div className=""> */}
                <input
                    className="modalinput"
                    // className="bg-darkpurple rounded p-2"
                    type="text"
                    placeholder="First Name"
                />
                <input
                    className="modalinput"
                    // className="bg-darkpurple rounded p-2"
                    type="text"
                    placeholder="Last Name"
                />
                {/* </div> */}

                <input
                    className="modalinput"
                    type="password"
                    placeholder="Password"
                    value={registration.password1}
                    onChange={(event) => console.log(event)}
                />
                <input
                    className="modalinput"
                    type="password"
                    placeholder="Please enter password again"
                    value={registration.password2}
                    onChange={(event) => console.log(event)}
                />

                <button
                    className="bg-mainpink w-24 h-10 rounded mt-4"
                    onClick={(event) => console.log(event)}
                >
                    Register
                </button>

                <button onClick={(event) => console.log(event)}>Close</button>
            </section>
        </div>
    );
};

export default Modal;

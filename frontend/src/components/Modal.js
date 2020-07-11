import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

    const USER_INFO = gql`mutation {
        register(
            email: "${registration.email}", 
            username: "${registration.username}", 
            password1: "${registration.password1}", 
            password2: "${registration.password2}"
        ) {
          success
          errors
          token
          refreshToken
        }
      }
      `;

    const [addUser] = useMutation(USER_INFO);

    // console.log(registration);

    return (
        <div className={showHideClassName}>
            <section className="flex flex-col items-center modal-main">
                {/* { children } */}
                <img
                    className="mt-4 mb-4"
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

                <div className="flex-initial">
                    <input
                        className="bg-darkpurple rounded p-2"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        className="bg-darkpurple rounded p-2"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>

                <input
                    className="modalinput"
                    type="password"
                    placeholder="Password"
                    value={registration.password1}
                    onChange={(event) =>
                        setRegistration({
                            ...registration,
                            password1: event.target.value,
                        })
                    }
                />
                <input
                    className="modalinput"
                    type="password"
                    placeholder="Please enter password again"
                    value={registration.password2}
                    onChange={(event) =>
                        setRegistration({
                            ...registration,
                            password2: event.target.value,
                        })
                    }
                />

                <button className="" onClick={addUser}>
                    Register
                </button>

                <button
                    onClick={() => {
                        addUser();
                    }}
                >
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;

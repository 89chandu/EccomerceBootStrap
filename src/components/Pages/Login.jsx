import React, { useRef, useState } from "react";
import { Alert } from "@mui/material";
import axios from "axios";
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [sendingReq, setSendingReq] = useState(false);
    const [openalert, setOpenAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertMsg, setAlertMsg] = useState("");
    const [changePassword, setChangePassword] = useState(false); // New state
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const AuthHandler = async (obj) => {
        try {
            if (login) {
                console.log('wait login being called')
                setSendingReq(true);
                const response = await axios.post(`https://ecomreact-f6774-default-rtdb.firebaseio.com/users/login`, obj);
                localStorage.setItem('token', response.data.token);
                setSendingReq(false);
                setAlertSeverity('success');
                setAlertMsg(response.data.msg);
                window.location.href = '/Store'

            }
            else {
                console.log('signup being called');
                setSendingReq(true);
                const response = await axios.post(`https://ecomreact-f6774-default-rtdb.firebaseio.com/users/signup`, obj);
                setAlertSeverity('success');
                setAlertMsg(response.data.msg);
                setSendingReq(false);
                setLogin(true);
            }
        } catch (error) {
            console.log(error);
            setAlertSeverity('error');
            setSendingReq(false);
            setAlertMsg(error.response.data.msg);
        }
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false);
        }, 5000)
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        let SignUpObj = {};
        let LoginObj = {};
        if (!login) SignUpObj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        if (login) LoginObj = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        passwordRef.current.value = emailRef.current.value = "";
        if (!login) nameRef.current.value = "";
        login ? AuthHandler(LoginObj) : AuthHandler(SignUpObj);
    };

    const changePasswordHandler = async () => {
        const newPassword = passwordRef.current.value;

        try {
            const user = firebase.auth().currentUser;

            if (user) {
                await user.updatePassword(newPassword);

                // Display success message
                setAlertSeverity('success');
                setAlertMsg('Password changed successfully.');
                setOpenAlert(true);

                // Clear input fields
                passwordRef.current.value = '';

                // Exit change password mode
                setChangePassword(false);
            }
        } catch (error) {
            console.error(error);
            setAlertSeverity('error');
            setAlertMsg(error.message);
            setOpenAlert(true);
        }
    };

    return (
        <div className="mt-[30px] flex flex-col items-center " >
            {/* Your JSX code */}
            <div className="grid sm:grid-cols-2 sm:grid-rows-1 p-7 bg-gradient-to-r from-cyan-600 to-blue-500 ... ">
                <div className="bg-white p-5 flex flex-col justify-evenly">
                    {changePassword ? (
                        <div>
                            {/* Change password form */}
                        </div>
                    ) : (
                        <form className="  min-h-[400px] flex flex-col justify-evenly md:min-h-[500px] md:min-w-[400px]" action="" onSubmit={formSubmitHandler}>
                            {/* Your existing form code */}
                        </form>
                    )}

                    <div className="text-2xl p-2 text-center font-QuickSand " onClick={() => setLogin((state) => !state)}>
                        <button>{login ? 'New User??' : 'Already a member??'}
                            <p>Click Here</p></button>
                    </div>
                </div>
                <div className="hidden sm:block bg-white">
                    <img className="object-cover max-h-[650px] w-full " src="https://i.pinimg.com/564x/08/49/ec/0849ec3fae1337e159eefe1cb3232097.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;

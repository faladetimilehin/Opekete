import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import s1 from '../../images/O2.png'

import './style.scss';
import axios from 'axios';

const SignUpPage = (props) => {
    const [value, setValue] = useState({  
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirm_password: '',
            });
 
            validator.hideMessages();
            const firstName = value.firstName;
            const lastName = value.lastName;
            const phoneNumber = value.phoneNumber;
            const email = value.email;
            const password = value.password;
            const confirm_password = value.confirm_password

            axios.post("http://localhost:1101/api/v1/auth/register", {firstName, lastName,phoneNumber,email,  password, confirm_password}).then(res => {
                toast.success('Registration Complete successfully!')&&  props.history.push('/login')
            }).catch(err => toast.error ('Registration is invalid'))
            
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="First Name"
                                value={value.firstName}
                                variant="outlined"
                                name="firstName"
                                label="First Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('first name', value.firstName, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Last Name"
                                value={value.lastName}
                                variant="outlined"
                                name="lastName"
                                label="Last Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('last name', value.lastName, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Phone Number"
                                value={value.phoneNumber}
                                variant="outlined"
                                name="phoneNumber"
                                label="Phone Number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('phone number', value.phoneNumber, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                type="password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                type="password"
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, `in: a match`)}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </Grid>
                            <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="instagram"><i className="fa fa-instagram"></i></Button>
                            </Grid>
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <img src={s1} alt="" />
                </div>
            </Grid>
        </Grid>
    )
};

export default withRouter(SignUpPage);
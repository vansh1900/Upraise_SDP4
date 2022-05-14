import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import { CheckAdminCred, AuthenticateUser, AuthenticateVolunteer, AuthenticateOrg } from '../../../Services/AuthenticateService';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [passworderror, setpassworderror] = useState("")
    const [emailerror, setemailerror] = useState("")
    const [Errormessage, setErrormessage] = useState("")
    const [successmessage, setsuccessmessage] = useState("")
    const [category, setcategory] = useState("")
    const [categoryerror, setcategoryerror] = useState("")

    var navigate = useNavigate();

    useEffect(() => {
        setemail("")
        setpassword("")
        // const data=AuthenticateUser("9492481954")
        // console.log(data);
    }, [])

    const LoginHandler = () => {
        const validateemail = ValidateEmail();
        const validatepwd = ValidatePassword();
        const validatecategory = validateCategory();
        if (validateemail === false || validatepwd === false || validateCategory==false) {
            setErrormessage("Please check all the fields tharoughly")
            return;
        }
        else {
            AuthenticateTheUser();
        }
    }

    const AuthenticateTheUser = () => {
        setsuccessmessage("")
        setemailerror("")
        setpassworderror("")
        CheckAdminCred(email,password)
        .then((resp) => {
            navigate("/admin");
        })
        .catch((err) => {
            setcategoryerror("category is important");
        })
        if(category=="donator")
        {
            AuthenticateUser(email,password)
            .then((userdetails) => {
                if (userdetails.status !== 200) {
                    setErrormessage("Invalid Credentials");
                }
                else {
                    if(userdetails.data.status=="Success")
                    {
                        setsuccessmessage("Successfully logged in")
                        localStorage.setItem('details',JSON.stringify(userdetails.data.details))
                        console.log(userdetails.data.details);
                        setErrormessage("")
                        navigate("/user");
                    }
                    else
                    {
                        setErrormessage("Invalid Credentials");
                        setsuccessmessage("")
                    }
                    console.log(userdetails);
                }
            })
            .catch((err) => {
                setErrormessage("Invalid Credentials");
                setsuccessmessage("")
            })
        }
        else if(category=="volunteer")
        {
            AuthenticateVolunteer(email,password)
            .then((details) => {
                if (details.status !== 200) {
                    setErrormessage("Invalid Credentials");
                }
                else {
                    if(details.data.status=="Success")
                    {
                        const data=details.data.details;
                        if(data.joining_status==true)
                        {
                            setsuccessmessage("Successfully logged in")
                            localStorage.setItem('details',JSON.stringify(data))
                            setErrormessage("")
                            navigate("/volunteer");
                        }
                        if(data.joining_status==false)
                        {
                            setsuccessmessage("")
                            setErrormessage("Please wait upto the admin give access.")
                        }
                    }
                    else
                    {
                        setErrormessage("Invalid Credentials");
                        setsuccessmessage("")
                    }
                }
            })
            .catch((err) => {
                setErrormessage("Invalid Credentials");
                setsuccessmessage("")
            })
        }
        else
        {
            AuthenticateOrg(email,password)
            .then((details) => {
                if (details.status !== 200) {
                    setErrormessage("Invalid Credentials");
                }
                else {
                    if(details.data.status=="Success")
                    {
                        console.log(details.data);
                        const data=details.data.details;
                        if(data.joining_status==true)
                        {
                            setsuccessmessage("Successfully logged in")
                            localStorage.setItem('details',JSON.stringify(data))
                            console.log(data);
                            setErrormessage("")
                            navigate("/organization");
                        }
                        if(data.joining_status==false)
                        {
                            setsuccessmessage("")
                            setErrormessage("Please wait upto the admin give access.")
                        }
                    }
                    else
                    {
                        setErrormessage("Invalid Credentials");
                        setsuccessmessage("")
                    }
                }
            })
            .catch((err) => {
                setErrormessage("Invalid Credentials");
                setsuccessmessage("")
            })
        }

    }

    const ValidateEmail = () => {
		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
            setemailerror("")
            return true;
        }
        setemailerror("You have entered an invalid email address!")
        return false;
    }

    const ValidatePassword = () => {
        let n = password.length, a1 = 0, a2 = 0, a3 = 0;
        if (n < 8) {
            setpassworderror("passwordlength must be atleast 8 alphabets")
            return false;
        }
        // var pwddata=password;
        // for(let i=0;i<n;i++)
        // {
        //     if(pwddata[i]>='A' && pwddata[i]<='Z')
        //     {
        //         a1=1;
        //     }
        //     if(pwddata[i]>='a' && pwddata[i]<='z')
        //     {
        //         a2=1;
        //     }
        //     if(pwddata[i]>='0' && pwddata[i]<='1')
        //     {
        //         a3=1;
        //     }
        // }
        // if(a1===0 || a2===0 || a3===0)
        // {
        //     setpassworderror("There must be atleast one Capital letter, one small letter and atleast one digits")
        //     return false;
        // }
        return true;
    }


    const validateCategory = () => {
        let n=category.length;
        if(n==0)
        {
            CheckAdminCred(email,password)
            .then((resp) => {
                navigate("/admin");
            })
            .catch((err) => {
                setcategoryerror("category is important");
            })
            return false;
        }
        else
        {
            return true
        }

    }


    return (
        <div>
            <HomeHeader />
            {
                Errormessage ?
                    <div>
                        <div className="alert alert-danger">
                            {Errormessage}
                        </div>
                    </div>
                    : ""}
            {
                successmessage ?
                    <div>
                        <div className="alert alert-success">
                            {successmessage}
                        </div>
                    </div>
                    : ""}
            <div className="container">
                <div className="loginform">
                    <div className="userlogo">
                        <i className="fa fa-user-circle" style={{ fontSize: '60px' }} aria-hidden="true"></i>
                    </div>
                    <h3 className="heading">Login</h3>
                    <div className="main">
                        <div className="form-group">
                            <input type="email" name="email" placeholder="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control" required />
                            {
                                emailerror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{emailerror}</small>
                                    </div>
                                    : ""}
                        </div>
                        <br />
                        <div className='form-group'>
                            <select name='category' className='form-control' value={category} onChange={(e) => {setcategory(e.target.value)}}>
                                <option value="" disabled>click to select</option>
                                <option value="donator">Donator</option>
                                <option value="volunteer">Volunteer</option>
                                <option value="Organization">Organization</option>
                                {
                                passworderror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{passworderror}</small>
                                    </div>
                                    : ""}
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="password" name="password" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                            {
                                passworderror ?
                                    <div>
                                        <small style={{ color: 'red' }}>{passworderror}</small>
                                    </div>
                                    : ""}
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={() => { LoginHandler() }}>Login</button>
                        <p className="already">
                            Create a new account: <Link className="anchor" to="/register" style={{ color: 'blue' }}>Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


import AuthService from "./auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);


  const oauth2Login = (e) => {
    const callbackUrl = `${window.location.origin}`;
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
    console.log("Oauthing")
  };

  const oauth2Login2 = (responseData) => {

    console.log(responseData.credential)
    
    console.log(jwtDecode(responseData.credential))
    console.log("Oauthing Harder")




    
  };

  useEffect(() => {
    const accessTokenRegex = /code=([^&]+)/;
    const accessCodeRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      // console.log(atob(isMatch[1]))
      const accessToken = isMatch[1];
      localStorage.setItem("access_token", accessToken)
  useEffect(() => {
    if (isLoggedin) {

      const accessToken = localStorage.getItem("access_token");

      AuthService.oauth(accessToken).then(
        (res) => {
          console.log(res);
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
      setIsLoggedin(true);
    }
  }, []);

      navigate("/");

    }
  }, [isLoggedin, navigate]);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    console.log('This worked so eh')

    // form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}

        <form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
                <button className="btn btn-primary btn-block">Login</button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </form>
        <button onClick={oauth2Login} className="btn btn-primary btn-block">Google Oauth2 Login</button>
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    oauth2Login2(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
      </div>
    </div>
  );
};

export default Login;
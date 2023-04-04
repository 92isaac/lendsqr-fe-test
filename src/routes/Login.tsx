import React from 'react';
import Logo from '../assets/Logo.svg';
import SignImg from '../assets/signIn.png';
import { useNavigate } from 'react-router-dom';
import '../styles/login.scss'

const Login: React.FC = () => {
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/dashboard/users');
  };

  return (
    <>
      <div className="wrapper">
        <div className="login__left">
          <div className="login__leftContainer">
            <div className="login__leftHeader">
              <div className="logo">
                <img src={Logo} alt="logo-img" />
              </div>
            </div>
            <div className="login__leftBody">
              <div className="img__container">
                <img src={SignImg} alt="sign in" />
              </div>
            </div>
          </div>
        </div>
        <div className="login__right">
          <div className="login__rightContainer">
            <div className="login__rightHeader">
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
            </div>
            <div className="login__rightBody">
              <form className="login__form" onSubmit={handleSubmit}>
                <div className="form__details">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="form__details">
                  <input type="password" placeholder="Password" />
                  <span>show</span>
                </div>
                <p>forgot password</p>

                <button type='submit'>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

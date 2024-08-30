import React, { useState } from 'react'
import authPic from '../assets/authpic.png';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';




function Register() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: ""

  })

  //console.log(userData);

  //register
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!userData.username || !userData.email || !userData.password || !userData.cPassword) {
      toast.warning("Please fill the form completely!!")
      return

    }

    if (userData.password != userData.cPassword) {
      toast.warning('Passwords do not match!')
      return
    }

    try {
      const result = await registerAPI(userData)
      console.log(result);
      if (result.status == 200) {
        toast.success(`Welcome ${result.data?.username}... Please login to explore our website!!`)
        setUserData({ username: "", email: "", password: "" }
        )

        setTimeout(() => {
          navigate('/login')
        }, 2000);
      } else {
        if (result.response.status == 406) {
          toast.info(result.response.data)

          setUserData({ username: "", email: "", password: "" }
          )
        }
      }

    } catch (err) {
      console.log(err);

    }
  }

  //second - register function

  const handleRegisterTwo = async (e) => {
    if (!userData.username || !userData.email || !userData.password) {
      toast.warning("Please fill the form completely!!")
      return

    }


    try {
      const result = await registerAPI(userData)
      console.log(result);
      if (result.status == 200) {
        toast.success(`Welcome ${result.data?.username}... Please login to explore our website!!`)
        setUserData({ username: "", email: "", password: "" }
        )

        setTimeout(() => {
          navigate('/home')
        }, 2000);
      } else {
        if (result.response.status == 406) {
          toast.info(result.response.data)

          setUserData({ username: "", email: "", password: "" }
          )
        }
      }

    } catch (err) {
      console.log(err);

    }
  }




  return (
    <>
      <Header />
      <div className="row bg-light pb-4" style={{ paddingTop: '20px', paddingBottom: '15px' }}>
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center flex-column">
          <h2>Sign Up</h2>
          <form className="w-50" onSubmit={handleRegister}>
            <div className="form-floating mb-3">
              <input onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={e => setUserData({ ...userData, username: e.target.value })} type="text" className="form-control" id="floatingUsername" placeholder="Username" />
              <label htmlFor="floatingUsername">Create Username</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={e => setUserData({ ...userData, cPassword: e.target.value })} type="password" className="form-control" id="floatingConfirmPassword" placeholder="Password" />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            <button type="submit" className="btn w-100 p-2 text-light" style={{ backgroundColor: '#663399' }}>
              Register
            </button>
          </form>
          <p className="m-0 pt-4 pb-4">or continue with</p>


          <div className=" d-flex flex-column  ">
            <LoginSocialFacebook

              appId="1029092115283300"
              onResolve={(response) => {
                userData.username = response.data.name
                //console.log(userData.username);

                userData.email = response.data.email
                //console.log(userData.email);

                userData.password = response.data.first_name
                //console.log(userData.password);
                //console.log(response);

                handleRegisterTwo()

              }}

              onReject={(error) => {
                console.log(error);


              }}
              
            >


              <FacebookLoginButton />

            </LoginSocialFacebook>

            

            


<div className="ps-2 pe-2">
  
<GoogleLogin
            width={'250px'}
              onSuccess={credentialResponse => {
                const decoded = jwtDecode(credentialResponse?.credential);
                console.log(decoded);
                userData.username = decoded.name
                userData.email = decoded.email
                userData.password = decoded.given_name
                handleRegisterTwo()
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              className='socialButton gButton p-0  ms-5'>
            </GoogleLogin>
</div>

          </div>

          {/* <div className="icons d-flex justify-content-center align-items-center">
            <a href="#" className="me-3"><img width="40px" src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_FACEBOOK.png" alt="facebook icon" /></a>
            <a href="#" className="me-3"><img src="https://th.bing.com/th/id/OIP.yVFYe41xKw4ix4g2aj5QvwHaHa?w=196&h=195&c=7&r=0&o=5&pid=1.7" alt="apple icon" width="30px" /></a>
            <a href="#"><img src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?w=154&h=180&c=7&r=0&o=5&pid=1.7" width="28px" alt="google icon" /></a>
          </div> */}
        </div>

        <div className="col-lg-6 col-md-12 d-flex flex-column text-lg-start mt-4 mt-lg-0 align-items-center text-md-center text-sm-center">
          <div className='col-lg-12 col-md-12'>
            <h1 className="fw-bold ">Sign Up to</h1>
            <p className="fw-bolder ">Lorem ipsum is simply</p>
          </div>

          <div className="row col-lg-12 col-md-12 text-lg-start text-md-center text-sm-center ">
            <div className="col-lg-6 col-md-12 text-lg-start text-center p-0 pt-3">
              <p >If you already have an account<br />You can <a href="/login" className="fw-bold" style={{ color: 'blueviolet', textDecoration: 'none' }}>login here!</a></p>



            </div>

            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0'>
              <img src={authPic} alt="authpic" className="img-fluid mx-auto" style={{ maxWidth: '200px' }} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  )
}

export default Register

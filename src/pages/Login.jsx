import React, { useState } from 'react'
import authPic from '../assets/authpic.png';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../services/allAPI';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';



function Login() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({ email: "", password: "" })

  //login
  const handleLogin = async (e) => {
    e.preventDefault()
    if (userData.email && userData.password) {

      try {
        const result = await loginAPI(userData)

        if (result.status == 200) {

          sessionStorage.setItem('user', JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          toast.success(`Welcome ${result.data.user.username}...`)
          setUserData({
            username: "", email: "", password: ""
          })
          setTimeout(() => {
            navigate('/home')
          }, 2000);
        } else {
          if (result.response.status == 404) {
            toast.warning(result.response.data)
          }
        }


      } catch (err) {
        console.log(err);

      }


    } else {
      toast.warning("Please fill the form completely!!")
    }
  }

  //login function two 
  const handleLoginTwo = async (e) => {

    if (userData.email && userData.password) {

      try {
        const result = await loginAPI(userData)

        if (result.status == 200) {

          sessionStorage.setItem('user', JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          toast.success(`Welcome ${result.data.user.username}...`)
          setUserData({
            username: "", email: "", password: ""
          })
          setTimeout(() => {
            navigate('/home')
          }, 2000);
        } else {
          if (result.response.status == 404) {
            toast.warning(result.response.data)
          }
        }


      } catch (err) {
        console.log(err);

      }


    } else {
      toast.warning("Please fill the form completely!!")
    }
  }



  return (
    <>
      <Header />
      <div className="row bg-light " style={{ paddingTop: '30px', paddingBottom: '55px' }}>

        <div className="col-lg-6 col-md-12 d-flex flex-column  text-lg-start justify-content-end mt-4 mt-lg-0 text-md-center text-sm-center text-xs-center " style={{ paddingLeft: "120px" }}>
          <h1 className="fw-bold pt-3">Sign In to</h1>
          <p className="fw-bolder">Lorem ipsum is simply</p>

          <div className="row">
            <div className="col-lg-7  col-md-12 pe-0 ">
              <p>If you already have an account<br />You can <a href="/" className="fw-bold" style={{ color: 'blueviolet', textDecoration: 'none' }}>register here!</a></p>
            </div>
            <div className="col-lg-5 col-md-12 ps-0">

              <img src={authPic} alt="authpic" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>


        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center flex-column  " style={{ paddingRight: '60px' }}>
          <h2>Sign In</h2>
          <form className="w-50">
            <div className="form-floating mb-3">
              <input onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>


            <div className="form-floating mb-2">
              <input onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <a href='#' style={{ fontSize: '14px', textDecoration: 'none', color: '#000000' }} className="d-flex justify-content-end mb-4">Forgot password?</a>



            <button onClick={handleLogin} type="submit" className="btn w-100 p-2 text-light" style={{ backgroundColor: '#663399' }}>
              Login
            </button>
          </form>
          <p className="m-0 pt-4 pb-4">or continue with</p>

      <div className="p-2 d-flex flex-column">
      <LoginSocialFacebook
            appId="1029092115283300"
            onResolve={(response) => {


              userData.email = response.data.email
              //console.log(userData.email);

              userData.password = response.data.first_name
              //console.log(userData.password);
              //console.log(response);

              handleLoginTwo()

            }}

            onReject={(error) => {
              console.log(error);


            }}
          >


            <FacebookLoginButton className='mb-2' />

          </LoginSocialFacebook>

         <div className="ps-2 pe-2">
         <GoogleLogin
          width={'250px'}
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
              userData.email = decoded.email
              userData.password = decoded.given_name
              handleLoginTwo()
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
         </div>
      </div>

          {/* <div className="icons d-flex justify-content-center align-items-center">
              <a href="#" className="me-3"><img width="40px" src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_FACEBOOK.png" alt="facebook icon" /></a>
              <a href="#" className="me-3"><img src="https://th.bing.com/th/id/OIP.yVFYe41xKw4ix4g2aj5QvwHaHa?w=196&h=195&c=7&r=0&o=5&pid=1.7" alt="apple icon" width="30px" /></a>
              <a href="#"><img src="https://th.bing.com/th/id/OIP.lsGmVmOX789951j9Km8RagHaHa?w=154&h=180&c=7&r=0&o=5&pid=1.7" width="28px" alt="google icon" /></a>
            </div> */}
        </div>

      </div>
      <ToastContainer />
    </>
  )
}

export default Login

import React from 'react'

import './SigninPage.css'
import { Helmet } from 'react-helmet'

const SigninPage = (props) => {
  return (
    <div className="signin-container">
       <Helmet>
        <title>Euphoria | Sign in</title>
      </Helmet>
      <div className="signin-signin">
        <img
          src="/signin/Euphoria Presentaion.png"
          alt="EuphoriaPresentaion1911128"
          className="signin-euphoria-presentaion191"
        />
        <img
          src="/signin/Euphoria Presentaion 1.png"
          alt="EuphoriaPresentaion11128"
          className="signin-euphoria-presentaion1"
        />
        <img src="/signin/Rectangle 49.png" alt="Rectangle494169" className="signin-rectangle49" />
        <input src="/signin/Rectangle 50.png" alt="Rectangle504169" className="signin-rectangle50" />
        <input src="/signin/Rectangle 51.png" alt="Rectangle514169" className="signin-rectangle51" />
        <input src="/signin/Rectangle 52.png" alt="Rectangle524169" className="signin-rectangle52" />
        <input type="password" src="/signin/Rectangle 56.png" alt="Rectangle564170" className="signin-rectangle56" />
        <input src="/signin/Rectangle 57.png" alt="Rectangle574170" className="signin-rectangle57" />
        <img src="/signin/Rectangle 55.png" alt="Rectangle554170" className="signin-rectangle55" />
        <img src="/signin/Rectangle 59.png" alt="Rectangle591130" className="signin-rectangle59" />
        <input type="checkbox" src="/signin/Rectangle 58.png" alt="Rectangle584170" className="signin-rectangle58" />
        <span className="signin-text">
          <span>
            First name
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="signin-text02">
          <span>
            Last name
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="signin-text04">
          <span>Work email</span>
        </span>
        <span className="signin-text06">
          <span>Password</span>
        </span>
        <span className="signin-text08">
          <span>Phone Number</span>
        </span>
        <span className="signin-text10">
          <span className="signin-text11">
            I agree to the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Terms of Services</span>
        </span>
        <span className="signin-text13">
          <span>Sign in</span>
        </span>
        <span className="signin-text15">
          <span>Sign in with Google</span>
        </span>
        <span className="signin-text17">
          <span className="signin-text18">
            Already have an admin account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Login here</span>
        </span>
        <span className="signin-text20">
          <span className="signin-text21">
            Are you an employee at a company that uses Euphoria Gamify?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Login in here</span>
        </span>
        <img src="/signin/17.png" alt="IMAGE174171" className="signin-image17" />
        <img src="/signin/18.png" alt="IMAGE184171" className="signin-image18" />
        <img src="/signin/16.png"alt="IMAGE164149" className="signin-image16" />
        <img src="/signin/Ellipse 4.png" alt="Ellipse41128" className="signin-ellipse4" />
        <img src="/signin/E.png" alt="Ellipse41128" className="signin-ellipse400" />
        <img src="/signin/uphoria Gamify.png" alt="Ellipse41128" className="signin-ellipse401" />
        <img src="/signin/Ellipse 5.png" alt="Ellipse51128" className="signin-ellipse5" />
        <img src="/signin/image 11.png" alt="image111130" className="signin-image11" />
        <img src="/signin/Ellipse 1095.png" alt="Ellipse10953606" className="signin-ellipse1095" />
        <img
          src="/signin/ready.png"
          alt="readyplayermeremovebgpreview11128"
          className="signin-readyplayermeremovebgpreview1"
        />
      </div>
    </div>
  )
}

export default SigninPage

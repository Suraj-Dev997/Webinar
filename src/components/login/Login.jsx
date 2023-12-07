import React, { useState } from 'react';

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap/css/bootstrap.min.css'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', userId, password);
  };

  return (
    <div className="fix-menu">
      {/* Pre-loader start */}
      {/* <div className="theme-loader">
        <div className="loader-track">
          <div className="loader-bar"></div>
        </div>
      </div> */}
      {/* Pre-loader end */}

      <section className="login p-fixed d-flex text-center bg-primary common-img-bg">
        {/* Container-fluid starts */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {/* Authentication card start */}
              <div className="login-card card-block auth-body mr-auto ml-auto">
                <form className="md-float-material">
                  <div className="text-center">
                    <h2>Logo</h2>
                  </div>
                  <div className="auth-box">
                    <hr />
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <span className="md-line"></span>
                    </div>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="md-line"></span>
                    </div>
                    <div className="row m-t-30">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"
                          onClick={handleLogin}
                        >
                          Log in
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                </form>
                {/* end of form */}
              </div>
              {/* Authentication card end */}
            </div>
            {/* end of col-sm-12 */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container-fluid */}
      </section>

      {/* Warning Section Ends */}
    </div>
  );
};

export default Login;

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../../assets/css/style.css'
import '../../../assets/css/bootstrap/css/bootstrap.min.css'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    try {
      const apiUrl = 'https://digiapi.netcastservice.co.in/AccountApi/LoginValidate';

      // Prepare payload
      const payload = {
        EmailId: null,
        EmpCode: userId, // Assuming userId is equivalent to EmpCode
        Password: password,
        IpAddress: "::1",
        UserDevice: null,
        UserBrowser: null,
        BrowserDetail: {},
        LoginTypeField: "EMPCODE",
        ClientId: "10001",
        DeptId: "1",
        UserId: null,
        CusQuizid: null
      };

      // Make API call
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Parse response JSON
      const data = await response.json();

      // Check the errorCode in the response
      if (data.errorCode === "1") {
        // Successful login, you can handle the response data here
        console.log('Login successful:', data.responseData);
        sessionStorage.setItem('userData', JSON.stringify(data.responseData));
        navigate('/dashboard');

        // Perform additional actions if needed, e.g., redirect to another page
      } else {
        // Handle login error
        
        console.error('Login failed:', data.errorDetail);
      }

    } catch (error) {
      console.error('Error during login:', error.message);
    }
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
                        type="text"
                        className="form-control"
                        placeholder="User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <span className="md-line"></span>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
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

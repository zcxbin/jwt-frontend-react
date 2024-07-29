import "./register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");

  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    let check = isValid();
    let userData = {
      email,
      phone,
      username,
      password,
    }
    console.log(">>> check userData: ", userData)
  };

  const isValid = () => {
    let regx = /\S+@\S+\.\S+/;
    if (!email) {
      toast.error("Email is required!");
      return false;
    }
    if (!regx.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (!phone) {
      toast.error("Phone is required!");
      return false;
    }
    if (!password) {
      toast.error("Password is required!");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and confirm password does not match!");
      return false;
    }

    return true;
  }

  useEffect(() => {
    // axios.get("http://localhost:8080/api/test-api").then(data => {
    //   console.log(">> check data axios :", data)
    // })
  }, []);
  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="branch">ZCXBIN</div>
            <div className="detail">
              ZCXBIN help you connect and share with the people in the world
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="branch d-sm-none">ZCXBIN</div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Re-enter Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassWord(event.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <hr></hr>
            <div className="text-center" type="submit" onClick={() => handleLogin()}>
              <button className="btn btn-success">
                Already have an account. Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

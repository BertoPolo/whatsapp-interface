import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./login.css";
import {changePhoneNumber} from "../../slices/user/userSlice";
import {useSelector,useDispatch} from "react-redux";

function Login() {
  const phoneNumber = useSelector((state) => state.user.phoneNumber);
  const dispatch = useDispatch();

  const [telephone, setTelephone] = useState();
  const [password, setPassword] = useState();

  const handleRegister = (e) => {
    window.location.href = "/register";
  };

  const handleGoogleFailure = (response) => {
    alert(response);
  };

  const handleGoogleLogin = (googleData) => {
    console.log(googleData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      email: telephone,
      password: password,
    };
    const response = await fetch(
      "https://whatsapp-v1-api.herokuapp.com/users/session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      window.location.href = "/chat";

      console.log(data);
      localStorage.setItem("token", data.accessToken);
      dispatch(changePhoneNumber(telephone));
      localStorage.setItem("telephone",telephone);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <div id="main-container">
          <div className="login1">
            <Form className="text-center" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Number"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className=" mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <div className="button-container">
                <button className="LoginButton1" type="submit">
                  Login
                </button>

                <button
                  className="LoginButton1"
                  clientId={process.env.React_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={handleGoogleLogin}
                  onFailure={handleGoogleFailure}
                  cookiePolicy={"single_host_origin"}
                >
                  Google
                </button>
              </div>
            </Form>
            <div className="register-container">
              <a
                id="a"
                href="https://whatsapp-v1-api.herokuapp.com/users/googleLogin"
              >
                <button className="LoginButton2">Register</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;

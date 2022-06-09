import NavBar from "../NavBar/NavBar";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import "../../components/Register/Register.css";

function Register() {
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      email: telephone,
      password: password,
      username: username,
    };
    const response = await fetch(
      "https://whatsapp-v1-api.herokuapp.com/users/account",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      }
    );
    if (response.status === 201) {
      const data = await response.json();
      window.location.href = "/chat";
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <div id="main-container2">
          <div className="login">
            <div className="container">
              <div className="row">
                <Form className="formDir  text-center" onSubmit={handleSubmit}>
                  <div
                    id="imageContainer"
                    className="col-md-6 mx-auto text-center"
                  >
                    <label for="Bfile">
                      <div className="addImage">
                        <img
                          src={require("../../Data/plusM.jpg")}
                          alt="add Images"
                          className="plus"
                        />
                      </div>
                    </label>
                    <input id="Bfile" type="file" />
                  </div>
                  <div className="col-md-6 mx-auto  formContainer">
                    <Form.Group
                      className="formSize mb-3 "
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="formSize mb-3 "
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Telephone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Number"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className=" formSize mb-3  "
                      controlId="formBasicPassword"
                    >
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

                    <button className="LoginButton" type="submit">
                      Register
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Register;

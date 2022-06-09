import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from "react-bootstrap";
import "./Not_Found.css";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <div id="main-container3">
            <img
              src={require("../../Data/404-error.png")}
              alt="Not Found img"
            />
          </div>
        </Container>
      </>
    );
  }
}

export default NotFound;

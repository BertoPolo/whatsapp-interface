import React from "react";
import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div id="MainNav">
        <nav id="NavBar" className="navbar navbar-expand-lg ">
          <Container>
            <Row>
              <div className="logo-text">
                <img
                  className="logo"
                  src={require("../../Data/whatsapp-logo.png")}
                  alt="logo"
                />

                <p id="text" className="navbar-brand text-light ">
                  WHATSAPP WEB
                </p>
              </div>
            </Row>
          </Container>
        </nav>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import "../NavBar/NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div id="MainNav">
        <nav id="NavBar" className="navbar navbar-expand-lg ">
          <Container>
            <Row>
              <div className="logo-text"></div>
            </Row>
          </Container>
        </nav>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { Navbar } from "react-bootstrap";

import { connect, useSelector } from "react-redux";

const Dashboard = () => {
  return (
    //   <Nav>
    //     <p>Good Morning Good Evening and in case I don't see you Good night</p>
    //   </Nav>
    <div id="nav">
    {/* <Container> */}
      <Navbar id="nav">
        <Navbar.Collapse>
          <Navbar.Brand href="#home">Claims Processing</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-center">
          <Link id="navLink" to={"/"}>List Of Claims </Link>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text id="nav">
            Signed in as: <a href="#login">Melissa Smith</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
    </div>
  );
};
export default connect(null, {  })(
  withRouter(Dashboard)
);

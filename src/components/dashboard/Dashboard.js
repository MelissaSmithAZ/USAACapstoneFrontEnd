    import React from "react";
    import { Link } from "react-router-dom";
import { NavLink, Button, Nav } from "reactstrap";
    import { Navbar } from "react-bootstrap"
import { connect, useSelector } from "react-redux";


    
const Dashboard = () => {
    
    return (
      //   <Nav>
      //     <p>Good Morning Good Evening and in case I don't see you Good night</p>
      //   </Nav>

      <Navbar>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default Dashboard;

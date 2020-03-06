import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateCarNotOnPolicyCheckList } from "../../store/CarNotOnPolicyCheckLists/action";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  Container,
  Row,
  Nav,
  NavItem
} from "reactstrap";
const SideNavForm = props => {
  return (
    <div>
      <h4 id="centerTxt">Helpful Hints</h4>
      <Nav vertical>
        <p id="formContentbullet"> * Script for advising Coverage issue </p>

        <p id="formContenttab">
          Lor magna aliqua. Laoreet id donec ultrices tincidunt arcu. Sit amet
          mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Tortor
          vitae purus faucibus ornare. Egestas egestas"
        </p>
        <p id="formContenttab"> * Rental Companies Links </p>
        <NavItem id="linkFormTxtNav">
          <Link id="linkFormTxtNav">Avis</Link>
        </NavItem>
        <NavItem id="linkFormTxtNav">
          <Link id="linkFormTxtNav">Eenterprise </Link>
        </NavItem>
        <p id="formContenttab">*Bill of Sale Daate must be:</p>
        <NavItem id="formContenttab">
          <Link>Example Bill Of Sale</Link>
        </NavItem>
        <NavItem>
          <Link id="formContenttab">Policy Lanauge NOV</Link>
          <p id="formContenttab">
            "Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Laoreet id donec ultrices tincidunt arcu. Sit amet
            mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Tortor
            vitae purus faucibus ornare. Egestas ege
          </p>
        </NavItem>
        <p id="formContenttab">Q & A</p>
        <p id="formContenttab">
          Question: Eget felis eget nunc lobortis mattis aliquam.?
        </p>
        <p id="formContenttab">
          Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis
          nunc. Sollicitudin aliquam ultrices sagittis orci a.
        </p>
        <p id="formContenttab">
          Question: Eget felis eget nunc lobortis mattis aliquam.?
        </p>
        {/* <p id="formContenttab">Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orci a. Cursus </p>
                <p id="formContenttab">Question: Eget felis eget nunc lobortis mattis aliquam.?</p>
                <p id="formContenttab">Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orc</p>
                <p id="formContenttab">Question: Eget felis eget nunc lobortis mattis aliquam.?</p>
                <p id="formContenttab">Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orc.</p> */}
      </Nav>
    </div>
  );
};
export default SideNavForm;

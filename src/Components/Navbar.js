import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../adword.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <input
          type="text"
          placeholder="Search products,brands and categories.."
        />
        <div className="search-container">
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>{" "}
          </li>
          <li className="nav-item ml-5">
            {" "}
            <Link to="/about" className="nav-link">
              {" "}
              About
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              {" "}
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    font-family: "Permanent Marker", cursive;
    position: relative;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
  }
  .topnav {
    overflow: hidden;
    background-color: #e9e9e9;
  }

  input[type="text"] {
    padding: 6px;
    border: none;
    border-radius: 5px;
    margin-top: 8px;
    font-ize: 17px;
    width: 300px;
  }
  .search-container button {
    float: right;
    cursor: pointer;
    border-radius: 7px;
    margin-top: 8px;
    margin-right: 16px;
  }

  .search-container button:hover {
    background: var(--mainDark);
  }
`;

import React from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 1em 0em 1em 0em;
  background-color: #808080;
`;

function Footer() {
  return (
    <Container>
      <Link to="/">
        <AiFillHome />
      </Link>
      <Link to="/repos">
        <AiOutlineMenu />
      </Link>
      <Link to="/profile">
        <AiOutlineUser />
      </Link>
    </Container>
  );
}

export default Footer;

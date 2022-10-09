import React from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineStar, AiOutlineGithub } from "react-icons/ai";
import { GiPitchfork } from "react-icons/gi";

const Container = styled.div`
  padding-left: 0.2em;
  padding-right: 0.2em;
  margin: 0;
  width: auto;
  height: auto;
  border: solid;
  background-color: #80808079;
  margin-top: 1em;
  text-align: start;
  border-radius: 1em;
`;
function Card({ text, stars, forks, watcher, url }) {
  return (
    <a href={url} style={{ textDecoration: "none", color: "black" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{text}</p>
          <p style={{ margin: "0" }}>
            <AiOutlineGithub style={{ fontSize: "40px" }} />
          </p>
        </div>
        <div style={{ display: "flex", textAlign: "start" }}>
          <p style={{ padding: "0", margin: "0px" }}>
            <AiOutlineStar />
            {stars}
          </p>
          <p style={{ padding: "0px", margin: "0px" }}>
            <AiOutlineUser /> {watcher}
          </p>
          <p style={{ padding: "0px", margin: "0px" }}>
            <GiPitchfork /> {forks}
          </p>
        </div>
      </Container>
    </a>
  );
}

export default Card;

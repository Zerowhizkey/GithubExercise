import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: auto;
  height: auto;
  border: solid;
  background-color: #80808079;
  margin: 0em 0em 1em 0em;
  text-align: center;
  border-radius: 1em;
`;
function Card({ text, id }) {
  return (
    <Container key={id}>
      <p>Repos - {text}</p>
    </Container>
  );
}

export default Card;

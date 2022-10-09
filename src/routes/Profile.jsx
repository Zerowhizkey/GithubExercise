import React from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`;

function Profile() {
  const getUser = useLoaderData();
  return (
    <Container>
      <img
        src={getUser.avatar_url}
        style={{ height: "10em", width: "10em", borderRadius: "100%" }}
      />
      <div>
        <h2>{getUser.login}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "grid" }}>
            <p style={{ margin: "0", padding: "0" }}>Repos</p>
            {getUser.public_repos}
          </div>
          <div style={{ display: "grid" }}>
            <p style={{ margin: "0", padding: "0" }}>Followers</p>
            {getUser.followers}
          </div>
        </div>
        <div style={{ marginTop: "3em" }}>
          <p>{getUser.bio}</p>
          <a href={getUser.html_url}>Check out my github</a>
        </div>
      </div>
    </Container>
  );
}

export default Profile;

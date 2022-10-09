import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
`;

const WelcomeDiv = styled.div`
  margin: 2em;
  justify-content: space-between;
`;

function Home() {
  const getUpdatedRepos = useLoaderData();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.github.com/users/Zerowhizkey",
    }).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <WelcomeDiv>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Welcome - {user.login}</p>
          <img
            src={user.avatar_url}
            style={{ height: "4em", width: "4em", borderRadius: "50%" }}
          />
        </div>
        <div>
          <p>Your latest updated repos:</p>
        </div>
        {getUpdatedRepos.map((data) => (
          <Card text={data.name} key={data.id} />
        ))}
        <a href="/repos">See all my repos</a>
        <a href="/search">Search on a github user</a>
      </Container>
    </WelcomeDiv>
  );
}

export default Home;

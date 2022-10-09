import React from "react";
import { useLoaderData } from "react-router-dom";
import RepoCard from "../components/RepoCard";
import styled from "styled-components";

const Container = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  margin: 1em 4em 4em 4em;
`;
function Repos() {
  const Getall = useLoaderData();
  return (
    <div style={{ textAlign: "center" }}>
      <p>My repos </p>
      <Container>
        {Getall.map((data) => (
          <div key={data.id}>
            <RepoCard
              url={data.html_url}
              text={data.name}
              stars={data.stargazers_count}
              forks={data.forks}
              watcher={data.watchers_count}
            />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Repos;

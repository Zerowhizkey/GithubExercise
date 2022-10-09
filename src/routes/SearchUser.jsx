import React, { useEffect, useState } from "react";
import axios from "axios";
import { RepoDetails } from "../components/RepoDetails";

function SearchUser() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    setRepos([]);
    setDetails({});
  }, [username]);

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then((res) => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }
  function renderRepo(repo) {
    return (
      <div onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2>{repo.name}</h2>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  return (
    <div style={{ display: "grid", textAlign: "center" }}>
      <div>
        <div>
          <form style={{marginTop: "1em"}}>
            <input
              type="text"
              value={username}
              placeholder="Github Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSubmit}>
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          <RepoDetails details={details} loading={detailsLoading} />
          <div style={{margin: "10px"}}>{repos.map(renderRepo)}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;

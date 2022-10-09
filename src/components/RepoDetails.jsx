export function RepoDetails({ details, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div style={{ margin: "0.5em" }}>
        <label>Name:</label>
        <span>{details.name}</span>
      </div>
      <div style={{ margin: "0.5em" }}>
        <label>Fork Count:</label>
        <span>{details.forks}</span>
      </div>
      <div style={{ margin: "0.5em" }}>
        <label>Language:</label>
        <span>{details.language}</span>
      </div>
      <div style={{ margin: "0.5em" }}>
        <label>Stars:</label>
        <span>{details.stargazers_count}</span>
      </div>
    </div>
  );
}

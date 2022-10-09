import axios from "axios";

export async function getData() {
  const { data } = await axios.get(
    "https://api.github.com/users/Zerowhizkey/repos"
  );
  return data;
}

export async function getUpdatedRepos() {
  const { data } = await axios.get(
    "https://api.github.com/users/Zerowhizkey/repos?sort=updated&direction=desc&per_page=3"
  );
  return data;
}

export async function getUser() {
  const { data } = await axios.get("https://api.github.com/users/Zerowhizkey");
  return data;
}

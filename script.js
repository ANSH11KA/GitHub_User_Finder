async function getGitHubProfile() {
  const username = document.getElementById("username").value;
  const profileDiv = document.getElementById("profile");

  if (!username) {
    profileDiv.innerHTML = `<p>Please enter a username.</p>`;
    return;
  }

  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("User not found");

    const data = await response.json();

    profileDiv.innerHTML = `
          <h2>${data.name || data.login}</h2>
          <img src="${data.avatar_url}" alt="${data.login}'s avatar" />
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Following:</strong> ${data.following}</p>
          <p><a href="${
            data.html_url
          }" target="_blank">View GitHub Profile</a></p>
        `;
  } catch (error) {
    profileDiv.innerHTML = `<p>User not found.</p>`;
  }
}

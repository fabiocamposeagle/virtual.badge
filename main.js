const LinksSocialMedia = {
  github: "fabiocamposeagle",
  linkedin: "fabiocamposeagle",
  facebook: "FabioCamposEagle",
  twitter: "fabioeagle72",
  instagram: "fabiocamposeagle"
}

function changeSocialMediaLinks() {
  for (let li of linkedin.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

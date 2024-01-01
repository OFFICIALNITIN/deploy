const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const githubData = {
    "login": "OFFICIALNITIN",
    "id": 88224042,
    "node_id": "MDQ6VXNlcjg4MjI0MDQy",
    "avatar_url": "https://avatars.githubusercontent.com/u/88224042?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/OFFICIALNITIN",
    "html_url": "https://github.com/OFFICIALNITIN",
    "followers_url": "https://api.github.com/users/OFFICIALNITIN/followers",
    "following_url": "https://api.github.com/users/OFFICIALNITIN/following{/other_user}",
    "gists_url": "https://api.github.com/users/OFFICIALNITIN/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/OFFICIALNITIN/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/OFFICIALNITIN/subscriptions",
    "organizations_url": "https://api.github.com/users/OFFICIALNITIN/orgs",
    "repos_url": "https://api.github.com/users/OFFICIALNITIN/repos",
    "events_url": "https://api.github.com/users/OFFICIALNITIN/events{/privacy}",
    "received_events_url": "https://api.github.com/users/OFFICIALNITIN/received_events",
    "type": "User",
    "site_admin": false,
    "name": "NITIN",
    "company": null,
    "blog": "",
    "location": "Pune",
    "email": null,
    "hireable": true,
    "bio": "Code 💻 Eat 🍴 Sleep 💤 Repeat 🔂 ",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2021-07-31T05:45:45Z",
    "updated_at": "2023-12-28T15:28:58Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("Hello from server!")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
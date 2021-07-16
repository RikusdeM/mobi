import {User, userFromJson, gitHubUserInfoFromJson, GithubUserInfo} from "./user";
import config from "./config";
import {app} from "./webserver";
import axios from "axios";

app.get('/github/:language/:page', async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    let language: string = req.params.language
    let page: number = req.params.page
    if (language !== 'undefined') {
        let usersData: Promise<Array<Promise<GithubUserInfo>>> = getUsersByLanguage(language, page)
        let userDataAr: Array<Promise<GithubUserInfo>> = await usersData
        let users: Array<GithubUserInfo> = await Promise.all(userDataAr)
        res
            .status(200)
            .send(JSON.stringify(users))
    }
})

app.post('/github', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if (!req.body.name) {
        return res
            .status(400)
            .json({error: '"name" is required'})
    } else {
        let user: User = userFromJson(JSON.stringify(req.body))
        if (typeof user !== 'undefined') {
            let userData: Promise<GithubUserInfo> = getUserInfo(user.name)
            userData.then(value => {
                res
                    .status(200)
                    .send(JSON.stringify(value))
            })
                .catch(e => {
                    console.log(e)
                    res
                        .status(404)
                        .send(JSON.stringify(e))
                })
        }
    }
})

export function getUsersByLanguage(language: string, page: number): Promise<Array<Promise<GithubUserInfo>>> {
    const request =
        axios
            .get('https://api.github.com/search/repositories', {
                headers: {
                    authorization: config.token,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                params: {
                    q: "language:" + language + " " + "page:" + page
                }
            })
            .then(result => {
                // handle success
                let x: Array<Promise<GithubUserInfo>> = result.data.items.map(item => {
                    return getUserInfo(item.owner.login)
                })
                return x
            })
    return request
}

export function getUserInfo(username: string): Promise<GithubUserInfo> {
    const request =
        axios
            .get('https://api.github.com/users/' + username, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                auth: {
                    username: 'RikusdeM',
                    password: config.token
                }
            })
            .then(result => {
                // handle success
                let dataString: string = JSON.stringify(result.data)
                let userInfo = gitHubUserInfoFromJson(dataString)
                return userInfo
            })
    return request
}


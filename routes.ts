import {User, userFromJson, gitHubUserInfoFromJson, GithubUserInfo} from "./user";
import config from "./config";
import {app} from "./webserver";
import axios from "axios";

app.get('/github/:username', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    let username = req.params.username
    if(username !== 'undefined'){
        console.log(username)
        let user:User = new User(username)
        if (typeof user !== 'undefined'){
            let userData:Promise<GithubUserInfo> = getUserInfo(user.name)
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

app.post('/github', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if(!req.body.name){
        return res
            .status(400)
            .json({error: '"name" is required'})
    }
    else{
        let user:User = userFromJson(JSON.stringify(req.body))
        if (typeof user !== 'undefined'){
            let userData:Promise<GithubUserInfo> = getUserInfo(user.name)
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

export function getUserInfo(username:string): Promise<GithubUserInfo> {
    const request =
        axios
        .get('https://api.github.com/users/' + username, {
            headers: {
                authorization: config.token,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(result => {
            // handle success
            let dataString:string = JSON.stringify(result.data)
            let userInfo = gitHubUserInfoFromJson(dataString)
            return userInfo
        })
    return request
}


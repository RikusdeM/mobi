import {User, userFromJson, gitHubUserInfoFromJson, GithubUserInfo} from "./user";
import app from "./webserver";
const axios = require('axios')

const usr:User = {
    name:"Rikus"
}

app.get('/helloworld', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(usr))
})

app.post('/github', function (req, res) {
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
                        .status(500)
                        .send(JSON.stringify(e))
                })
        }
    }
})

function getUserInfo(username:string): Promise<GithubUserInfo> {
    const request =
        axios
        .get('https://api.github.com/users/' + username)
        .then(result => {
            // handle success
            let dataString:string = JSON.stringify(result.data)
            let userInfo = gitHubUserInfoFromJson(dataString)
            return userInfo
        })
    return request
}


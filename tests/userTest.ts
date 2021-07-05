import { expect } from 'chai';
import * as User from '../src/user'
import {getUserInfo} from "../src/routes";
import {GithubUserInfo} from "../src/user";
import {shutDown} from "../src/webserver";

describe('User from JSON function', () => {
    it('should return a instance of User', () => {
        let usrJsonStr = '{"name":"RikusdeM"}';
        let createdUsr = User.userFromJson(usrJsonStr);
        expect(JSON.stringify(createdUsr)).to.equal(usrJsonStr);
    });
});

describe('GithubUserInfo from GET', () => {
    it('should return a instance of GithubUserInfo', () => {
        let userInfo:Promise<GithubUserInfo> = getUserInfo("RikusdeM")
        userInfo.then(usr => {
        expect(usr.login).to.equal("RikusdeM");
        expect(usr.name).to.equal("Rikus de Milander");
        expect(usr.avatar_url).to.equal("https://avatars.githubusercontent.com/u/23331552?v=4");
        expect(usr.followers).greaterThanOrEqual(0);
        shutDown()
        })
    });
});


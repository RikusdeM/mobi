import { expect } from 'chai';
import * as User from '../user'
import {getUserInfo} from "../routes";
import {GithubUserInfo} from "../user";
import {shutDown} from "../webserver";

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
        expect(usr.login).to.be.a('string');
        expect(usr.avatar_url).to.be.a('string');
        expect(usr.followers_url).to.be.a('string');
        expect(usr.following_url).to.be.a('string');
        expect(usr.repos_url).to.be.a('string');
        expect(usr.events_url).to.be.a('string');
        expect(usr.type).to.be.a('string');
        expect(usr.name).to.be.a('string');
        expect(usr.company).to.be.a('string');
        expect(usr.blog).to.be.a('string');
        expect(usr.location).to.be.a('string');
        expect(usr.email).to.be.a('string');
        expect(usr.twitter_username).to.be.a('string');
        expect(usr.public_repos).to.be.a('number');
        expect(usr.public_gists).to.be.a('number');
        expect(usr.followers).greaterThanOrEqual(0);
        expect(usr.following).to.be.a('number');
        expect(usr.created_at).to.be.a('string');
        expect(usr.updated_at).to.be.a('string');
        })
        .finally(() => shutDown())
    });
});


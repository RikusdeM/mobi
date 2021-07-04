import { expect } from 'chai';

import * as User from '../user'

describe('User from JSON function', () => {
    it('should return a instance of User', () => {
        // const result = "Hello World!";
        let usrJsonStr = '{"name":"RikusdeM"}';
        let createdUsr = User.userFromJson(usrJsonStr);
        expect(JSON.stringify(createdUsr)).to.equal(usrJsonStr);
    });
});
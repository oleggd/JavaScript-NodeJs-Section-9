const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'User1',
            room: 'Room 1'
        }, {
            id: '2',
            name: 'User2',
            room: 'Room 2'
        },{
            id: '3',
            name: 'User3',
            room: 'Room 1'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Test',
            room: 'Test room'
        };
        var resUsers = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser('3');
        
        expect(users.users.length).toEqual(2);
        expect(user.name).toEqual('User3');

    });
    it('should not remove a user', () => {
        var user = users.removeUser('4');
        expect(user).toBeUndefined;
        expect(users.users.length).toEqual(3);
    });
    it('should find user', () => {
        var user = users.getUser('2');
        expect(user.name).toEqual('User2');       
    });

    it('should not find user', () => {
        var user = users.getUser('4');
        expect(user).toBeUndefined;        
    });


    it('should return names for Room 1',()=>{
        var userList = users.getUserList('Room 1');
        expect(userList).toEqual(['User1','User3'])
    });
    it('should return names for Room 2',()=>{
        var userList = users.getUserList('Room 2');
        expect(userList).toEqual(['User2'])
    });
});
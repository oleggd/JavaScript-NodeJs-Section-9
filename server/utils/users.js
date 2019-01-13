// addUser(id,name,room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        // return user that was removed
        var removedUser;
        this.users = this.users.filter((user) => { 
            if ( user.id !== id ) {
                return user; 
            } else {
                removedUser = user;
            }
        });
        return removedUser;
    }
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    };
    getUserList(room) {
        var users = this.users.filter((user)=> user.room === room);
        var namesArray = users.map((user)=> user.name);
        return namesArray;
    }
}

module.exports = {Users};

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} old.`
//     }
// }

// var me = new Person('Oleg', 42);

// console.log('this.name : ', me.name);
// console.log('this.age : ', me.age);
// console.log('description',me.getUserDescription());